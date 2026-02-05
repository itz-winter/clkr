function ajax(url,callback){
	/*AJAX function by http://www.mediatemple.net/blog/2006/05/09/javascript-ajax-tutorial/
	var ajaxRequest;
	try{ajaxRequest = new XMLHttpRequest();} catch (e){try{ajaxRequest=new ActiveXObject('Msxml2.XMLHTTP');} catch (e) {try{ajaxRequest=new ActiveXObject('Microsoft.XMLHTTP');} catch (e){alert("Something broke!");return false;}}}
	if (callback){ajaxRequest.onreadystatechange=function(){if(ajaxRequest.readyState==4){callback(ajaxRequest.responseText);}}}
	ajaxRequest.open('GET',url+'&nocache='+(new Date().getTime()),true);ajaxRequest.send(null);
	*/
	var ajaxRequest;
	if (window.XMLHttpRequest) {
		ajaxRequest = new XMLHttpRequest();
	} else {
		ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (callback) {
		ajaxRequest.onreadystatechange = function() {
			if (ajaxRequest.readyState == 4) {
				callback(ajaxRequest.responseText);
			}
		}
	}
	ajaxRequest.open('GET', url + '&nocache=' + (new Date().getTime()), true);
	ajaxRequest.send(null);
}