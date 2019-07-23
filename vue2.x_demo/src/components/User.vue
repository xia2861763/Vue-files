<template>
  <div @click="test">user</div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      msg: 'xxxxxx'
    }
  },
  methods:{
    test(){
      alert(2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
