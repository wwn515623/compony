	
	$(function(){
		$("#btnAgree").click(function() {
			if(checkTel()&&checkCode()&&checkPassord()&&checkRepassord()&&judgeRegister()){
				$("form").submit();
			}else{
				return false;
			}
		});
		$("#login").click(function(){
			if(username()&&password()&&checkCode()){
				$("form").submit();
			}else{
				return false;
			}
		})

	})

	// 表单验证
	// function checkInput(){
	// 	return checkCode()&&checkPassord()&&checkRepassord()&&checkTel()&&judgeRegister()&&judgeLogin();
	// }
	// 手机号
	function checkTel(){
		var regTel=/^[1]\d{10}$/;
		var tel=$('.telNum').val();
		if(!regTel.test(tel)){
			$('#remindTel').html('输入错误');
			$('#remindTel').addClass('error');
			return false;
		}else{
			$('#remindTel').html('输入正确');
			$('#remindTel').addClass('correct');
			return true;
		}
	}
	// 验证码
	function checkCode(){
		if($('#checkcode').val()!=$('#code').html() || $('#checkcode').val()==""){
			$('#remindCode').html('输入有误');
			$('#remindCode').addClass('error');
			return false;
		}else{
			$('#remindCode').html('输入正确');
			$('#remindCode').addClass('correct');
			return true;
		}
	}
	// 登录密码
	function checkPassord(){
		var regPassword=/^[\da-z]{6,16}$/i;
		if(!regPassword.test($(".paswd").val())){
			$('#remindPwd').html('密码有误');
			$('#remindPwd').addClass('error');
			// $('#password').focus();
			return false;
		}else{
			$('#remindPwd').html('输入正确');
			$('#remindPwd').addClass('correct');
			return true;
		}
	}
	// 确认密码
	function checkRepassord(){
		if($("#password").val()!=$("#repassword").val() ||$("#password").val()==''){
			$('#remindRepsw').html('密码有误');
			$('#remindRepsw').addClass('error');
			return false;
		}else{
			$('#remindRepsw').html('输入正确');
			$('#remindRepsw').addClass('correct');
			return true;
		}
	}

	// 注册
	function judgeRegister(){
		var tel = $("#tel").val();
		var password = $("#password").val();
		if(localStorage.getItem(tel)){
			$('#remindTel').html('已经被注册');
			$('#remindTel').addClass('error');
            return false;
		}else{
			localStorage.setItem(tel,password);
			return true;
		}
	}
	// 登陆
	function username(){
		var loginname = $("#loginname").val();
		var loginpwd = $("#loginpwd").val();
		if(loginname.trim()==""){
			$("#remindName").html("用户名不能为空");
			$("#remindName").addClass('error');
		}else{
			if(localStorage.getItem(loginname)==null){
				$("#remindName").html("该号码没有被注册");
				$("#remindName").addClass('error');
				return false;
			}else{
				$("#remindName").html("用户名正确");
				$("#remindName").addClass('correct');
				return true;
			}
		}	
	}

	function password(){
		var loginname = $("#loginname").val();
		var loginpwd = $("#loginpwd").val();
		if(localStorage.getItem(loginname)!=loginpwd){
			$("#remindPwd").html("密码不正确");
			$("#remindPwd").addClass("error");
			return false;
		}else{
			$("#remindPwd").html("密码正确");
			$("#remindPwd").addClass("correct");
			localStorage.setItem("flag",true);
			localStorage.setItem("username",loginname);
			return true;
		}
	}

