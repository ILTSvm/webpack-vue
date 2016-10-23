<template>
  <div class="goods-types">
    <nav class="index-navbar">
      <li v-for="gt in goodsType">
        <img :src="gt.imgUrl" alt="">
        <span>{{gt.gtText}}</span>
      </li>
    </nav>

    <div class="goods-gloable">
      <h3 class="goods-til"><img :src="goodGlobal" alt=""></h3>
      <div class="good-content zhicai">
        <div class="goodtype-til"><img :src="goodContent[0].topTil" alt=""></div>
        <img class="hotGoods" :src="goodContent[0].hotGoods" alt="">
        <nav class="good-list">
          <li v-for="goodli in goodContent[0].goodList"><img :src="goodli" alt=""></li>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goods-types',
    data(){
      return {
        goodsType: [
          {
            imgUrl: '../../../static/images/890a4df11092.png',
            gtText: '分类查询'
          },
          {
            imgUrl: '../../../static/images/392233b799f2.png',
            gtText: '购物车'
          },
          {
            imgUrl: '../../../static/images/7a66b9f3412a.png',
            gtText: '会员中心'
          },
          {
            imgUrl: '../../../static/images/9da6772bb68b.png',
            gtText: '我的关注'
          }
        ],
        goodGlobal: '../../../static/images/24a5386981fd.jpg',

        goodContent: [
          {
            topTil:'../../../static/images/4867c79e7c7f.png',
            hotGoods: '../../../static/images/430d38032ea4.jpg',
            goodList: [
              '../../../static/images/d7a20852acce.jpg',
              '../../../static/images/7768988c35f4.jpg',
              '../../../static/images/be979df41a1d.jpg'
            ]
          }
        ]

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>  
  @import '../../styles/usage/page/index.scss';
  ul,li{
    list-style: none;
  }
  .goods-types{
    @include flexbox();
    @include flex-direction(column);
    width: 100%;
    .index-navbar{
      @include flexbox();
      @include justify-content(space-around);
      width: 100%;
      /*height: 80px;*/
      padding: 5px 0;
      background: #FFF;
      li{
        @include flexbox();
        @include flex();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        font-size: 10px;
        font-weight: 400;
        color: #333;
        height: 100%;
        text-align: center;
        list-style: none;
        /*padding: 0 10px;*/
        img{
          height: 54px;
          width: 54px;
        }
      }
    }
    .goods-gloable{
      @include flexbox();
      @include flex-direction(column);
      h3{
        width: 100%;
        height: 26px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .good-content{
        @include flexbox();
        @include flex-direction(column);
        width: 100%;
        padding: 6px 2px;
        .goodtype-til{
          img{
            width: 100%;
            height: 100%;
          }
        }
        .good-list{
           @include flexbox();
           @include flex-direction(row);
           li{
            @include flex();
            padding-right: 6px;
            img{
              width: 100%;
            }
            &:last-child{
              padding-right: 0;
            }
           }
        }
      }
      .zhicai{
        background: #ffe9fe;
        .hotGoods{
          width: 100%;
        }
      }
    }
  }

</style>
