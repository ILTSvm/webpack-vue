<template>
	<div id="detail">
		<div>
			<swiper :swiper="swiper"></swiper>
			<div class="name">{{name}}</div>
			<div class="price">{{'￥'+price}}</div>
			<div class="countbox">
				<div class="count">
					<span class="decrease" @click="onDecrease">-</span>
					<input class="input" v-model.number="count">
					<span class="increase" @click="onIncrease">+</span>
				</div>
			</div>
			<div class="detail">
				<div class="head">
					<span class="title">商品详情介绍</span>
					<span class="more">&gt;</span>
				</div>
				<div class="comment">{{comment}}</div>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from './components/common/swiper'
import IScroll from 'iscroll'

export default {
  name: 'detail',
  data(){
    return {
      swiper:{
        piclists: [],
        options: {
          autoplay: 3600,
          pagination: true,
        }
      },
      count: 0,
      name: '加载中...',
      price: '加载中...',
      comment: '加载中...',
    }
  },
  methods: {
    onDecrease(){
      if(this.count>0){
        this.count --;
      }
    },
    onIncrease(){
      this.count ++;
    }
  },

  components: {
    Swiper,
  },

  
  beforeCreate(){
    var id = this.$route.params.id;
    console.dir(this)
    this.$http.get('https://wlwywlqk.cn/goods/getdata?_id='+id)
    .then((resolve)=>{
      var data = JSON.parse(resolve.data)
      for(var i = 0; i < data[0].piclists.length;i++){
        this.swiper.piclists.splice(i,1,'https://wlwywlqk.cn/img/'+data[0].piclists[i]) 
      }

      this.name = data[0].name
      this.price = data[0].price
      this.comment = data[0].comment
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
		display: inline-block;
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
    height: 10000px;
		.head {
			@include flexbox();
			@include justify-content(space-between);
			padding: .1rem .16rem;
			font-size: .14rem;
			font-family: "微软雅黑";
			border-bottom: 1px solid #666;
		}
    .comment{
      padding: .16rem;
    }
	}
  #detail>div{
    
  }
</style>