import Vue from 'vue'
import resource from 'vue-resource'
import VueRouter from 'vue-router'
import IScroll from 'iscroll'
import Swiper from 'swiper'
//公共样式

require('./styles/usage/page/index.scss')

Vue.use(resource)



/* eslint-disable no-new */
Vue.use(VueRouter);
//组件
import tab from './App.vue'
import index from './index.vue'
import list from './list.vue'
import test from './components/hello2.vue'
import Detail from './Detail'

const routes = [
{ path: '/', component:tab,
	children:[
		{	
			path:'/index',
			component:index
		},{
			path:'/list',
			component:list
		}
	]
}
]
const router = new VueRouter({
	routes
});

const app = new Vue({
	router
}).$mount('#app')

