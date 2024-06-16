<script setup lang="ts">
import { reactive, ref, watch, toRefs } from 'vue'
import tinymce from 'tinymce/tinymce.js'
import 'tinymce/models/dom' //(TinyMCE 6)

// 外觀
import 'tinymce/skins/ui/oxide/skin.css'
import 'tinymce/themes/silver'

// Icon
import 'tinymce/icons/default'

// 用到的外掛
import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/emoticons/js/emojis.js'
import 'tinymce/plugins/table'
import 'tinymce/plugins/quickbars'
import 'tinymce/plugins/image'

// 語言包
import 'tinymce-i18n/langs5/zh_TW.js'
// import 'tinymce-i18n/langs/zh_Hans.js' (TinyMCE 6 的簡體中文)

// TinyMCE-Vue
import Editor from '@tinymce/tinymce-vue'

import { FireStorage } from '@/api'
import { Random } from '@/utils'

// firebase
const fireStorage = new FireStorage()

const random = new Random()

// eslint-disable-next-line no-unused-vars
const tinymceJs = tinymce

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  plugins: {
    type: [String, Array],
    default: 'quickbars emoticons table image'
  },
  toolbar: {
    type: [String, Array],
    default:
      ' bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify|bullist numlist |outdent indent blockquote | undo redo | axupimgs | removeformat | table | emoticons | image'
  },
  height: {
    type: Number,
    default: 500
  },
  width: {
    type: String,
    default: '100%'
  }
})

const emit = defineEmits(['update:modelValue'])

const file_picker = (callback: any) => {
  // 選擇回調，點圖片網址旁的按鈕會callback的函式
  // 這邊預計點擊後跳出一個dialog，給他選他上傳過的圖片
  console.log('選擇照片...')
  callback('https://picsum.photos/300/200?random=1')
}

const image_upload = (blobInfo: any) =>
  new Promise((resolve, reject) => {
    const file = new File([blobInfo.blob()], random.generateRandomString(6), {
      type: blobInfo.blob().type,
      lastModified: blobInfo.blob().lastModified
    })
    fireStorage
      .uploadStorage(file)
      .then((res) => {
        if (res) {
          resolve(res)
        }
      })
      .catch((e) => {
        reject(e)
      })
  })

const init = reactive({
  selector: 'textarea',
  language: 'zh_TW',
  height: props.height,
  width: props.width,
  menubar: 'edit insert format table tools',
  content_css: false,
  skin: false,
  promotion: false,
  plugins: props.plugins,
  toolbar: props.toolbar,
  quickbars_insert_toolbar: false,
  branding: false,
  image_description: false,
  file_picker_callback: file_picker,
  images_upload_handler: image_upload
})

const { modelValue } = toRefs(props)
const editorValue = ref(modelValue.value)

watch(modelValue, (newValue) => {
  editorValue.value = newValue
})

watch(editorValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <editor v-model="editorValue" :init="init"></editor>
</template>
