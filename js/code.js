$(function(){
	// 用户注册获取验证码
	$("#btncode").click(function(){
		$("#code").show();
		// 随机获取验证码
		var str = [];
		var str1 = "";
		for(var i = 0;i < 100; i++){
			if(i >= 48 && i <= 48 + 9 || i >= 65 && i <= 65 + 25){
				str.push(String.fromCharCode(i));
			}
		}
		for(var i = 0;i<4;i++){
			var j = Math.floor(Math.random()*36);
			str1+=str[j];
		}
		$("#code").html(str1);


		$("#btncode").attr("disabled", true);
		$("#btncode").css("opacity","0.5");

		// 获取验证码倒计时
		clearInterval();
		var timer = setInterval(ft,1000);
		var i = 2;
		$("#btncode").val(i + 1+"秒可重新获取验证码");
		function ft(){
			$("#btncode").val(i+"秒可重新获取验证码");
			i--;
			if(i == -1){
				clearInterval(timer);
				$("#btncode").attr("disabled", false);
				$("#btncode").css("opacity","1");
				$("#btncode").val("获取验证码");
			}
		}
		
	});
})
