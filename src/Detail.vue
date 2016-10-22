<template>
  <div id="app">
    <swiper :swiper="swiper"></swiper>
    <div class="name">{{name}}</div>
    <div class="price">{{'￥'+price}}</div>
    <div class="count"><count :count="count"></count></div>
  </div>
</template>

<script>
import Swiper from './components/common/swiper'
import Count from './components/common/count'
export default {
  name: 'app',
  data(){
    return {
      swiper:{
        piclists: [],
        options: {
          autoplay: 3600
        }
      },
      count: 0,
      name: '加载中...',
      price: '加载中...',
      comment: '加载中...',
    }
  },
  components: {
    Swiper,
    Count
  },
  beforeCreate(){
    // var id = this.$route.params.id;
    this.$http.get('https://wlwywlqk.cn/goods/getdata?_id=57ed08be22673b1d8c950a99')
    .then((resolve)=>{
      var data = JSON.parse(resolve.data)
      for(var i = 0; i < data[0].piclists.length;i++){
        this.swiper.piclists.splice(i,1,'https://wlwywlqk.cn/img/'+data[0].piclists[i]) 
      }

      this.name = data[0].name
      this.price = data[0].price
      this.comment = data[0].comment
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
    font-weight: bold;
    font-family: "微软雅黑", Helvetica, STHeiTi, sans-serif;
    font-size: 16px;
    text-align: center;
    padding: .12rem 0;
  }
  .price{
    @include border(1px,#a52e8d,solid, .05rem);
    padding: 6px 8px;
    display: inline-block;
    background: #a52e8d;
    margin: 0px 16px;
    color: #fff;
    font-weight: 900;
  }
  .count{
    margin: 16px 0 0;
    background: #eee;
    padding: .1rem .16rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
</style>