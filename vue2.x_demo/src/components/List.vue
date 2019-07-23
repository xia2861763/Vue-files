<template>
 <div>
   <ul>
     <li v-for="(item,index) in pageList" :key="index">
       {{item.title}}---{{item.content}}
     </li>
   </ul>
 </div>
</template>

<script>
import store from '@/store'
export default {
  store,
  name: 'List',
 computed:{     //动态监听state中List列表的变化
  pageList(){
    return store.state.lists;
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
