<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="pic in piclists"><img class="swiperimg" :src="'https://wlwywlqk.cn/img/'+pic" :alt="name"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'swiper',
  data(){
      return {
          pic: "123123"
      }
  },
  props:['piclists','name'],
  updated(){
      new Swiper('.swiper-container')
  }
}
</script>

<style lang="scss" scoped>
    @charset "utf-8";
    @import "../../styles/lib/swiper.css";
    .swiperimg{
        width: 100%;
        height: 100vw;
        padding: 10%;
    }
    .swiper-slide{
        box-sizing: border-box;
    }
</style>