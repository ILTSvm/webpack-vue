<template>
	<div id="signin">
		<back>会员登录</back>
		<div class="container">
			<div class="box">
				<input v-model="phone" placeholder="手机号">
				<input v-model="password" type="password" placeholder="设置登录密码">
				<button class="register" @click="onSignIn">登录</button>
				<router-link class="login" :to="{path:'/signup'}">去注册>></router-link>
				<span class="tip">{{tip}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import IScroll from 'iscroll'
import back from './components/common/back'
import cookie from './scripts/common/cookieUtil.js'

var timer
export default {
    name: 'singin',
    data(){
        return {
            phone: '',
            rnum: '',
            password: '',
            rpassword: '',
            show: false,
            num: '',
            tip: ''
        }
    },
    components:{
        back
    },
    mounted(){
        this.$nextTick(()=>{
            new IScroll('.container',{click: true,mouseWheel: true })
        })
    },
    methods: {
       onSignIn(){
           if(!/^[\d]{11}$/.test(this.phone)){
               this.tip = "手机号码格式不正确!"
               clearTimeout(timer)
               timer = setTimeout(()=>{this.tip=''},3000)
               return 
           }
           if(!/^[\w]{4,10}$/.test(this.password)){
               this.tip = "密码格式不正确!"
               clearTimeout(timer)
               timer = setTimeout(()=>{this.tip=''},3000)
               return
           }
           this.$http({
               method:'POST',
               url: 'https://wlwywlqk.cn/users/login',
               body:{
                   email: this.phone,
                   password: this.password
               }
           }).then((resolve)=>{
               
                   console.dir(resolve)
               if(resolve.body == 1){
                   cookie.setCookie('username',{name: this.phone})
                   console.dir(cookie.getCookie('username'))
                   window.location.href = '/#/mine'
               }else{
                   this.tip = resolve.body
                   clearTimeout(timer)
                   timer = setTimeout(()=>{this.tip=''},3000)
                   return
               }
           },(reject)=>{
               console.dir(reject)
           });
       }
    }
}
</script>

<style lang="scss" scoped>
	@import "./styles/usage/core/reset.scss";
	#signin {
		height: 100%;
		.container {
            height: 100%;
			.box {
				padding: .16rem;
				margin-top: .6rem;
				@include flexbox();
				@include flex-direction(column);
				@include align-items(center);
				padding-bottom: 1rem;
			}
		}
		input {
			width: 100%;
			line-height: .32rem;
			border: 1px solid #ddd;
			border-radius: 5px;
			padding: 0 .12rem;
			margin: .1rem 0;
		}
		button {
			padding: .08rem 0;
			border-radius: 5px;
			width: 80%;
			background: #96b;
			color: #fff;
			font-weight: bold;
			font-family: "微软雅黑";
			font-size: .16rem;
		}
		.getnum {
			background: #fff;
			color: #aaa;
			border: 1px solid orange;
		}
		.tip {
			color: #f00;
			line-height: .44rem;
			font-family: "微软雅黑";
		}
	}
</style>