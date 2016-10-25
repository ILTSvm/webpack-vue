<template>
  <div id="signup">
      <input v-model="phone" placeholder="请输入手机号">
      <button class="getnum" @click="getNum">获取短信验证码</button>
      <input v-model="rnum" placeholder="请输入收到的验证码">
      <input v-model="password" type="password" placeholder="设置登录密码">   
      <input v-model="rpassword" type="password" placeholder="确认登录密码">  
      <button class="register" @click="onReg">提交注册</button>     
      <span class="tip">{{tip}}</span>     
      <router-link class="login" :to="{path:'/signin'}">去登录>></router-link>
  </div>
</template>

<script>
var timer
export default {
    name: 'singup',
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
    methods: {
       onReg(){
           if(!/^[\d]{11}$/.test(this.phone)){
               this.tip = "手机号码格式不正确!"
               clearTimeout(timer)
               timer = setTimeout(()=>{this.tip=''},3000)
               return 
           }
           if(this.rnum != this.num){
               this.tip = "验证码不正确!"
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
           if(this.rpassword != this.password){
               this.tip = "重复密码不正确!"
               clearTimeout(timer)
               timer = setTimeout(()=>{this.tip=''},3000)
               return
           }
           this.$http({
               method:'POST',
               url: 'https://wlwywlqk.cn/users/register',
               body:{
                   email: this.phone,
                   password: this.password
               }
           }).then((resolve)=>{
               
                   console.dir(resolve)
               if(resolve.body == 1){
                   window.location.href = '/#/signin'
               }else{
                   this.tip = resolve.body
                   clearTimeout(timer)
                   timer = setTimeout(()=>{this.tip=''},3000)
                   return
               }
           },(reject)=>{
               console.dir(reject)
           });
       },
       getNum(){
           if(this.phone.length == 11){
               this.num = ('1'+(Math.floor(Math.random()*10000)+10000)).slice(2)
                alert(`【闪耀会】,本次验证码为   ${this.num}   !`)
           }else{
               this.tip = "手机号码不正确!"
               clearTimeout(timer)
               timer = setTimeout(()=>{this.tip=''},3000)
           }
           
       }
    }
}
</script>

<style lang="scss" scoped>
	@import "./styles/usage/core/reset.scss";
    #signup{
        @include flexbox();
        @include flex-direction(column);
        @include align-items(center);
        padding: .16rem;
        margin: .6rem 0;
        input{
            width: 100%;
            line-height: .32rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 0 .12rem;
            margin: .1rem 0;
        }

        button{
            padding: .08rem 0;
            border-radius: 5px;
            width: 80%;
            background: #96b;
            color: #fff;
            font-weight: bold;
            font-family: "微软雅黑";
            font-size: .16rem;
        }
        .getnum{
            background: #fff;
            color: #aaa;
            border: 1px solid orange;
        }
        .tip{
            color: #f00;
            line-height: .44rem;
            font-family: "微软雅黑";
        }
    }
</style>