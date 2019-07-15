<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div id="nav">
      <router-link to="/info">info</router-link>
      <router-link to="/demo1">demo1</router-link>
    </div>
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
