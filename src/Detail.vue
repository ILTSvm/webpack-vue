<template>
	<div id="detail">
		<back>详情页-{{name}}</back>
		<div class="container">

			<div>
				<swiper :swiper="swiper"></swiper>
				<div class="name">{{name}}</div>
				<span class="price">{{'￥'+price}}</span>
				<div class="countbox">
					<div class="count">
						<span class="decrease" @click="onDecrease">-</span>
						<input class="input" v-model.number="count>50?count=50:count">
						<span class="increase" @click="onIncrease">+</span>
					</div>
				</div>

				<div class="detail">
					<div class="head">
						<span class="title">商品详情介绍</span>
					</div>
					<div class="comment">{{comment}}</div>
				</div>
			</div>
		</div>
		<div class="gobuy">
			<router-link :to="{path:'/car'}">
				<div class="car"><img src="./assets/car.png">
					<span class="carcount" v-show="carcount">{{carcount}}</span>
				</div>
			</router-link>

			<span class="add" @click="addCar">加入购物车</span>
		</div>

	</div>
</template>

<script>

import back from './components/common/back'
import swiper from './components/common/swiper'
import IScroll from 'iscroll'
import cookie from './scripts/common/cookieUtil.js'
var sum = 0
var id = ''
export default {
  name: 'detail',
 
  data(){
    return {
      carcount: 0,
      swiper:{
        piclists: [], 
        options: {
          autoplay: 3600,
          pagination: true,
        }
      },
      name: '加载中...',
      price: '加载中...',
      comment: '加载中...',
      src: '',
      count: 0
    }
  },

  methods: {
    addCar(){
      this.carcount = sum+this.count
      if(this.count != 0){
        console.dir(id)
        cookie.setGood({
          _id: id,
          name: this.name,
          count: this.count,
          price: this.price,
          src: this.src
      })
      }else{
        cookie.removeGood(id)
      }
    },
    onDecrease(){
      if(this.count>0){
        this.count --;
      }
    },
    onIncrease(){
      this.count ++;
    }
  },
  computed: {

   
  },
  components: {
    swiper,
    back
  },
  mounted(){
    var goods = cookie.getGood()
    var len = goods.length
    sum = 0
    for(var i = 0; i < len; i++){
      
      if(goods[i]._id == id){
        this.count = goods[i].count
      }else{
        sum += goods[i].count
      }
    }
    this.carcount = sum + this.count



  },

  beforeCreate(){
    id = this.$route.params.id;
    this.$http.get('https://wlwywlqk.cn/goods/getdata?_id='+id)
    .then((resolve)=>{
      var data = JSON.parse(resolve.data)
      for(var i = 0; i < data[0].piclists.length;i++){
        this.swiper.piclists.splice(i,1,'https://wlwywlqk.cn/img/'+data[0].piclists[i]) 
      }
      this.src='https://wlwywlqk.cn/img/'+data[0].piclists[0]
      this.name = data[0].name
      this.price = data[0].price
      this.comment = data[0].comment

    this.$nextTick(()=>{
     new IScroll('.container',{click: true,mouseWheel: true })
    })
    },(reject)=>{
      console.dir(reject)
    })
  }
}
</script>

<style lang="scss" scoped>
	@charset "utf-8";
	@import "./styles/usage/core/reset.scss";
	.name {
		font-weight: bold;
		font-family: "微软雅黑", Helvetica, STHeiTi, sans-serif;
		font-size: .16rem;
		text-align: center;
		padding: .12rem 0;
	}
	
	.price {
		@include border(1px, #a52e8d, solid, .05rem);
		padding: .06rem .08rem;
		background: #a52e8d;
		margin: 0px .16rem;
		color: #fff;
		font-weight: 900;
	}
	
	.countbox {
		margin: .16rem 0 0;
		background: #eee;
		padding: .1rem .16rem;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		.count {
			display: inline-block;
			border: 1px solid #666;
			border-radius: 5px;
			background: #fafafa;
			span {
				font-size: 16px;
				font-weight: 900;
				color: #aaa;
				display: inline-block;
				padding: 0 .1rem;
				line-height: .26rem;
			}
			.input {
				background: #fafafa;
				text-align: center;
				border: 0;
				width: .6rem;
				line-height: .26rem;
				border-left: 1px solid #666;
				border-right: 1px solid #666;
			}
		}
	}
	
	.detail {
		.head {
			@include flexbox();
			@include justify-content(space-between);
			padding: .1rem .16rem;
			font-size: .14rem;
			font-family: "微软雅黑";
			border-bottom: 1px solid #ddd;
		}
		.comment {
			padding: .16rem;
			font-size: .12rem;
			font-family: "微软雅黑";
		}
	}
	
	a {
		color: #fff;
	}
	
	.gobuy {
		background: #fefefe;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		width: 100%;
		color: #fff;
		font-family: "微软雅黑";
		font-size: .14rem;
		@include flexbox();
		@include justify-content(space-around);
		height: .38rem;
		.car {
			position: relative;
			img {
				width: .38rem;
				height: .38rem;
			}
			.carcount {
				top: -.01rem;
				left: 50%;
				background: red;
				display: inline-block;
				box-shadow: 3px 3px 5px #555;
				height: auto;
				padding: 0 .02rem;
				border-radius: 50%;
				font-size: 10px;
				position: absolute;
			}
		}
		.add {}
		span {
			display: inline-block;
			background: #FF4040;
			line-height: .20rem;
			padding: .04rem;
			margin: .04rem;
			border-radius: .06rem;
		}
		.buy {
			background: #FF4040;
		}
	}
	
	#detail {
		@include flexbox();
		@include flex-direction(column);
		height: 100%;
	}
	
	.container {
		flex: 1;
		height: 100%;
		overflow: hidden;
	}
</style>