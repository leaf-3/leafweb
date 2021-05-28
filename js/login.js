function userlogin() {
	$.getJSON('./js/logjson.js',function(data){
		console.log(data);
		var username=$("input[name='username']").val();
		var us_password=$("input[name='us_password']").val();
		console.log(username+','+us_password);
		if(username==data[0].account && us_password==data[0].password){
			sessionStorage.setItem('user',data[0].username);
			sessionStorage.setItem('account',data[0].account);
			window.location.href="usercounter.html";
		}else if(username!=data[0].account){
			$("input[name='username']").after('<i class="layui-icon layui-icon-face-cry err"></i>');
			setTimeout(function(){
				$("input[name='username']+i").remove();
				console.log("remove");
			},3000);
			
		}else if(us_password!=data[0].password){
			$("input[name='us_password']").after('<i class="layui-icon layui-icon-face-cry err"></i>');
		}
	});
}
function adminlogin() {
	$.getJSON('./js/logjson.js',function(data){
		console.log(data);
		var account=$("input[name='account']").val();
		var ad_password=$("input[name='ad_password']").val();
		console.log(account+','+ad_password);
		if(account==data[1].account && ad_password==data[1].password){
			sessionStorage.setItem('admin',data[1].username);
			sessionStorage.setItem('aacount',data[1].account);
			window.location.href="useradmin.html";
		}else if(account!=data[1].account){
			$("input[name='account']").after('<i class="layui-icon layui-icon-face-cry err"></i>');
			
		}else if(ad_password!=data[1].password){
			$("input[name='ad_password']").after('<i class="layui-icon layui-icon-face-cry err"></i>');
		}
	});
}