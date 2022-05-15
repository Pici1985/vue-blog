<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'

export default {
  name: 'HomeView',
  //the values inside setup() are not reactive by default
  setup(){
    console.log('setup')

    const p = ref(null)

    let name = 'Mario'
    let age = 30

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'Hello gyokerek'
    }

    return { 
      name, 
      age,
      handleClick,
      p 
    }
  },
  //the values inside data() are reactive by default
  data(){
    return {
      age: 40
    }
  }
}
</script>
