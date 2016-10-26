<template>
	<div id="mine">
		<!--<signup></signup>-->
		<div class="section">
			<div class = "orders">
				<div class = "orders-top">
					<div class = "oreders-top-left">我的订单</div>
					<div class = "orders-top-right">全部订单</div>
				</div>
				<ul class = "iconlist">
					<!--<block wx:for = "{{icon}}">-->
						<li class = "icon" v-for= "item in icon1">
							<p :class = "item.icon"></p>
							<span>{{item.text}}</span>
						</li>
					<!--</block>-->
				</ul>
			</div>
			<div class = "orders">
				<div class = "orders-top">
					<div class = "oreders-top-left">我的资产</div>
				</div>
				<ul class = "iconlist">
					<li class = "icon" v-for = "item in icon2">
						<p :class = "item.icon"></p>
						<span>{{item.text}}</span>
					</li>
				</ul>
			</div>
			<div class = "good">
				<figcaption>猜你喜欢</figcaption>
				<goodlist></goodlist>
			</div>
		</div>
	</div>
</template> 
<script>
import signup from './signup'
import goodlist from './components/common/goodlist.vue'
export default {
  name: 'detail',
  data(){
    return {
       icon1:[
			{
				icon:"iconfont icon-home",
				text:"待付款"
			},
			{
				icon:"iconfont icon-home",
				text:"待发货"
			},
						{
				icon:"iconfont icon-home",
				text:"待收货"
			},
			{
				icon:"iconfont icon-home",
				text:"待评价"
			}
	    ],
	    icon2:[
	    	{
				icon:"iconfont icon-home",
				text:"优惠券"
			},
			{
				icon:"iconfont icon-home",
				text:"有货币"
			},
			{
				icon:"iconfont icon-home",
				text:"限购码"
			}
	    ]
    }
  },
  methods: {
    
  },
  computed: {
  },
  components: {
    signup,
    goodlist
  },
  updated(){
  },
  beforeCreate(){
    
  }
}
</script>

<style lang = "scss" scoped>
	@charset "utf-8";
    @import "./styles/usage/core/reset.scss";
    @import "./styles/lib/iconfont/iconfont.css";
    
    #mine{
    height:100%;
    background: #CCCCCC;
	
		.orders{
		    width:100%;
		    height:190rpx; 
		    margin:40rpx 0;
		    background: #fff;
		    .orders-top{
		        box-sizing: border-box;
		        height:60rpx;
		        line-height:60rpx;
		        width:100%;
		        display: flex;
		        justify-content: space-between;
		        padding:0 40rpx  0 50rpx;
		        .orders-top-left{
		            font-size:14rpx;
		            
		        } 
		        .orders-top-right{
		            font-size:12rpx;
		        }
		    }
		    .iconlist{
		        display:flex;
		        height:129rpx;
		        width:100%;
		        border-top:1rpx solid #ccc;
		        flex-wrap: nowrap;
		        li{
		            flex:1;
		            height:129rpx;
		            display:flex;
		            box-sizing:border-box;
		            flex-direction: column;
		            text-align: center; 
		            font-size:12rpx;
		            image{
		                box-sizing: border-box;
		                width: 100%;
		                flex: 1;
		                padding: 10px;
		            }
		            span{
		                width:100%;
		                text-align: center;
		                flex:1;
		            }
		        }
		    }
		    
		}
		.good {
		    background: #fff;
		  figcaption {
		    display: block;
		    font-size: 16px;
		    box-sizing: border-box;
		    padding: 30rpx;
		    height: 60rpx;
		    line-height: 60rpx;
		    text-align: center;
		  }
		  .goodlist {
		    display: flex;
		    flex-wrap: wrap;
		    li {
		      width: 50%;
		      display: flex;
		      flex-direction: column;
		      height: 700rpx;
		      box-sizing: border-box;
		      padding: 20rpx;
		      text-align: left;
		    }
		    image {
		      width: 100%;
		      flex: 4;
		    }
		  }
		  .goolist p {
		    text-align: center;
		  }
		  .goodlist span {
		    color: #A61717;
		  }
		}
	}

</style>