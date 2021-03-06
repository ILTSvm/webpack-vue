import Vue from 'vue'
import resource from 'vue-resource'
import VueRouter from 'vue-router'
import IScroll from 'iscroll'
import Swiper from 'swiper'
//公共样式

require('./styles/usage/page/index.scss')

Vue.use(resource)

Vue.use(VueRouter)

// 自定义指令

import zeptoJs from "n-zepto";

import commonUtil from "./scripts/common/commonUtil";
// commonUtil.myScroll();

/* eslint-disable no-new */
//组件

import tab from './App.vue'
import index from './index.vue'
import list from './list.vue'
import test from './components/hello2.vue'
import Detail from './Detail.vue'
import car from './car.vue'
import mine from './mine.vue'
import signin from './signin.vue'
import signup from './signup.vue'
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
			}
			//数组结束
		]
	},
	{
		path: '/list/Detail/:id',
		name: 'Detail',
		component: Detail
	},
	{
		path: '/signup',
		name: 'signup',
		component: signup
	}, {
		path: '/signin',
		name: 'signin',
		component: signin
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

