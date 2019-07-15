<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{msg1}}</h1>
    <ul></ul>
    {{(count+1)*10}}
    <div v-html="template"></div>
    <!-- v-bind:---: -->
    <!-- <a v-bind:href="url">百度</a> -->
    <a :href="url">百度</a>
    <!--   v-on:--@    -->
    <div><button type="button" @click="add()">加</button></div>
    <div><button type="button" @click="minus()">减</button></div>
    <div v-if="count>0">执行第一句</div>
    <div v-else-if="count<=0">执行第二句</div>
    <div v-show="count==11">执行第三句</div> 
    <!-- <div v-for="item in list" v-bind:style="msgStyle">{{item.name}}的年龄是{{item.age}}</div> -->
  </div>
</template>

<script>
import { METHODS } from 'http';
import store from '@/store'
export default {
  name: "HelloWorld",
  store,
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      msg1:store.state.count,
      count: 10,
      template: "<div>hello template</div>",
      url:'https://www.baidu.com/',
      list:[
        {
          name:'John',
          age:27
        },{
          name:'小明',
          age:18
        }
      ],
      msgStyle:{
        color:'red',
        'font-size':'20px',
        'text-shadow':'0 0 5px green'
      }
    };
  },    
  methods:{
      add:function(){
        this.count++;
      },
      minus:function(){
        this.count--;
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
