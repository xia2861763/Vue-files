// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { HelloWorld },
  template: '<HelloWorld/>',
  methods: {
    cartView: function() {
      this.$axios.get("data/cartData.json").then(function(res){
        console.log(res);
      });
    }
  }
})
