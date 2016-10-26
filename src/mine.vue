<template>
	<div id="mine">
		<!--<signup></signup>-->
		<div class = "mine-header">
			<div class = "setting iconfont icon-shezhi"></div>
			<div class = "header-text">会员中心</div>
			<div class = "message iconfont icon-saoma"></div>
		</div>
		<div class="section-box">
			<div class="section">
				<div class = "login-box">
					<router-link to = "signin"  v-if = "isLogin==false">登录\注册</router-link>
					<div class = "user-box" v-if = "isLogin==true">
						<div class = "photo">
							<img src = "../static/images/photo.jpg">
						</div>
						<p>{{username}}</p>
						<p @click = "exit" class = "exit">注销</p>
					</div>
				</div>
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
					<goodlist style = "background:#fff;"></goodlist>
				</div>
			</div>
		</div>
	</div>
</template> 
<script>
import IScroll from 'iscroll'
import signup from './signup'
import goodlist from './components/common/goodlist.vue'
import _cookie from './scripts/common/cookieUtil.js'
export default {
  name: 'detail',
  data(){
    return {
       isLogin:false,
       username:'',
       icon1:[
			{
				icon:"iconfont icon-daifukuan",
				text:"待付款"
			},
			{
				icon:"iconfont icon-daifahuo",
				text:"待发货"
			},
						{
				icon:"iconfont icon-not-received",
				text:"待收货"
			},
			{
				icon:"iconfont icon-zhaoxiangji",
				text:"待评价"
			},
			{
				icon:"iconfont icon-dianhua",
				text:"退/换货"
			}
	    ],
	    icon2:[
	    	{
				icon:"iconfont icon-youhuiquan",
				text:"优惠券"
			},
			{
				icon:"iconfont icon-dk",
				text:"有货币"
			},
			{
				icon:"iconfont icon-suo",
				text:"限购码"
			}
	    ]
    }
  },
  methods: {
    exit(){
    	_cookie.removeCookie("username");
    	this.isLogin =false;
    }
  },
  computed: {
  },
  components: {
    signup,
    goodlist
  },
  mounted(){
  	var myScroll = new IScroll('.section-box');
  	console.dir(myScroll);
  	var loginStr = _cookie.getCookie("username");
  	if(loginStr!=''&&loginStr){
  		var loginInfo = JSON.parse(loginStr);
  		this.isLogin = true;
  		this.username="syh1100_"+loginInfo.name;
  	}else{
  		this.isLogin = false;
  	}
  },
  updated(){
  	var myScroll = new IScroll('.section-box',{click:true,mouseWheel: true});
  	console.log(0);
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
    background:#a42e8e;
    @include flexbox();
    @include flex-direction(column);
    	.mine-header{
    		background:#a42e8e;
    		height:40px;
    		color:#fff;
    		line-height:20px;
    		@include flexbox();
    		div{
    			@include flex();
    			box-sizing:border-box;
    			padding:10px;
    		}
    		.setting{
    			text-align: left;
    		}
    		.header-text{
    			text-align:center;
    		}
    		.message{
    			text-align:right;
    		}
    	}
	    .section-box{
	    	/*height:100%;*/
	    	overflow:hidden;
	    	@include flex();
	    	width:100%;
	    	background:#EEEEEE;
	    }
	    .login-box{
	    	position: relative;
	    	height:2.2rem;
			width:100%;
			background:#a42e8e;
			padding-top:30px;
			p{
				text-align: center;
				height:30px;
				line-height:30px;
				color:#fff;
				font-size:.14rem;
			}
			.exit{
				border-radius: .1rem;
				width:.6rem;
				margin:0 auto;
				border:.01rem solid #fff;
			}
	    	.photo{
	    		width:1rem;
	    		height:1rem;
	    		
	    		margin:0 auto 15px;
	    		border-radius:50%;
	    		overflow:hidden;
	    		
	    		img{
	    			width:100%;
	    			height:100%;
	    		}
	    	}
	    	a{
	    		display:block;
	    		position:absolute;
	    		left:50%;
	    		top:50%;
	    		-webkit-transform: translateY(-50%);
	    		-moz-transform: translateY(-50%);
	    		-ms-transform: translateY(-50%);
	    		-o-transform: translateY(-50%);
	    		transform: translateY(-50%);
	    		margin-left: -0.6rem;
	    		height:.5rem;
	    		line-height:.5rem;
	    		width:1.2rem;
	    		text-align: center;
	    		/*margin: 0 auto;*/
	    		color:#fff;
	    		border: .01rem solid #ccc ;
	    		opacity: .5;
	    		border-radius: .1rem;
	    	}
	    }
		.orders{
		    width:100%;
		    height:1.2rem; 
		    margin:.2rem 0;
		    background: #fff;
		    .orders-top{
		        box-sizing: border-box;
		        height:.3rem;
		        line-height:.3rem;
		        width:100%;
		        display: flex;
		        justify-content: space-between;
		        padding:0 .4rem  0 .5rem;
		        .orders-top-left{
		            font-size:14px;
		            
		        } 
		        .orders-top-right{
		            font-size:12px;
		        }
		    }
		    .iconlist{
		        @include flexbox();
		        height:0.9rem;
		        /*line-height:0.9rem;*/
		        width:100%;
		        border-top:.01rem solid #ccc;
		        flex-wrap: nowrap;
		        li{
		            @include flex();
		            height:.9rem;
		            @include flexbox();
		            box-sizing:border-box;
		            @include flex-direction(column);
		            text-align: center; 
		            font-size:.12rem;
		            p{
		                box-sizing: border-box;
		                @include flex();
		                width: 100%;
		                height:.45rem;
		               	line-height:.80rem;
		               	font-size:.25rem;
		            }
		            span{
						height:.45rem;
						line-height:.45rem;
		                text-align: center;
		                @include flex();
		                width:100%;
		            }
		        }
		    }
		    
		}
		.good {
		    background: #fff;
		  figcaption {
		    display: block;
		    font-size: .16rem;
		    box-sizing: border-box;
		    /*padding: .1rem;*/
		    height: .60rem;
		    line-height: .60rem;
		    text-align: center;
		  }
		  .goodlist {
		    display: flex;
		    flex-wrap: wrap;
		    li {
		      width: 50%;
		      display: flex;
		      @include flex-direction(column);
		      height: 7rem;
		      box-sizing: border-box;
		      padding: .2rem;
		      text-align: left;
		    }
		    image {
		      width: 100%;
		     @include flex(4);
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