<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { FloatText } from '@/components'
import { SyslogFirebase } from '@/api'
import type { Syslog } from '@/interface'
import { SyslogClass } from '@/interface'
import { useRoute } from 'vue-router'
import { ConvertDate } from '@/utils'

const route = useRoute()

const convertDate = new ConvertDate()
// props
const props = defineProps({
  mode: {
    type: String,
    default: ''
  }
})

// firebase
const syslogFirebase = new SyslogFirebase()

//data
const id = ref('')

const syslog = ref<Syslog>({ ...new SyslogClass('', '', '', 0, '', '', '', 'enable', '') })

//methods

// onMounted
onMounted(() => {
  if (props.mode === 'read') {
    id.value = route.params.id as string
    syslogFirebase.get(id.value).then((res) => {
      console.log(res)
      syslog.value = res
    })
  }
})
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
      <VForm ref="signupForm">
        <div class="card p-fluid">
          <div class="flex">
            <div class="flex align-items-center">
              <h5>操作紀錄</h5>
            </div>
          </div>

          <div class="grid p-fluid mt-3">
            <div class="col-12 md:col-6">
              <float-text label="集合" :content="syslog.collection" />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="文件" :content="syslog.document" />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="操作" :content="syslog.methods" />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="操作者帳號" :content="syslog.useremail" />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="操作者UID" :content="syslog.useruid" copy-button />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="操作者IP" :content="syslog.userip" />
            </div>
            <div class="col-12 md:col-6">
              <float-text label="操作時間" :content="convertDate.convertDate(syslog.timestamp)" />
            </div>
          </div>
          <!-- <Button label="送出" type="submit"></Button> -->
        </div>
      </VForm>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
