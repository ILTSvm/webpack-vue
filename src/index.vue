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
  }
}
</script>

<style>
	.index{
		width: 100%;
	}
</style>