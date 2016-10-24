
let _cookie = {
	/**
	 * 
	 * @param {Str} cookieName
	 * @param {Object} dataJson
	 * @param {Number} expiredays
	 */
	setCookie(cookieName,dataJson,expiredays){
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
	    date.setDate(date.getDate()+expiredays);

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
	setGood(dataJson,expiredays){
		this.setCookie("goods",dataJson,expiredays);
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
	}
	
}

export default _cookie;

