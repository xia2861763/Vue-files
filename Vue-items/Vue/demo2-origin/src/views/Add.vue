<template>
  <div>
    <p>标题</p>
    <input type="text" v-model="title">
    <p>内容</p>
    <input type="text" v-model="content">
    <div style="color:red" @click="add()">添加</div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "Add",
  store,
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    add() {
      if (this.title != "" || this.content != "") {
        store.commit("addItem", {
          title: this.title,
          content: this.content
        });
        console.log("标题：" + this.title);
        console.log("内容：" + this.content);
      } else {
        alert("内容不能为空");
        return;
      }
      this.title = "";
      this.content = "";
      this.$router.push("/home/list");
    }
  }
};
</script>

<style>
</style>
