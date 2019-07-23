<template>
  <div>
    <router-view />
    <ul>
      <li>
        <router-link to="./List">新闻列表</router-link>
      </li>
      <li>
        <router-link to="./User">个人中心</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "xxxxxx"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
