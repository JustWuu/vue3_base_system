<script setup lang="ts">
import { ref, reactive, type VNodeRef } from 'vue'
import VuePictureCropper, { cropper } from 'vue-picture-cropper'
import { Random } from '@/utils'
import { useWindowSize } from '@vueuse/core'

const random = new Random()
const { width } = useWindowSize()

// interface
type NewVNodeRef = VNodeRef & {
  exportCSV: Function
  maximized: Boolean
}

// emit
const emit = defineEmits(['cropper'])
// define
defineProps({
  aspectRatio: {
    type: Number,
    default: 1 / 1
  },
  limit: {
    type: Object,
    default: () => ({ width: 250, height: 250 })
  },
  chooseLabel: {
    type: String,
    default: '上傳'
  },
  header: {
    type: String,
    default: '裁切'
  }
})

// firebase

//data
const dialog = ref<NewVNodeRef>()

const pic = ref<string>('')

const cropperDialog = ref(false)

const result = reactive({
  dataURL: '',
  blobURL: ''
})

//methods
function ready() {
  // console.log('Cropper is ready.')
}

function selectFile(files: any) {
  pic.value = ''
  result.dataURL = ''
  result.blobURL = ''

  // Get selected files
  const file = files.files[0]

  // Convert to dataURL and pass to the cropper component
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    // Update the picture source of the `img` prop
    pic.value = String(reader.result)

    // Show the modal
    cropperDialog.value = true
    if (width.value < 769) {
      dialog.value!.maximized = true
    } else {
      dialog.value!.maximized = false
    }
  }
}

const hideDialog = () => {
  if (!cropper) return
  cropperDialog.value = false
}

async function getResult() {
  if (!cropper) return
  const base64 = cropper.getDataURL()
  const blob: Blob | null = await cropper.getBlob()
  if (!blob) return

  const file = await cropper.getFile({
    fileName: random.generateRandomString(10)
  })

  // console.log({ base64, blob, file })
  result.dataURL = base64
  result.blobURL = URL.createObjectURL(blob)

  emit('cropper', file)
  cropperDialog.value = false
}

function reset() {
  if (!cropper) return
  cropper.reset()
}
</script>

<template>
  <FileUpload
    :chooseLabel="chooseLabel"
    mode="basic"
    name="demo[]"
    url="/api/upload"
    accept="image/*"
    customUpload
    :auto="true"
    @select="selectFile($event)"
  />

  <Dialog
    ref="dialog"
    v-model:visible="cropperDialog"
    :style="{ width: '600px', height: 'auto' }"
    :header="header"
    :modal="true"
    class="p-fluid cropper-dialog"
    :closable="false"
    :draggable="false"
    maximizable
  >
    <template #header>
      <div class="w-full flex justify-content-between align-items-center">
        <span class="p-dialog-title">{{ header }}</span>
        <Button rounded outlined icon="pi pi-replay" size="small" @click="reset" />
      </div>
    </template>
    <div class="m-0 grid">
      <VuePictureCropper
        :boxStyle="{
          margin: 'auto'
        }"
        :img="pic"
        :options="{
          viewMode: 1,
          dragMode: 'crop',
          aspectRatio: aspectRatio
        }"
        :presetMode="{
          mode: 'round',
          width: limit.width,
          height: limit.height
        }"
        @ready="ready"
      />
    </div>

    <template #footer>
      <Button label="取消" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
      <Button label="確定" icon="pi pi-check" class="p-button-text" @click="getResult" />
    </template>
  </Dialog>
</template>

<style lang="scss" scoped></style>
