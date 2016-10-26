<template>
	<div id = "big-container">
		<div class = "list-header">闪耀商城</div>
		<ul class = "navlist">
			<li v-for = "nav in navlist">{{nav.text}}</li>
		</ul>
		<goodlist></goodlist>
	</div>
</template>
<script>

import goodlist from './components/common/goodlist.vue'
import IScroll from 'iscroll'
export default {
	name:'list',
	components: {
   		goodlist
   },
    data(){
    	return {
    		navlist:[
    			{text:"价格"},
    			{text:"种类"},
    			{text:"筛选"}
    		]
    	}
    },
}
</script>
<style lang = "scss" scoped>
  @charset "utf-8";
  @import "./styles/usage/core/reset.scss";
  @mixin line_height($height:60px){
  	height:$height;
  	line-height:$height;
  }

  #big-container{
      width:100%;
      height:100%;
      overflow: hidden;
      @include flexbox();
      @include flex-direction(column);
      .list-header{
      	background:#a42e8e;
      	height:50px;
      	line-height:50px;
      	color:#fff;
      	font-size:16px;
      	text-align:center;
      }
      .navlist{
      	 height:40px;
      	 width:100%;
      	 @include flexbox();
		 
     	 li{
     	 	flex:1;
			@include line_height(40px);
     	 	text-align: center;
     	 	border:.01rem solid #ccc;
     	 	border-left:0;
     	 	box-sizing: border-box;
     	 	background: #fff;
     	 	&:nth-child(3){
     	 		border-right:0;
     	 	}
     	 }
      }
  }
</style>