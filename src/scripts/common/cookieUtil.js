
let _cookie = {
	/**
	 * 
	 * @param {Str} cookieName
	 * @param {Object} dataJson
	 * @param {Number} expiredays
	 */
	setCookie(cookieName,dataJson){
		if(dataJson){
			if(Object.prototype.toString.call(dataJson)=="[object Object]"){
				var goodValue = JSON.stringify(dataJson);
			}else{
				console.error("the value must be an object");
			}
		}else{
			console.error("the value can`t be empty");
		}

		if(this.getCookie(cookieName)){
	
			var count = 0; 
			var cookieValue = this.getCookie(cookieName);

	
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
	
		}else{
			cookieValue = goodValue;
		}
	    var date=new Date();
	    date.setDate(date.getDate()+30);

 		document.cookie=cookieName+"="+encodeURIComponent(cookieValue)+";expires="+date;
	},
	/**
	 * 
	 * @param {Str} cookieName
	 */
	getCookie(cookieName){
		var cookieValue="";
	    var strCookies=document.cookie;
		var arrCookies=strCookies.split("; "); 
	    for(var i=0;i<arrCookies.length;i++){
	   
	        var arrItem=arrCookies[i].split("=");
	        if(arrItem[0]==cookieName){
	            cookieValue=arrItem[1];
	        }
    	}

    return decodeURIComponent(cookieValue);
	},
	/**
	 * 
	 * @param {Str} goodName
	 * @param {Object} dataJson
	 * @param {Number} expiredays
	 */
	setGood(dataJson){
		this.setCookie("goods",dataJson);
	},
	/**
	 * 
	 * @param {Str} goodName
	 */
	getGood(){
		var goodInfo = this.getCookie("goods");
		if(goodInfo == ""){
			return false;
		}else{
			var goodArr = goodInfo.split("&&&");
			var goodinfo = [];
			for(var i = 0;i<goodArr.length;i++){
				goodinfo[i] = JSON.parse(goodArr[i]);
			}
			return goodinfo;
		}
	},
	/**
	 * 
	 * @param {Str} goodName
	 */
	removeCookie(cookieName){
		setCookie(cookieName,{},-1);
	},
	/**
	 * @param {Str}goodId
	 */
	removeGood(goodId){
	    var goodInfo = this.getCookie("goods");
	    if(goodInfo == ""){
	    	removeCookie("goods");
			return false;
		}else{
			var oldGoodArr = goodInfo.split("&&&");
			var goodinfo = [];
			for(var i = 0;i<oldGoodArr.length;i++){
				goodinfo[i] = JSON.parse(oldGoodArr[i]);
				if(goodinfo[i]._id==goodId){
					oldGoodArr.splice(i,1);
					i--;
				}
			}
			var newGoodStr = oldGoodArr.join("&&&");
			var date=new Date();
	    	date.setDate(date.getDate()+30);
			document.cookie="goods="+newGoodStr+";expires="+date;
		}
	}
	
}

export default _cookie;

