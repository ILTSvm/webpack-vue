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
import cookit from './scripts/common/cookieUtil'
console.dir(cookit)
import tab from './App.vue'
import index from './index.vue'
import list from './list.vue'
import test from './components/hello2.vue'
import Detail from './Detail.vue'
import car from './car.vue'
import mine from './mine.vue'
const routes = [
	{
		path: '/',
		component: tab,
		children: [
			{
				path: '/',
				component: index
			}, {
				path: '/index',
				component: index
			}, {
				path: '/list',
				component: list,

			}, {
				path: '/car',
				component: car
			}, {
				path: '/mine',
				component: mine
			}, {
				path: '/list/Detail/:id',
				name: 'Detail',
				component: Detail
			}
			//数组结束
		]
	}
]
const router = new VueRouter({
	routes
});

const app = new Vue({
	router,
	updated() {
	}
}).$mount('#app')

