<script setup lang="ts">
// import { userProfileStores } from '@/stores/userProfile'

// firebase
// const store = userProfileStores()

// store.messageOnValue = false
</script>

<template>
  <div
    class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"
  >
    <div class="flex flex-column align-items-center justify-content-center">
      <img src="@/assets/logo.svg" alt="Sakai logo" class="mb-4 w-6rem flex-shrink-0" />
      <div
        style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(
            180deg,
            rgba(247, 149, 48, 0.4) 10%,
            rgba(247, 149, 48, 0) 30%
          );
        "
      >
        <div
          class="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center"
          style="border-radius: 53px"
        >
          <div class="grid flex flex-column align-items-center">
            <div
              class="flex justify-content-center align-items-center bg-orange-500 border-circle"
              style="width: 3.2rem; height: 3.2rem"
            >
              <i class="text-50 pi pi-fw pi-lock text-2xl"></i>
            </div>
            <h1 class="text-900 font-bold text-4xl lg:text-5xl mb-2">權限不足</h1>
            <span class="text-600 mb-5">請進行帳號認證，若該頁面依舊出現請聯絡系統管理員。</span>
            <img
              src="https://sakai.primevue.org/demo/images/access/asset-access.svg"
              alt="Access denied"
              class="mb-5"
              width="80%"
            />
            <div class="col-12 mt-5 text-center">
              <i
                class="pi pi-fw pi-arrow-left text-blue-500 mr-2"
                style="vertical-align: center"
              ></i>
              <router-link to="/" class="text-blue-500">返回首頁</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
