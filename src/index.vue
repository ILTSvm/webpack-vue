<template>
  <div id="index">
    <div class="headerflex"><headerHtml></headerHtml></div>
    <div class="gtContent"><goodsTypes></goodsTypes></div>
  </div>
  
</template>

<script>
import headerHtml from './components/index/header';
import goodsTypes from './components/index/goodsTypes';
import commonUtil from "./scripts/common/commonUtil";
import Vue from 'vue'
import resource from 'vue-resource'
import IScroll from 'iscroll'
export default {
  name: 'Index',
  data(){
    return {
      test: 'test'
    }
  },
  components: {
    headerHtml,
    goodsTypes
  },
  mounted: function(){
    // var that = this;
    // that.$http.get('/syhIndex/goodsTypes').then((res) => {
    //     console.log(res.data);
    // })
  },
  updated: function(){
    console.log("index-update");
  }
}
</script>

<style lang="scss">
  @import './styles/usage/page/index.scss';
	#index{
    @include flexbox();
    @include flex-direction(column);
		width: 100%;
    height: 100%;
    .headerflex{
      height: 48px;
    }
    .gtContent{
      @include flex();
      width: 100%;
      overflow: hidden;
    }
	}
</style>