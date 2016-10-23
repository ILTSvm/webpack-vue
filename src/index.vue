<template>
  <div id="index">
    <headerHtml></headerHtml>
    <goodsTypes></goodsTypes>
  </div>
</template>

<script>
import headerHtml from './components/index/header';
import goodsTypes from './components/index/goodsTypes';

export default {
  name: 'Index',
  components: {
    headerHtml,
    goodsTypes
  },
  ready: function(){
    console.log(1);

    setTimeout(function(){
      new IScroll('#index');
    }, 2000);
  }
}
</script>

<style>
	.index{
		width: 100%;
	}
</style>