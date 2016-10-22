import Vue from 'vue'
import VueRouter from 'vue-router'
import IScroll from 'iscroll'
import Swiper from 'swiper'
/* eslint-disable no-new */
Vue.use(VueRouter);
//主页
import tab from './app.vue'
import index from './index.vue'
import list from './list.vue'
import test from './components/hello2.vue'

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


//const home = { template: '<div>this is home page</div>' } 
//const news = { template: '<div>this is news page</div>' } 
//const about = { template: '<div>this is about page</div>' }
//const routes = [
//{ path: '/', component: home},
//{ path: '/news', component: news},
//{ path: '/about', component: about},
//]
//const router = new VueRouter({
//routes // （缩写）相当于 routes: routes
//})
//const app = new Vue({
//router
//}).$mount('#app')