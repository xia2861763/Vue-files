<template>
  <div id="app">
    <!-- <router-link to='/Login'>Login</router-link>
    <router-link to='/Add'>Add</router-link>
    <router-link to='/Info'>Info</router-link>
    <router-link to='/List'>List</router-link>
    <router-link to='/User'>User</router-link> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
