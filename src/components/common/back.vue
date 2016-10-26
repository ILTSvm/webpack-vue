<template>
    <div id="back">
        <span class="btn"><div class="lt" @click="goBack"></div></span>
        <h2><slot></slot></h2>
    </div>
</template>

<script>


export default {
  name: 'back',
  methods:{
      goBack(){
          window.history.go(-1)
      }
  }
}
</script>

<style lang="scss" scoped>
    @import "../../styles/usage/core/reset.scss";
    #back{
        z-index: 1;
        position: relative;
        color: #fff;
        background: #96b;
        height: .38rem;
        line-height: .38rem;
        font-family: "微软雅黑";
        @include flexbox();
        .btn{
            font-size: .32rem;
            font-weight: 900;
            width: .38rem;
            .lt{
                transform: rotate(45deg);
                border-bottom: 5px solid #fff;
                border-left: 5px solid #fff;
                width: .16rem;
                height: .16rem;
                margin: .1rem;
                display: inline-block;
            }
        }
        h2{
            width: 100%;
            overflow: hidden;
        }
    }
</style>