/**
 * Created by wgz on 2016/10/23.
 * 封装cookie,仅用于前端学习购物车列表页之间的传值
 */

var _cookie = {
	/**
	 * 
	 * @param {Str} cookieName
	 * @param {Object} dataJson
	 * @param {Number} expiredays
	 */
	setCookie:function(cookieName,dataJson,expiredays){
		if(dataJson){
			if(Object.prototype.toString.call(dataJson)=="[object Object]"){
				var goodValue = JSON.stringify(dataJson);
			}else{
				console.error("the value must be an object");
			}
		}else{
			console.error("the value can`t be empty")
		}

		if(this.getCookie(cookieName)){
			//判断cookie内是否存在此cookie
			var count = 0; 
			var cookieValue = this.getCookie(cookieName);

			//获取之前的cookie进行匹配
			var oldCookieArr = cookieValue.split("&&&");

			for(var i = 0;i<oldCookieArr.length;i++){
				var goodinfo = JSON.parse(oldCookieArr[i]);
				if(dataJson._id == goodinfo._id){
					oldCookieArr[i]=JSON.stringify(dataJson);
					cookieValue = oldCookieArr.join("&&&");
				}else{
					count++;
				}
			}
			if(count==oldCookieArr.length){
				cookieValue = cookieValue+"&&&"+goodValue;
			}
			//与现有的cookie进行拼接
		}else{
			cookieValue = goodValue;
		}
	    var date=new Date();
	    date.setDate(date.getDate()+expiredays);
	    //加码加密
 		document.cookie=cookieName+"="+encodeURIComponent(cookieValue)+";expires="+date;
	},
	/**
	 * 
	 * @param {Str} cookieName
	 */
	getCookie:function(cookieName){
		var cookieValue="";
	    var strCookies=document.cookie;
	    //将获取的cookie分隔
	    var arrCookies=strCookies.split("; "); 
	    for(var i=0;i<arrCookies.length;i++){
	    	//将分隔下来的数组进行遍历，匹配cookieName
	        var arrItem=arrCookies[i].split("=");
	        if(arrItem[0]==cookieName){
	        	//获得cookieName所对应的value;
	            cookieValue=arrItem[1];
	        }
    	}
	    //解码
    return decodeURIComponent(cookieValue);
	},
	/**
	 * 
	 * @param {Str} goodName
	 * @param {Object} dataJson
	 * @param {Number} expiredays
	 */
	setGood:function(dataJson,expiredays){
		this.setCookie("goods",dataJson,expiredays);
	},
	/**
	 * 
	 * @param {Str} goodName
	 */
	getGood:function(){
		var goodInfo = this.getCookie("goods");
		var goodArr = goodInfo.split("&&&");
		var goodinfo = [];
		for(var i = 0;i<goodArr.length;i++){
			goodinfo[i] = JSON.parse(goodArr[i]);
		}
		return goodinfo;
	},
	/**
	 * 
	 * @param {Str} goodName
	 */
	removeCookie:function(goodName){
		
	}
}


//删除某个cookie
function removeCookie(name){
    setCookie(name,"",-1);
}

//增删改查
