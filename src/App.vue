<template>

	<div id = "container">
	    <div id="scorll">
	        <router-view></router-view>
	    </div> 

		<div id = "tab">
			<div v-for = "tabs in tablist" class = "tablist">
				<router-link :to="tabs.linkTo">
					{{tabs.text}}
				</router-link>
			</div>
		</div>
	</div>
	<!--v-bind:class="cur == $index ? 'active' : ''"
              v-on:click="changPage($index)"-->
</template>
<script>
import IScroll from 'iscroll'

export default {
  name: 'tab',
  data () {
    return {
      cur:0,
      tablist:[
      	{
      		text:'首页',
      		src:'',
      		linkTo:'/index'
      	},{
      		text:'闪耀商城',
      		src:'',
      		linkTo:'/list'
      	},{
      		text:'购物车',
      		src:'',
      		linkTo:'/car'
      	},{
      		text:'会员中心',
      		src:'',
      		linkTo:'/mine'
      	}
      ]
    }
  },
  updated(){
	  console.dir(11111)
  	new IScroll('#scorll',{click:true, mouseWheel: true})
  },
  methods: {
    changPage(i) {
      this.cur = i;
    }
  }
}
</script>

<style lang = "scss" scoped>
@import './styles/usage/page/index.scss';

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
	    .active{
	        background:#fff;
	    }
	    @include flexbox();
	    height:44px;
	    width:100%;
	    color:#000;
	    .tablist{
	        border:1px solid #000;
	        background:green;
	        height:44px;
	        line-height:44px;
	        @include flex(1);
	    }
	}
}

</style>

