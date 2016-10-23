<template>

	<div id = "container">
	    <router-view></router-view>
		<div id = "tab">
			<div v-for = "tabs in tablist">
				<router-link :to="tabs.linkTo">
					{{tabs.text}}
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>


export default {
  name: 'tab',
  data () {
    return {
      tablist:[
      	{
      		text:'首页',
      		src:'',
      		linkTo:'./index'
      	},{
      		text:'闪耀商城',
      		src:'',
      		linkTo:'./list'
      	},{
      		text:'购物车',
      		src:'',
      		linkTo:'/'
      	},{
      		text:'会员中心',
      		src:'',
      		linkTo:'/'
      	}
      ]
    }
  }
}
</script>

<style lang = "scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#container{
	height:100%;
	width:100%;
	display:flex;
}
</style>

