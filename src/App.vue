<template>
  <div>
    <router-link to="/"> Home </router-link> | 
    <router-link to="/about"> About </router-link> | 
    <router-link to="/hooks"> Hooks </router-link> |
    <router-link to="/fetch"> Fetch </router-link> |
    <router-link to="/composable"> Composable </router-link> 
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
