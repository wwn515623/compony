$(function(){
	// if(localStorage.getItem("flag") == null){
	// 	$("#navlogin").html("登录/注册");
	// }else{
	// 	$("#navlogin").html(localStorage.getItem("flag")+"用户欢迎您！");
	// }
	//localStorage.clear();
	if(localStorage.getItem("flag")){
		$("#logout").css("display","block");
		$("#logout").click(function(){
			// localStorage.clear();
			localStorage.removeItem("username");
			localStorage.removeItem("flag");
			location.reload();
		})
		$("#navlogin").html(localStorage.getItem("username")+"用户欢迎您！");
	}else{
		$("#navlogin").html("登录/注册");
	}

})