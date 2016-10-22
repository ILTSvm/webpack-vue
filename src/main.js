import Vue from 'vue'
import App from './App'
import Detail from './Detail'

import router from 'vue-router'
import resource from 'vue-resource'
//公共样式
require('./styles/usage/page/index.scss')

Vue.use(resource)
Vue.use(router)
new Vue({
  el: '#app',
  template: '<Detail/>',
  components: { Detail },
  mounted(){
    console.dir(1)
  }
})
