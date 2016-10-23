<template>
	<div id = "good-container">
		<router-view></router-view>
		<ul class = "goodlists">
			<li  class =  "goodinfo" v-for = "good in goodlist">
				<img :src = "'https://wlwywlqk.cn/img/'+good.piclists[0]">
				<router-link :to="{ name: 'Detail', params: { id: good._id }}">{{good.name}}</router-link>
				<span>¥{{good.price}}</span>
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
      var that = this;
      this.$http.get('https://wlwywlqk.cn/goods/getData?pageindex=1&pagesize=10')
        .then((res) => {
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