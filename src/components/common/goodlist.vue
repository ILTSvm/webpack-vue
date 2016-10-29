<template>
	<div id = "good-container">
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
			<div v-if = "loading" class = "loading">loading...</div>
		</ul>
					
	</div>
</template>
<script>
import IScroll from "iscroll";
import common from "../../scripts/common/commonUtil.js"
export default {
	name:"goodlists",
    data() {
      return {
        goodlist:[],
        loading:false,
        refresh:false,
      }
    },
    created: function() {
        var that = this;
      		this.$http.get('https://wlwywlqk.cn/goods/getData?pageindex='+Math.ceil(Math.random()*50)+'&pagesize=10')
        .then((res) => {
          this.goodlist = JSON.parse(res.data);
          this.$nextTick(()=>{
		      var myIscroll = new IScroll('#good-container',{click: true,mouseWheel: true });
		      myIscroll.on('scrollEnd', function(){
		      	that.loading = true;
		      	this.refresh();
		      	var timer = setTimeout(function(){	
				common.isAllLoaded('.goodlist',function(){
					 				that.$http.get('https://wlwywlqk.cn/goods/getData?pageindex='+Math.ceil(Math.random()*200)+'&pagesize=6')
		        	.then((res) => {
		        	 var newData = JSON.parse(res.data)
		             that.goodlist = that.goodlist.concat(newData);
		             that.loading = false;
			         that.$nextTick(()=>{
			             myIscroll.refresh();
			             })
			          })
				})

		      		},2000)
	
	            })
		    })

        })
	},
//   mounted(){
//      new IScroll('.goodlists',{click:true})
//  }
}
</script>
<style lang = "scss" scoped>
  @charset "utf-8";
  @import "../../styles/usage/core/reset.scss";
  #good-container{
/*	  @include flexbox();	*/
      @include flex();
      width:100%;
      overflow:hidden;
      
      /*@include flex-direction(column);*/
      .goodlists{
          flex:none;
          width:100%;
          @include flexbox();
          @include flex-wrap(wrap);
          background:#eeeeee;
          padding-bottom:10px;
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
          .loading{
          	height:50px;
          	width:100%;
          	line-height:50px;
          	text-align: center;
          	font-size:.20rem;
          }
      }
  }
</style>