


function getDatas(){
	var arr=[];
	if(!localStorage.reg){
		arr=[]
	}else{
		arr=JSON.parse(localStorage.reg)
	}
	return arr;
}

function getSave(){
	var nameval=user.val();
    var passval=pwd.val();
    var telval=tel.val();
    var data=getDatas();
    data.push({"name":nameval,"pass":passval,"tel":telval,"login":false});
    localStorage.reg=JSON.stringify(data);
}




var user=$("#show");		//用户名	
var pwd=$("#password");		//密码
var pwds=$("#confirm");		//确认密码
var code=$("#code");		//短信验证码	
var tel=$("#phone");		//手机号
var inputcode=$("#validate");		//验证码
var li=document.querySelectorAll(".list li");
var p=document.createElement("P");
p.style.cssText="position: absolute;color:#dd127b;left:160px"
$("#show").focus(function(){
	if($(this).val()=="6-18位字母组合"){
		$(this).val("");
		li[0].appendChild(p)		
		p.innerHTML="账户名/登录名为6-18位中英文组合"
	}
})
$("#show").blur(function(){
	var userreg=/^[a-zA-Z0-9_-]{6,18}$/g;
	var vals=$("#show").val();
	if(!userreg.test(vals)){
		li[0].appendChild(p)		
		p.innerHTML="账户名/登录名格式错误"
		$(this).val("6-18位字母组合");
	}else if($(this).val().length>6||$(this).val().length<18){
		p.remove()
		var data=getDatas()
		data.forEach(function(v){
			if($("#show").val()===v.name){
				alert("用户名已存在")
				$("#show").val("6-18位字母组合")
			}
		})
	}
})

$("#password").focus(function(){
	if($(this).val()=="6-16位密码，区分大小写"){
		$(this).val("");
		li[1].appendChild(p)		
		p.innerHTML="6-16位密码，区分大小写"
		$(this).attr("type","password")
	}
})

$("#password").blur(function(){
	var pwdReg=/^[0-9A-Za-z]{6,16}$/;
	var value=$('#password').val();
	if(!pwdReg.test(value)){
		li[1].appendChild(p)		
		p.innerHTML="密码格式不正确"
		$(this).val("6-16位密码，区分大小写")
		$(this).attr("type","text")
	}else if($(this).val().length>6||$(this).val().length<16)
	p.remove()
})
	


$("#confirm").focus(function(){
	if($(this).val()=="再次输入密码"){
		$(this).val("");
		$(this).attr("type","password")
	}
})
$("#confirm").blur(function(){
	if($(this).val()==""){
		li[2].appendChild(p)		
		p.innerHTML="密码输入不一致"
		$(this).val("再次输入密码")
		$(this).attr("type","text")
	}else if($(this).val()!=$("#password").val()){
				li[2].appendChild(p)		
				p.innerHTML="密码输入不一致"
				$(this).val("再次输入密码")
				$(this).attr("type","text")
	}
})

$("#validate").focus(function(){
	if($(this).val()=="请输入验证码"){
		$(this).val("");
	}
})
$("#validate").blur(function(){
	if($(this).val()==sz){
		p.remove()
		$(this).val()==sz
	}else {
		li[3].appendChild(p)		
		p.innerHTML="验证码错误"
		$(this).val("请输入验证码")
	}
})

$("#phone").focus(function(){
	if($(this).val()=="11位手机号"){
		$(this).val("");
	}
})

$("#phone").blur(function(){
	var reg=/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
	var tel=$("#phone").val();
	if(!reg.test(tel)){
		li[4].appendChild(p)		
		p.innerHTML="手机号格式错误"
		$(this).val("11位手机号")
	}else if($(this).val().length=11){
		p.remove()
		var wait=60;
$("#house").click(function(){
	time(this);
	$("#code").focus(function(){
	if($(this).val()=="输入短信验证码"){
		$(this).val("");
	}
}) 
$("#code").blur(function(){
	var cod=/[\d]{6}$/g;
	var co=$(this).val();
	if(!cod.test(co)){
		li[5].appendChild(p)		
		p.innerHTML="验证码错误"
		$(this).val("输入短信验证码")
	}else if($(this).val().length==6)
	p.remove()
})
})
function time(o){
	if(wait==0){
		o.removeAttribute("disabled");
		o.innerHTML="获取验证码";
		wait=60;
	}else{
		o.setAttribute("disabled",true);
		o.innerHTML="重新发送("+wait+")";
		wait--;
		setTimeout(function(){
			time(o)
		}, 1000)
	}
}
		
	}
})


var bol=false;
$(".ck").click(function(){
	bol=!bol
	if(bol){
		$(".dui").show()
		
	}else{
		$(".dui").hide()
	}
})




$("#login").click(function(){
	if($("#show").val()=="6-18位字母组合"||$("#show").val()==""){
		alert("用户名不能为空")
	}else
	if($("#password").val()=="6-16位密码，区分大小写"||$("#password").val()==""&&$("#show").val()!=""){
		alert("密码不能为空")
	}else
	if($("#confirm").val()=="再次输入密码"||$("#again").val()==""&&$("#again").val()!=""){
		alert("密码输入不一致")
	}else
	if($("#validate").val()=="请输入验证码"||$("#validate").val()==""&&$("#password").val()!=""){
		alert("验证码不能为空")
	}else
	if($("#phone").val()=="11位手机号"||$("#phone").val()==""&&$("#validate").val()!=""){
		alert("手机号不能为空")
	}else
	if($("#code").val()=="输入短信验证码"||$(".code").val()==""&&$(".code").val()!=""){
		alert("请输入验证码")
	}else
	if(bol==false){
		alert("请阅读并同意条款")
	}else{
		getSave()
		alert("注册成功，即将跳转到登录页面")
		location.href = "login.html";
	}
	
	
	
})
//删除所有缓存
//localStorage.reg=""
