<template>
  <div>
    <form v-if="!isReg">
      用户名：
      <input type="text" v-model="name">
      <div>
        密码：
        <input type="text" v-model="password">
      </div>
      <div>
        <button type="button" @click="login()">登录</button>
        <button type="button" @click="reg()">注册</button>
      </div>
    </form>
    <form v-else>
      用户名：
      <input type="text" v-model="name">
      <div>
        密码：
        <input type="text" v-model="password">
      </div>

      <div>
        再次输入密码：
        <input type="text" v-model="repeat">
      </div>

      <button type="button" @click="addUser()">确定</button>
      <button type="button" @click="cancel()">取消</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isReg: false,
      name: "",
      password: "",
      repeat: ""
    };
  },
  methods: {
    login() {
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.password
      ) {
        this.name = "";
        this.password = "";
        this.$router.push("/home/List"); //路由跳转
      } else {
        alert("用户名或密码错误！！");
      }
    },
    reg() {
      this.isReg = true;
    },
    addUser() {
      if (this.password === this.repeat) {
        window.localStorage.setItem("name", this.name);
        window.localStorage.setItem("password", this.password);
        this.name = "";
        this.password = "";
        this.isReg = false;
      } else {
        alert("两次密码输入不一致");
      }
    },
    cancel() {
      this.isReg = false;
    }
  }
};
</script>

<style>
</style>
