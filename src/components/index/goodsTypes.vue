<template>
  <div id="gt_scroll">
    <div class="scroll-wrap">
      <!-- <headerHtml></headerHtml> -->
      <div id="goTp" class="goods-types">
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
          <!-- 上拉加载更多 -->
          <div class="foot-more">
            <img v-bind:src="imgArrow"/>
            <span>上拉加载更多...</span>
          </div>

        </div>
      </div>
    </div>
    
  </div>
  
</template>

<script>
 import headerHtml from './header';
 import Vue from 'vue';
 import commonUtil from "../../scripts/common/commonUtil";
 import IScroll from 'iscroll';
  export default {
    data(){
      return {
        getCountData: 0,
        imgArrow: require('../../assets/arrow.png'),
        goodsType: [],
        goodGlobal: '../../../static/images/24a5386981fd.jpg',
        goodBigType: [],
        goodContent: [],
        guessLove: []
      }
    },
    components: {
      headerHtml
    },
    updated(){
    },
    mounted: function(){
      // console.log("mounted");
      let that = this;

      that.$http.get('/syhIndex/indexData').then((res) => {
        that.goodsType = res.data.goodsType;
        that.goodContent = res.data.goodContent;
        that.goodBigType = res.data.goodBigType;
        // console.log(res.data.goodContent);
        Vue.nextTick(function() {
            commonUtil.isAllLoaded('#gt_scroll', function() {
                var myScroll = new IScroll('#gt_scroll', {
                    probeType: 3,
                    mouseWheel: true,
                    click: true
                });
                myScroll.on('scrollEnd', function() {
                    var self = this;
                    var maxY = this.maxScrollY - this.y;
                    if (maxY > -35 && maxY < 0) {
                        myScroll.scrollTo(0, self.maxScrollY + 35);
                        // foot.removeClass('down')
                    } else if (maxY >= 0) {
                        // console.log("up");
                        if(that.getCountData <= 2){
                          for(var i=0; i<that.goodBigType.length; i++){
                            var dataUrl =  "https://wlwywlqk.cn/goods/search?search="+that.goodBigType[i].type+"&pagesize=4";
                            let bigImg = that.goodBigType[i].imgUrl;
                            that.$http.get(dataUrl).then((res) => {
                                var getCurdata = res.data;
                                var newData = {
                                classes: 'good-content good-content3 hotProducts',
                                hotGoods: '../../../static/images/6e35e0752220.jpg',
                                goodList: []
                              };
                              newData.hotGoods = bigImg;
                              var arrCurData = JSON.parse(getCurdata);
                              (function(){
                                for(var j=0; j<4; j++){
                                  let obj = {};
                                  obj.imgUrl = "https://wlwywlqk.cn/img/"+arrCurData[j].piclists[0];
                                  obj.text = arrCurData[j].name;
                                  obj.price = "￥"+arrCurData[j].price;
                                  newData.goodList.push(obj);
                                }
                              })()
                              that.goodContent.push(newData);
                              // console.log(newData);
                              Vue.nextTick(function() {
                                  commonUtil.isAllLoaded('#gt_scroll', function(){
                                  myScroll.refresh();
                                  // self.maxScrollY += ;
                                })
                              });
                            });
                          };
                          that.getCountData ++ ;
                        }else if(that.getCountData == 3){
                            var dataUrl =  "https://wlwywlqk.cn/goods/getData?&pagesize=15";
                            let countIndex = i;
                            that.$http.get(dataUrl).then((res) => {
                                var getCurdata = res.data;
                                var newData = {
                                  classes: 'good-content good-content4 guessLove',
                                  topTil: '../../../static/images/ec956fe5b6f8.png',
                                  goodList: []
                              };

                              var arrCurData = JSON.parse(getCurdata);
                                for(var j=0; j<arrCurData.length; j++){
                                  let obj = {};
                                  obj.imgUrl = "https://wlwywlqk.cn/img/"+arrCurData[j].piclists[0];
                                  obj.text = arrCurData[j].name;
                                  obj.price = "￥"+arrCurData[j].price;
                                  newData.goodList.push(obj);
                                }
                              that.getCountData ++ ;
                              that.goodContent.push(newData);
                              Vue.nextTick(function() {
                                  commonUtil.isAllLoaded('#gt_scroll', function(){
                                  myScroll.refresh();
                                  self.maxScrollY += 43;
                                  // myScroll.scrollTo(0, self.maxScrollY + 35);
                                })
                              });
                            })
                        }
                    }
                });
            });
        });
      });
    },
    methods: {

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>  
  @import '../../styles/usage/page/index.scss';
  ul,li{
    list-style: none;
  }
  #gt_scroll{
    width: 100%;
    height: 100%;
    .scroll-wrap{
      width: 100%;
    }
  }
  header{
    @include flexbox();
  }

  @mixin spanNamePrice(){
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
        margin-bottom: 8px;
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
            @include spanNamePrice();
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
              padding: 10px 4px 4px 0;
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
      .good-content4{
        padding: 0;
        background: transparent;
        .goodtype-til{
          padding: 6px 0;
          margin-bottom: 5px;
          background: #FFF;
        }
        .good-list{
          padding: 0;
          .goodli-wrap{
            @include flexbox();
            @include flex(3);
            width: 100%;
            @include flex-direction(row);
            @include flex-wrap(wrap);
            li{
              background: #FFF;
              padding: 10px;
              width: 32%;
              margin: 0  2px 5px 3px;
              img{
                width: 100%;
              }
              @include spanNamePrice();
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
  .foot-more,.head{
    height: 35px;
    line-height: 35px;
    width: 100%;
    text-align: center;
    img{
      display: inline-block;
      width: 16px;
      transition: transform 150ms;
      -webkit-transition: transform 150ms;
    }
  }
  .down {
      transform: rotate(180deg) !important;
      -webkit-transform: rotate(180deg) !important;
  }
</style>
