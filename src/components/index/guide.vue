<template>
  <div class="swiper-container">
      <div class="swiper-wrapper">

        <div class="swiper-slide" v-for="(img, index) in swiper">
          <div v-if="index==2">
            <router-link :to="toWhere">
              <img :src="img" title="testIg">
            </router-link>
          </div>
          <div class="swiper-slide" v-else>
            <img :src="img">
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      
  </div>
</template>
<script>
 import Swiper from 'swiper'
  export default {
    data() {
      return {
        toWhere: 'main',
        swiper:[
          '../../../static/images/guid1.jpg',
          '../../../static/images/guid2.jpg',
          '../../../static/images/guid3.jpg'
        ]
      }
    },
    mounted() {
      new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    }
  }
</script>
<style scoped>
  @import "../../styles/lib/swiper.css";
  img{
    width: 100%;
  }
</style>