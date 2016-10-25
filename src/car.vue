<template>
	<div class = "car-box">
		<div class = "hasNo-good" v-if = "hasGood==false">没有物品</div>
		<div class = "has-good" v-if = "hasGood==true">
			<div class = "car-row">
				<div class = "car-img"><span>商品</span></div>
				<div class = "car-name"><span>名称</span></div>
				<div class = "car-price"><span>价格</span></div>
				<div class = "car-count"><span>数量</span></div>
				<div class = "car-total"><span>总价</span></div>
			</div>
			<div class = "car-row" v-for = "good in goodinfo" v-if = "good.count">
				<div class = "car-img"><img :src="good.src"/></div>
				<div class = "car-name"><span>{{good.name}}</span></div>
				<div class = "car-price"><span>{{good.price}}</span></div>
				<div class = "car-count">
					<span class="decrease" @click="subCount(good)">-</span>
					<span>{{good.count}}</span>
					<span class="increase" @click="addCount(good)">+</span>
				</div>
				<div class = "car-total"><span>{{(good.count*good.price).toFixed(2)}}</span></div>
				<div class = "car-delete"><span @click = "deleteGood(good)">移除</span></div>
			</div>
			<div class = "pay"><span><input type = "checkbox" />全选</span><span>总价：</span><p>提交订单</p><div>
		</div>
	</div>
</template>
<script>
	import _cookie from './scripts/common/cookieUtil.js'
	export default {
		data(){
			return{
				goodinfo:[],
				goodCount:0,
				hasGood:false 
			}
		},
		mounted(){
			this.goodinfo= _cookie.getGood();
			if(this.goodinfo.length>0){
				this.hasGood=true;
				this.goodCount=this.goodinfo.length;
			}
		},
		methods:{
			subCount(good){
		      if(good.count>0){
		        good.count --;
		        _cookie.setGood(good);
		        if(good.count==1){
		            _cookie.removeGood(good._id);
		        	this.goodCount--;
		        	if(this.goodCount==0){
                        this.hasGood=false;
                    }
		        }
		      }
		    },
		    addCount(good){
		      if(good.count<50){
		      	good.count ++;
		      	_cookie.setGood(good);
		      }
		    },
		    deleteGood(good){
				good.count = 0;
		    	_cookie.removeGood(good._id);
				this.goodCount--;
				if(this.goodCount==0){
					this.hasGood=false;
				}
		    }
		}
	}
</script>
<style lang = "scss" scoped>
    @charset "utf-8";
    @import "./styles/usage/core/reset.scss";
    .car-box{	
    	@include flexbox();
    	@include flex-direction(column);
    	.has-good{
    	    @include flexbox();
    	    @include flex();
    	    width:100%;
    	    @include flex-direction(column);
    	}
    }
</style>