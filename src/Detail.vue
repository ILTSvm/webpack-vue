<template>
  <div id="app">
    <swiper :piclists="piclists"></swiper>
    <div class="name">{{name}}</div>
    <div class="price">{{'￥'+price}}</div>
  </div>
</template>

<script>
import Swiper from './components/common/swiper'
import Count from './components/detail/count'
export default {
  name: 'app',
  data(){
    return {
      piclists: [require('./assets/detail.gif')],
      swiper:{
        
        autoplay: false,
      },
      name: '加载中...',
      price: '加载中...'
    }
  },
  components: {
    Swiper,
    Count
  },
  beforeCreate(){
    var id = this.$route.params.id;
    console.dir(this)
    this.$http.get('https://wlwywlqk.cn/goods/getdata?_id='+id)
    .then((resolve)=>{
      var data = JSON.parse(resolve.data)
      console.dir(data)
      this.piclists = data[0].piclists
      this.name = data[0].name
      this.price = data[0].price
      this.comment = data[0].comment
      console.dir(this)
    },(reject)=>{
      console.dir(reject)
    })
  }
}
</script>

<style lang="scss" scoped>
  @charset "utf-8";
  @import "./styles/usage/core/reset.scss";
  .name {
    @include flexbox();
    font-size: 16px;
  }
</style>