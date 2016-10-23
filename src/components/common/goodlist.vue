<template>
	<div id = "good-container">
		<router-view></router-view>
		<ul class = "goodlists">
			<li  class =  "goodinfo" v-for = "good in goodlist">
				<img :src = "'https://wlwywlqk.cn/img/'+good.piclists[0]">
				<router-link :to="{ name: 'Detail', params: { id: good._id }}"></router-link>
				<p>{{good.name}}</p>
				<span>¥{{good.price}}</span>
				<div class = "ico">
				    <div class = "hot"><figcaption>HOT</figcaption></div>
				    <div class = "car"><figcaption class = "car">自营</figcaption></div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import IScroll from "IScroll";
export default {
	name:"goodlists",
    data() {
      return {
        goodlist:[],
      }
    },
    created: function() {
      var that = this;
      this.$http.get('https://wlwywlqk.cn/goods/getData?pageindex=1&pagesize=10')
        .then((res) => {
          this.goodlist = JSON.parse(res.data);
          setTimeout(function(){
            new IScroll('.goodlists');
          }, 500);
//
//        mySwiper = new Swiper("#index-swiper", {
//          onSlideChangeStart: function(){
//            that.curIndex = mySwiper.activeIndex;
//          }
//        });
        })
    }
}
</script>
<style lang = "scss" scoped>
  @charset "utf-8";
  @import "../../styles/usage/core/reset.scss";
  #good-container{

      @include flex(1);
      width:100%;
      @include flexbox();
      @include flex-direction(column);
      .goodlists{
          @include flex(1);
          width:100%;
          @include flexbox();
          @include flex-wrap(wrap);
          background:#CCCCCC;
          li{
            position: relative;
            @include flexbox();
            @include flex-direction(column);
            width:50%;
            height:280px;
            box-sizing: border-box;
            padding:10px 10px 0 10px;
            &:nth-child(odd){
                padding-right:5px;
            }
            &:nth-child(even){
                padding-left:5px;
            }
            img{
                height:150px;
                width:100%;
                background: #fff;
            }
            a{
                width:100%;
                height:100%;
                position:absolute;
                top:0;
                left:0;
            }
            p{
                width:100%;
                height:40px;
                line-height: 40px;
                font-size:14px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                background:#fff;
                box-sizing: border-box;
                padding-left:10px;
            }
            span{
                @include flex(1);
                width:100%;
                background:#fff;
                color:#710909;
                font-weight: bold;
                box-sizing: border-box;
                padding-left:10px;
            }
            .ico{
                @include flexbox();
                @include flex(1);
                background:#fff;
                width:100%;
                .hot{
                    width:63%;
                    color:#fff;
                    figcaption{
                       margin-left:5px;
                       width:40%;
                       text-align: center;
                       background:#710909;
                       border-radius: 10px;
                       font-weight: bold;
                    }
                }
                .car{
                    width:37%;
                    color:#000;
                    figcaption{
                        text-align: center;
                        width:80%;
                        border: 1px solid #000;
                        background:#0095CC;
                        border-radius: 4px;
                    }
                }
            }
          }
      }
  }
</style>