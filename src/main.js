import Vue from 'vue'
import resource from 'vue-resource'
import VueRouter from 'vue-router'
import IScroll from 'iscroll'
import Swiper from 'swiper'
//公共样式

require('./styles/usage/page/index.scss')

Vue.use(resource)

Vue.use(VueRouter)

/* eslint-disable no-new */
//组件
import tab from './App.vue'
import index from './index.vue'
import list from './list.vue'
import test from './components/hello2.vue'
import Detail from './Detail.vue'
import car from './car.vue'
import mine from './mine.vue'
const routes = [
	{   path: '/',
	    component:tab,
		children:[
			{
				path:'/',
				component:index 
			},{	
				path:'/index',
				component:index
			},{
				path:'/list',
				component:list,
				children:[
					{
						path:'/Detail/:id',
						name:'Detail',
						component:Detail
					}
				]
			},{
				path:'/car',
				component:car
			},{
				path:'/mine',
				component:mine
			}
			//数组结束
		]
	},{
		path:'/Detail/:id',
		name:'Detail',
		component:Detail
	}
]
const router = new VueRouter({
	routes
});

const app = new Vue({
	router,
	updated(){
		console.dir(123124)
	}
}).$mount('#app')

