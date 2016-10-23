<template>
  <header>
    <div>
      <img :src="headerInfo.iconImg" alt="闪耀你未来" />
    </div>
    <form action="">
      <input type="text" placeholder="在结果中搜索" />
    </form>
    <span>{{headerInfo.logonContent}}</span>
  </header>
</template>

<script>
  export default {
    name: 'index',
    data(){
      return {
        headerInfo: {
          iconImg: require('../../assets/test.png'),
          logonContent: '登录'
        }
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>  
  @import '../../styles/usage/page/index.scss';

  header{
    @include flexbox();
    width: 100%;
    height: 48px;
    font-size: 16px;
    font-weight: 600;
    padding: 8px 16px;
    color: #FFF;
    background: rgb(180, 6, 228);
    div{
      @include flex(3);
      height: 100%;
      img{
        padding: 6px 10px 4px 0;
        width: 100%;
        height: 100%;
      }
    }
    form{
      @include flex(9);
      height: 100%;
      input{
        height: 100%;
        width: 100%;
        background: #FFF;
        color: #aaa;
        border: none;
        border-radius: 30px;
        padding-left: 30px;
      }
    }
    span{
      @include flex(2);
      line-height: 32px;
      text-align: center;
    }
  }
</style>
