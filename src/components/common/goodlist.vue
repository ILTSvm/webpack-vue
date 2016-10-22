<template>
	<div id = "good-container">
		<router-view></router-view>
		<ul class = "goodlists">
			<li  class =  "goodinfo" v-for = "good in goodlist">
				<router-link :to="{ path: '/Detail', query: { id: good._id }}">123</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name:"goodlists",
    data() {
      return {
        goodlist:[],
      }
    },
    created: function() {
      console.log(123);
      var that = this;
      this.$http.get('https://wlwywlqk.cn/goods/getData?pageindex=1&pagesize=10')
        .then((res) => {
          console.log(res.data);
          this.goodlist = JSON.parse(res.data);
//        setTimeout(function(){
//          new IScroll('#index-scroll');
//        }, 500);
//
//        mySwiper = new Swiper("#index-swiper", {
//          onSlideChangeStart: function(){
//            that.curIndex = mySwiper.activeIndex;
//          }
//        });
        })
    }
}
</script>