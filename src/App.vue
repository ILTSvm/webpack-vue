<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <index></index>
  </div>
</template>

<script>
import index from './components/index'

export default {
  name: 'app',
  components: {
    index
  }
}
</script>

<style lang="scss">

  @charset "utf-8";
  @import "./styles/usage/core/reset.scss";
  @import "./styles/lib/core/classes.scss";
  @import "./styles/usage/common/common.scss";

/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
