<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

//define
const props = defineProps({
  channel: {
    type: String,
    default: ''
  }
})

//data
const value = ref('ok')

const ws = new WebSocket(`ws://localhost:8080/${props.channel}`)

// Connection opened
ws.addEventListener('open', (event) => {
  // console.log(event)
  // socket.send('Hello Server!')
})

// Listen for messages
ws.addEventListener('message', (event) => {
  console.log('Message from server ', event.data)
})

//methods
const submit = () => {
  ws.send(value.value)
}

//onUnmounted
onUnmounted(() => {
  ws.close()
})
</script>

<template>
  <p>當前房間:{{ channel }}</p>
  <p>發送消息</p>
  <InputText v-model="value" />
  <Button label="送出" type="submit" @click="submit"></Button>
</template>

<style lang="scss" scoped></style>
