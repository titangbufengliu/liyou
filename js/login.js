function getDatas(){
	var arr=[];
	if(!localStorage.reg){
		arr=[]
	}else{
		arr=JSON.parse(localStorage.reg)
	}
	return arr;
}
function getSave(data){
	localStorage.reg=JSON.stringify(data)
}

$("#phone").focus(function(){
	if($(this).val()=="输入账号"){
		$(this).val("")
	}
})

$("#phone").blur(function(){
		var data=getDatas();
		var bol=false;
		if($(this).val!=""){
			data.forEach(function(v,i){
				if(v.name==$("#phone").val()){
					bol=true;
					return;
			}
			})
		}
		if($(this).val()==""){
		$(this).val("输入账号")
	}else if(bol==false){
		alert("用户未注册")
		$(this).val("输入账号")
	}
})

$("#password").focus(function(){
	if($(this).val()=="输入密码"){
		$(this).val("")
		$(this).attr("type","password")
	}
})
$("#password").blur(function(){
	var data=getDatas();
	var bols=false
	if($("#password").val!=""){
		data.forEach(function(v,i){
			if(v.pass==$("#password").val()&&v.name==$("#phone").val()){
					bols=true;
					return;
			}
		})
	}
	if($(this).val()==""){
		$(this).val("输入密码")
		$(this).attr("type","text")
	}else if(bols==false){
		alert("密码输入错误")
		$(this).val("输入密码")
		$(this).attr("type","text")
	}
	
	
	
})

$("#code").focus(function(){
	if($(this).val()=="输入验证码"){
		$(this).val('')
	}
})
$("#code").blur(function(){
	if($(this).val()==""){
		$(this).val("输入验证码")
	}
})


$(".login").click(function(){
	if($("#phone").val()==""||$("#phone").val()=="输入账号"){
		alert("输入用户名")
	}else if($("#password").val()==""||$("#password").val()=="输入密码"){
		alert("输入密码")
	}else if($("#code").val()!=sz){
		alert("验证码错误")
	}else {
		var data=getDatas();
    	var isloginsuccess=false;
		data.forEach(function(v,i){
			if((v.name==$("#phone").val()||v.tel==$("#phone").val())&&v.pass==$("#password").val()){					
				data.forEach(function(v,i){
                    v.login=false;
               });
        isloginsuccess=true;
        data[i].login=true;
        getSave(data);
		alert ("登录成功")
		$("#phone").val("输入账号")
		$("#password").val("输入密码")
		$("#code").val("输入验证码")
		location.href = "index.html";
		return;
	}
	})
		if(isloginsuccess==false){
             alert("密码错误");
             $("#password").type="text";
             $(this).val("输入密码")
         }
	}
})






	var can=document.getElementById("can");
	var aa=can.getContext("2d")
	
	var pic=new Image();
	pic.src="img/bj.gif"
	document.getElementsByClassName("codes")[0].appendChild(pic)
	var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,]	
	var sz=""
	
	for (var i = 0; i < 4; i++) {
			x=Math.floor(Math.random()*20)
			var r=Math.floor(Math.random()*35)
			aa.font="36px 宋体"
			x=x+Math.floor(Math.random()+15)+i*20
			y=Math.floor(Math.random()+38)
			aa.fillText(arr[r],x,y)
			sz+=arr[r];
	}
$(".codes").click(function(){
		sz=""
		aa.clearRect(0,0,118,48)
		for (var i = 0; i < 4; i++) {
			x=Math.floor(Math.random()*20)
			var r=Math.floor(Math.random()*35)
			aa.font="36px 宋体"
			x=x+Math.floor(Math.random()+15)+i*20
			y=Math.floor(Math.random()+38)
			aa.fillText(arr[r],x,y)
			sz+=arr[r];
		}
	})