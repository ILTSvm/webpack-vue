<template>
  <div class="index">
    <header>
      <div>
        <img :src="headerInfo.iconImg" alt="闪耀你未来" />
      </div>
      <form action="">
        <input type="text">
      </form>
      <span>{{headerInfo.logonContent}}</span>
    </header>

  </div>
</template>

<script>
  export default {
    name: 'index',
    data(){
      return {
        headerInfo: {
          iconImg: require('../assets/test.png'),
          logonContent: '登录'
        }
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    /*@include flexbox();*/
    display: flexbox;
    /*@include flex-direction(row);*/
    height: 48px;
    padding: 8px 16px;
    background: rgb(180, 6, 228);
    div{
      /*@include flex(3);*/
      flex: 3;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    form{
      /*@include flex(9);*/
      flex: 9;
    }
    span{
      /*@include flex(2);*/
      flex: 2;
    }
  }
</style>
