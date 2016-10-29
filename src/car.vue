<template>
	<div class = "car-box">
	    <div class = "car-title"><h1>我的购物车</h1></div>
		<div class = "hasNo-good" v-if = "hasGood==false">
			<p class = "iconfont">&#xe73d;</p>
			<span>购物车是空的 !</span>
			<router-link to = "list">立即去购物</router-link>
		</div>
		<div class = "has-good" v-if = "hasGood==true">

		    <div class = "car-info">
		        <div class = "car-row" v-for = "good in goodinfo" v-if = "good.count">
		        	<div class = "car-choose"><input type = "checkbox" name = "car-choose"/></div>
                    <div class = "car-img"><img :src="good.src"/></div>
                    <div class = "car-detail">
                        <div class = "name-price">
	                        <div class = "car-name"><span>{{good.name}}</span></div>
	                        <div class = "car-price"><span>{{(good.count*good.price).toFixed(2)}}</span></div>
	                    </div>
                    	<div class = "count-delete">
	                        <div class = "car-count">
	                        	<div class = "car-count-box">
	                        		<span class="decrease" @click="subCount(good)">-</span>
	                           	 	<span class = "count">{{good.count}}</span>
	                            	<span class="increase" @click="addCount(good)">+</span>
	                        	</div>
	                        </div>
	                        <div class = "car-delete"><span class = "iconfont" @click = "deleteGood(good)">&#xe74b;</span></div>
	                    </div>
                    </div>

                </div>
			</div>
			<div class = "car-pay">
				<div class = "total-box">
					<span>
						<input type = "checkbox" name = "car-choose" @click = "checkedAll"/>全选
						<span>合计：<b>{{total}}</b></span>
				</div>
				<p>提交订单</p>
			</div>
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
				hasGood:false,
				total:0.00
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
		        if(good.count==0){
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
		    },
		    checkedAll: function() {
			    var _this = this;
			    console.log(_this.checkboxModel);
			    if (this.checked) {//实现反选
			      	_this.checkboxModel = [];
			    }else{//实现全选
				    _this.checkboxModel = [];
				    _this.checkboxData.forEach(function(item) {
				    _this.checkboxModel.push(item.id);
				    });
			    }
			}
		}
	}
</script>
<style lang = "scss" scoped>
    @charset "utf-8";
    @import "./styles/usage/core/reset.scss";
    @import "./styles/lib/iconfont/iconfont.css";
    .car-box{
    	height:100%;	
    	@include flexbox();
    	@include flex-direction(column);
    	.car-title{
    	        height:44px;
    	        line-height:44px;
    	        h1{
    	            height:44px;
    	            line-height:44px;
    	            width:100%;
    	            text-align: center;
    	            font-size:16px;
    	            background: #a42e8e;
    	            color:#fff;
    	        }
         }
    	.hasNo-good{
    		height:100%;
    		width:100%;
    		@include flexbox();
    		@include flex-direction(column);
    		p{
    			height:3rem;
    			line-height:3rem;
    			font-size:2rem;
    			color:#ccc;
    			text-align:center;
    		}
    		span{
    			display:block;
    			width:1.8rem;
    			height:.4rem;
    			line-height:.4rem;
    			text-align: center;
    			font-size:.2rem;
    			color:#C0C0C0;
    			margin: 0 auto;
    		}
    		a{
    			display:block;
    			width:1.8rem;
    			height:.4rem;
    			line-height:.4rem;
    			font-size:.14rem;
    			margin:.6rem auto;
    			color:#fff;
    			background:#a42e8e;
    			text-align:center;
    			border-radius: .1rem;
    		}
    	}
    	.has-good{
    	    @include flexbox();
    	    @include flex();
    	    width:100%;
    	    @include flex-direction(column);
    	    .car-info{
    	        @include flex();
    	        width:100%;
    	        @include flexbox();
    	        @include flex-direction(column);
    	        .car-row{
                    @include flexbox();
                    /*@include flex();*/
                    width:100%;
                    height:.9rem;
           			box-sizing:border-box;
           			border-bottom:.01rem solid #ccc ;
           			padding:15px;
           			.car-choose{
           				height:.6rem;
           				line-height:.6rem;
           				width:.2rem;
           			}
                    .car-img{
                        width:.6rem;
                        margin-right:.2rem;
                        overflow: hidden;
                        img{
                            width:100%;
                        }
                    }
					.car-detail{
						@include flex(1);
						@include flexbox();
						@include flex-direction(column);
						.name-price{
							@inclued flex(1);
							width:100%;
							height:.3rem;
							line-height:.3rem;
							@include flexbox();
							.car-name{
								@include flex(8);
								box-sizing: border-box;
								overflow: hidden;
								padding-right:.2rem;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
							.car-price{
								@include flex(2);
								box-sizing:border-box;
								padding-right:.1rem;
							}
						}
						.count-delete{
							@include flex(1);
							width:100%;
							@include flexbox();
							.car-count{
								@include flex(7);
								.car-count-box{
									width:1.4rem;
									margin:0 auto;
									@include flexbox();
									.decrease,.increase{
										display:block;
										width:.2rem;
										text-align: center;
										border-radius: .01rem;
										border:.01rem solid #ccc;
									}
									.decrease{
										border-right:0;
									}
									.increase{
										border-left:0;
									}
									.count{
										width:1.2rem;
										text-align: center;
										border:.01rem solid #ccc;
									}
								}
							}
							.car-delete{
								@include flex(3);
								box-sizing: border-box;
								text-align: right;
								padding-right:.2rem;
								color:#8B0000;
							}
						}
					}
                    
                }
    	    }
    	    .car-pay{
    	    	width:100%;
    	        height:50px;
    	        line-height:50px;
    	        border-top:.01rem solid #ccc;
    	        @include flexbox();
    	        .total-box{
    	        	@include flex(1);
    	        }
    	        p{
    	        	@include flex(1);
    	        	background:#a42e8e;
    	        	color:#fff;
    	        	text-align: center;
    	        	border:.01rem solid #ccc;
    	        	border-bottom:0;
    	        }
    	    }

    	}
    }
</style>