<template>
  <div class="home">
    home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  //the values inside setup() are not reactive by default
  setup(){
    console.log('setup')

    let name = 'Mario'
    let age = 30

    const handleClick = () => {
      console.log('click')
    }

    return { 
      name, 
      age,
      handleClick 
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
