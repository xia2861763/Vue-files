<template>
  <div>
    <p>标题</p>
    <input type="text" v-model="title" />
    <p>内容</p>
    <input type="text" v-model="content"/>
    <div style="margin-top:10px">
      <div type="button" @click="newAdd">添加</div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  store,
  name: "Add",
  data() {
    return {
      title: "",
      content: ""
    }
  },
  methods:{
    newAdd(){
      // alert("1");
      store.commit("addItem",{
        title:this.title,
        content:this.content
      })
      this.title='';
      this.content=''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
