<template>
  <div>
    <h1>Hooks</h1>
    <p>{{ name }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'

export default {
  data(){
    return {
      name: 'Bazsi'
    }
  },
  setup(){
    onMounted(() => {
      console.log('component mounted')
    }),
    onUnmounted(() => {
      console.log('component unMounted')
    }),
    onUpdated(() => {
      console.log('component updated')
    })
  },
  methods: {
    handleClick(){
      this.name = 'Ivi'
    }
  },
}
</script>

<style>

</style>