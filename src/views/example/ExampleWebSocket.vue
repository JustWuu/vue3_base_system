<script setup lang="ts">
import { ref } from 'vue'
import ExampleWebSocketPage from './components/ExampleWebSocketPage.vue'

//data
const channel = ref('')
const goChannel = ref('')

//methods
const setChannel = () => {
  channel.value = goChannel.value
}
</script>

<template>
  <p>進入房間</p>
  <InputText v-model="goChannel" />
  <Button label="送出" type="submit" @click="setChannel"></Button>
  <hr />
  <ExampleWebSocketPage :key="channel" v-if="channel" :channel="channel" />
</template>

<style lang="scss" scoped></style>
