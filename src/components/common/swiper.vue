<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="pic in piclists"><img class="swiperimg" :src="pic" ></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination" v-if="options.pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev" v-if="options.prevButton"></div>
        <div class="swiper-button-next" v-if="options.nextButton"></div>

        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar" v-if="options.scrollbar"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'swiper',
  data(){
      return {
      }
  },
  props:['swiper'],
  computed:{
      piclists(){
          if(this.swiper.piclists&&this.swiper.piclists.length!==0){
              return this.swiper.piclists
          }else{
              return [require('../../assets/detail.png')]
          }
      }, 
      options(){
          var options = this.swiper.options
          if(options.pagination){
              options.pagination = '.swiper-pagination'
          }
          if(options.prevButton){
              options.prevButton = '.swiper-button-prev'
          }
          if(options.nextButton){
              options.nextButton = '.swiper-button-next'
          }
          if(options.scrollbar){
              options.scrollbar = '.swiper-scrollbar'
          }
          return options
      }
  },
  mounted(){
      this.$nextTick(()=>{
          new Swiper('.swiper-container',this.options)
      })
  },
  updated(){
      this.$nextTick(()=>{
          new Swiper('.swiper-container',this.options)
      })
  }
}
</script>

<style lang="scss" scoped>
    @charset "utf-8";
    @import "../../styles/lib/swiper.css";
    .swiperimg {
        width: 100%;
    }
</style>