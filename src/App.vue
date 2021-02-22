<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import login from './components/login.vue'
//import test from './components/test.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //test,
    login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
</style>
