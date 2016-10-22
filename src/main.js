import Vue from 'vue'
import App from './App'
// import Detail from './Detail'

import router from 'vue-router'
import resource from 'vue-resource'
//������ʽ
require('./styles/usage/page/index.scss')

Vue.use(resource)
Vue.use(router)
new Vue({
  el: '#app',
  // template: '<Detail/>',
  // components: { Detail }, 
  template: '<App/>',
  components: { App },

  mounted(){
    console.dir(1)
  }
})
