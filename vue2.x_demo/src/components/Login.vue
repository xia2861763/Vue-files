<template>
  <div>
    <button type="button" @click="login">登录</button>
    <button type="button" @click="reg">注册</button>
  </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  name: "Login",
  methods:{
    login:function(){
      this.$router.push('./Home/List');
    },
    reg:function(){
      this.$router.push('./Home/User');
    }
  },
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
