<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MemberFirebase } from '@/api'
import {
  InputTextFloat,
  StateDropdownFloat,
  FloatText,
  FloatBoolean,
  FloatImg,
  DebounceButton
} from '@/components'
import { type Member, type MemberPublic, MemberObject } from '@/interface'
import { useRoute, useRouter } from 'vue-router'
import { success, error, ConvertDate } from '@/utils'

const route = useRoute()
const router = useRouter()

const convertDate = new ConvertDate()
// props
const props = defineProps({
  mode: {
    type: String,
    default: ''
  }
})

// firebase
const memberFirebase = new MemberFirebase()

//data
const id = ref('')

const member = ref<Member>({ ...MemberObject })
const memberPublic = ref<MemberPublic>({
  photoURL: '',
  bannerURL: '',
  displayName: '...',
  about: ''
})

//methods
const submit = async (params: Member) => {
  memberFirebase
    .update(`${id.value}`, { state: params.state })
    .then(() => {
      memberFirebase
        .update(`${id.value}/public/${id.value}`, { state: params.state })
        .then((res) => {
          success(res)
          router.push('/front/member/list')
        })
        .catch((e) => {
          error(e)
        })
    })
    .catch((e) => {
      error(e)
    })
}

const getMember = async () => {
  ;[member.value, memberPublic.value] = await Promise.all([
    memberFirebase.get(id.value),
    memberFirebase.getPublic(id.value)
  ])
}

// onMounted
onMounted(async () => {
  if (props.mode === 'edit') {
    id.value = route.params.id as string
    await getMember()
  }
})
</script>

<template>
  <div class="grid">
    <div class="col-12 px-2">
      <VForm ref="signupForm" @submit="submit(member)">
        <div class="card p-fluid">
          <div class="flex">
            <div class="flex align-items-center">
              <h5 v-if="mode === 'add'">新增會員</h5>
              <h5 v-else-if="mode === 'edit'" class="m-0">編輯會員</h5>
            </div>
            <div v-if="mode === 'edit'" class="flex-1">
              <div class="flex justify-content-end align-items-center">
                <span class="mr-1">{{ member.emailVerified ? '已驗證信箱' : '未驗證信箱' }}</span>

                <i
                  id="emailVerified"
                  class="pi"
                  :class="{
                    'pi-check-circle text-green-500': member.emailVerified,
                    'pi-times-circle text-red-400': !member.emailVerified
                  }"
                ></i>
              </div>
              <div class="flex justify-content-end">
                <span>上次登入時間 {{ convertDate.convertDate(member.operateAt) }}</span>
              </div>
            </div>
          </div>

          <div class="grid p-fluid mt-3">
            <div class="col-12 md:col-6">
              <input-text-float
                v-if="mode === 'add'"
                label="信箱"
                v-model="member.email"
                name="email"
                rules="required|email"
              />
              <float-text v-if="mode === 'edit'" label="信箱" :content="member.email" copy-button />
            </div>
            <div class="col-12 md:col-6">
              <float-text v-if="mode === 'edit'" label="UID" :content="member.uid" copy-button />
            </div>
            <div class="col-12 md:col-6">
              <input-text-float
                v-if="mode === 'add'"
                label="名稱"
                v-model="memberPublic.displayName"
                name="displayName"
                rules="required"
              />
              <float-text
                v-if="mode === 'edit'"
                label="名稱"
                :content="memberPublic.displayName"
                copy-button
              />
            </div>
            <div class="col-12 md:col-6">
              <state-dropdown-float v-model="member.state" name="state" rules="required" />
            </div>
            <div class="col-6 md:col-3">
              <float-boolean
                v-if="mode === 'edit'"
                label="動畫是否公開"
                :content="memberPublic.animes"
              />
            </div>
            <div class="col-6 md:col-3">
              <float-boolean
                v-if="mode === 'edit'"
                label="追蹤是否公開"
                :content="memberPublic.follow"
              />
            </div>
            <div class="col-12">
              <float-img
                v-if="mode === 'edit'"
                label="大頭照"
                :src="memberPublic.photoURL"
                width="200"
                height="200"
              />
            </div>
            <div class="col-12">
              <float-img
                v-if="mode === 'edit'"
                label="橫幅"
                :src="memberPublic.bannerURL"
                width="100%"
                height="200"
              />
            </div>
          </div>
          <debounce-button label="送出" type="submit" />
        </div>
      </VForm>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
