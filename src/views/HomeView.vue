<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Increment</button>
    <input type="text" v-model="name">
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

    const name = ref('Mario')
    const age = ref(30)

    // these function works as intended
    // const handleClick = () => {
    //   console.log(p, p.value)
    //   p.value.classList.add('test')
    //   p.value.textContent = 'Hello gyokerek'
    // }

    const handleClick = () => {
      name.value = 'Luigi'  
      age.value = 25  
    }

    return { 
      name, 
      age,
      handleClick,
      p 
    }
  },
  //the values inside data() are reactive by default
  // data(){
  //   return {
  //     age: 40
  //   }
  // }
}
</script>
