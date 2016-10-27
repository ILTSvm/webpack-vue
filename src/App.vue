<template>
	<div id = "container">
	    <div id="scorll">
	        <router-view></router-view>
	    </div> 
		<div id = "tab">
			<div v-for = "tabs in tablist" class = "tablist">
				<router-link :to="tabs.linkTo">
					<p :class = "tabs.className"></p>
					<p>{{tabs.text}}</p>
				</router-link>
			</div>
		</div>
	</div>
	<!--v-bind:class="cur == $index ? 'active' : ''"
              v-on:click="changPage($index)"-->
</template>
<script>

import Vue from 'vue'
import IScroll from 'iscroll'

// import commonUtil from "./scripts/common/commonUtil";
// commonUtil.myScroll();

export default {
  name: 'tab',
  data () {
    return {
      cur:0,
      appScroll: '',
      tablist:[
      	{
      		text:'首页',
      		className:'iconfont icon-shouye',
      		linkTo:'index'
      	},{
      		text:'闪耀商城',
      		className:'iconfont icon-dianpu',
      		linkTo:'list'
      	},{
      		text:'购物车',
      		className:'iconfont icon-gouwuche',
      		linkTo:'car'
      	},{
      		text:'会员中心',
      		className:'iconfont icon-yonghu',
      		linkTo:'mine'
      	}
      ]
    }
  },

  updated(){
  },
  mounted(){
  },
  
  methods: {

  }
}
</script>

<style lang = "scss" scoped>
	@charset "utf-8";
    @import "./styles/usage/core/reset.scss";
    @import "./styles/lib/iconfont/iconfont.css";

#container{
	height:100%;
	width:100%;

	@include flexbox();
	@include flex-direction(column);
	#scorll{
	    @include flex(1);
	    width:100%;
		height: 100%;
		overflow: hidden;
	}
	#tab{
	    @include flexbox();
	    height:.44rem;
	    width:100%;
	    color:#fff;
	    .tablist{
	    	
	        border-top:.01rem solid #B0B0B0;
	        background:#fff;
	        height:44px;
	        line-height:44px;
	        @include flex(1);
	        a{
	        	display:block;
	        	width:100%;
	        	height:100%;
	        	text-align:center;
	            color:#000;
	            p{
	            	height:22px;
	            	line-height:22px;
	            	font-size:.12rem;
	            	color:#818181;
	            }
	            .iconfont{
	            	line-height:28px;
	            	font-size:.20rem;
	            }
	            
	        }
	    }
	}
}
</style>

