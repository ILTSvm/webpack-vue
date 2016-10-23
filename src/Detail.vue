<template>
  <div id="app">
    <swiper :swiper="swiper"></swiper>
    <div class="name">{{name}}</div>
    <div class="price">{{'￥'+price}}</div>
    <div class="countbox">
      <div class="count">
        <span class="decrease">-</span>
        <input class="input" v-model="count">
        <span class="increase">+</span>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from './components/common/swiper'
export default {
  name: 'app',
  data(){
    return {
      swiper:{
        piclists: [],
        options: {
          autoplay: 3600,
          pagination: true
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
  .countbox{
    margin: 16px 0 0;
    background: #eee;
    padding: .1rem .16rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    span{
      font-size: 16px;
      font-weight: 900;
      color: #aaa;
    }
  }
</style>