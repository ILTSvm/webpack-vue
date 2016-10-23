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

      <div v-for="goodsCt in goodContent">
        <div v-bind:class="goodsCt.classes">
          <div v-if="goodsCt.topTil" class="goodtype-til"><img :src="goodsCt.topTil" alt=""></div>
          <div class="hotGoods" v-if="goodsCt.hotGoods">
            <img :src="goodsCt.hotGoods" alt="">
          </div>
          <nav class="good-list">
            <li v-if="goodsCt.bigShow" class="bigShow">
              <img :src="goodsCt.bigShow" alt="">
            </li>
            <div class="goodli-wrap">
              <li v-for="goodli in goodsCt.goodList">
                <img :src="goodli.imgUrl" alt="">
                <div v-if="goodli.text">
                  <span>{{goodli.text}}</span>
                  <span><i>{{goodli.price}}</i></span>
                </div> 
              </li>
            </div>
          </nav>
        </div>
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
            classes: 'good-content good-content1 zhicai',
            topTil:'../../../static/images/4867c79e7c7f.png',
            hotGoods: '../../../static/images/430d38032ea4.jpg',
            goodList: [
              {
                imgUrl: '../../../static/images/d7a20852acce.jpg'
              },
              {
                imgUrl: '../../../static/images/7768988c35f4.jpg'
              },
              {
                imgUrl: '../../../static/images/be979df41a1d.jpg'
              }
            ]
          },
          {
            classes: 'good-content good-content1 newproduct',
            topTil:'../../../static/images/307e95179721.png',
            goodList: [
              {
                imgUrl: '../../../static/images/cc31385b5219.jpg@235w_278h_100Q.jpg',
                text: '【保税仓发货】pororo 婴儿香皂 (婴儿爽身粉味）100g',
                price: '￥63.50'
              },
              {
                imgUrl: '../../../static/images/e75865a432e2.jpg@235w_278h_100Q.jpg',
                text: '[热销产品]韩芳肌蜜蜗牛原液幼嫩美手膜50g',
                price: '￥99'
              },
              {
                imgUrl: '../../../static/images/7fe6cab117b6.jpg@235w_278h_100Q.jpg',
                text: '【保税仓发货】pororo 婴儿香皂 (婴儿爽身粉味）100g',
                price: '￥99.50'
              }
            ]
          },
          {
            classes: 'good-content good-content2 beautify',
            topTil:'../../../static/images/907078587fec.png',
            bigShow: '../../../static/images/45e8fd710b86.jpg',
            goodList: [
              {
                imgUrl: '../../../static/images/b07ef155cc34.jpg',
              },
              {
                imgUrl: '../../../static/images/f9ee999d84ab.jpg',
              },
              {
                imgUrl: '../../../static/images/4fb72cabfea0.jpg',
              },
              {
                imgUrl: '../../../static/images/81543ec258e0.jpg'
              }
            ]
          },
          {
            classes: 'good-content good-content2 foodprotect',
            topTil:'../../../static/images/524664bceff4.jpg',
            bigShow: '../../../static/images/4c429c5d2494.jpg',
            goodList: [
              {
                imgUrl: '../../../static/images/3eeb6f441654.jpg',
              },
              {
                imgUrl: '../../../static/images/70b842eb6096.jpg',
              },
              {
                imgUrl: '../../../static/images/b956653e8b8e.jpg',
              },
              {
                imgUrl: '../../../static/images/e734adc68933.jpg'
              }
            ]
          },
          {
            classes: 'good-content goodad',
            goodList: [
              {
                imgUrl: '../../../static/images/2aca656bf408.jpg',
              },
              {
                imgUrl: '../../../static/images/897a5f44bf1b.jpg',
              }
            ]
          },
          {
            classes: 'good-content good-content3 hotProducts',
            topTil:'../../../static/images/5f6263a6a7b2.png',
            hotGoods: '../../../static/images/6e35e0752220.jpg',
            goodList: [
              {
                imgUrl: '../../../static/images/32ca5a8a1abd.jpg@940w_1112h_100Q.jpg',
                text: '【保税仓发货】pororo 婴儿香皂 (婴儿爽身粉味）100g',
                price: '￥63.50'
              },
              {
                imgUrl: '../../../static/images/32ca5a8a1abd.jpg@940w_1112h_100Q.jpg',
                text: '【保税仓发货】pororo 婴儿香皂 (婴儿爽身粉味）100g',
                price: '￥63.50'
              },
              {
                imgUrl: '../../../static/images/32ca5a8a1abd.jpg@940w_1112h_100Q.jpg',
                text: '【保税仓发货】pororo 婴儿香皂 (婴儿爽身粉味）100g',
                price: '￥63.50'
              },
              {
                imgUrl: '../../../static/images/32ca5a8a1abd.jpg@940w_1112h_100Q.jpg',
                text: '【保税仓发货】pororo 婴儿香皂 (婴儿爽身粉味）100g',
                price: '￥63.50'
              }
            ]
          }
        ]

      }
    },
    ready: function(){
      console.log(1);

      setTimeout(function(){
        new IScroll('#index');
      }, 2000);
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
      background: #efeff0;
      h3{
        width: 100%;
        height: 26px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .good-content{
        width: 100%;
        padding: 6px 2px;
        margin-bottom: 10px;
        background: #FFF;
        .goodtype-til{
          padding-bottom: 2px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .good-list{
          width: 100%;
          padding: 0 4px;
        }
        .goodli-wrap{
          @include flexbox();
          @include flex-direction(row);
          width: 100%;
          height: 100%;
        }
      }
      .good-content1{
        @include flexbox();
        @include flex-direction(column);
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
          img{
            width: 100%;
          }
        }
      }
      .newproduct{
        background: #FFF;
        .good-list{
          width: 100%;
          li{
            padding: 14px;
            padding-bottom: 0;
            border: 1px solid #ffcefc;
            margin: 0 2px;
            span:first-child{
              display: block;
              height: 40px;
              line-height: 20px;
              font-size: 12px;
              color: #8f8f94;
              overflow: hidden;
            }
            span:last-child{
              display: block;
              text-align: center;
              i{
                color: #a52e8d;
                font-size: 12px;
              }
            }
          }
        }
      }

      .good-content2{
        .good-list{
          overflow: hidden;
          width: 100%;
          flex: 1;
          @include flexbox();
          li{
            padding: 0 8px 0 4px;
          }
          .bigShow{
            /*flex: 1;*/
            width: 47%;
            img{
              width: 100%;
            }
          }
          .goodli-wrap{
            /*flex: 1;*/
            width: 53%;
            height: 100%;
            @include flexbox();
            @include flex-wrap(wrap); 
            li{
              width: 50%;
              height: 100%;
              &:nth-child(3),&:nth-child(4){
                padding-top: 11px;
              };
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }

      .good-content3{
        .hotGoods{
          width: 100%;
          padding: 2px 4px;
          img{
            width: 100%;
          }
        }
        .good-list .goodli-wrap{
          @include flexbox();
          li{
            @include flex();
            padding: 0 4px;
            img{
              width: 100%;
            }
            span:first-child{
              display: block;
              height: 40px;
              line-height: 20px;
              font-size: 12px;
              color: #8f8f94;
              overflow: hidden;
            }
            span:last-child{
              display: block;
              text-align: center;
              i{
                color: #a52e8d;
                font-size: 12px;
              }
            }
          }
        }

      }

      .goodad{
        width: 100%;
        .good-list{
          width: 100%;
          .goodli-wrap{
            @include flexbox();
            @include flex();
            width: 100%;
            li{
              flex: 1;
              padding: 0 6px;
              &:first-child{
                padding-right: 4px;
              }
              &:last-child{
                padding-left: 4px;
              }
              img{
                width: 100%;
              }
            }
          }
        }
      }
    }
  }

</style>
