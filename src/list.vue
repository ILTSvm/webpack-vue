<template>
	<div id = "big-container">
		<ul class = "navlist">
			<li v-for = "nav in navlist">{{nav.text}}</li>
		</ul>
		<goodlist></goodlist>
	</div>
</template>
<script>

import goodlist from './components/common/goodlist.vue'

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
    }
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
      @include flexbox();
      @include flex-direction(column);
      .navlist{
      	 height:50px;
      	 width:100%;
      	 @include flexbox();
     	 li{
     	 	flex:1;
			@include line_height(50px);
     	 	text-align: center;
     	 	border-right:1px solid #ccc;
     	 	box-sizing: border-box;
     	 	background: #eeeeee;
     	 	&:nth-child(3){
     	 		border-right:0;
     	 	}
     	 }
      }
  }
</style>