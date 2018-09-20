$(".up").focus(function(){
	$(this).css("background","none")
})
$(".up").blur(function(){
	if($(this).val()==""){
		$(this).css("background","url(img/top---search.png) 23px 10px no-repeat")
	}
})





//登录
var user=document.querySelectorAll(".container ul>li:first-child a")[0];
var logout=document.querySelectorAll(".container ul>li:nth-child(2) a")[0];
var p=document.querySelector(".container p");
var islogin=false;
var data=getUserData();
data.forEach(function(v,i) {
    if (v.login == true) {
        islogin = true;
        user.innerHTML =v.name;
    }
    logout.innerHTML = "退出";
    user.href="user.html";
    p.style.display="none";
});
if(islogin==false){
    user.innerHTML="登录";
    logout.innerHTML="免费注册";
    user.href="login.html";
    p.style.display="block";
}
logout.onclick=function() {
    if(this.innerHTML=="注册"){
        location.href="register.html";
    };
    if (this.innerHTML == "退出") {
        if (confirm("请确认是否要退出登录")) {
            data.forEach(function (v, i) {
                if (v.login == true) {
                    data[i].login = false;
                    renewUserData(data);
                }
            });
            user.innerHTML = "登录";
//          user.setAttribute("class", "current");
            logout.innerHTML = "免费注册";
            user.href="login.html";
            logout.href="javascript:void(0)";
//          $(".top_main>div>a").css("margin-right","0px")
            p.style.display="block";
        }
    }
};
function getUserData(){
    var arr=[];
    if(!localStorage.reg){
        arr=[];
    }
    else{
        arr=JSON.parse(localStorage.reg)
    }
    return arr;
}
function renewUserData(data){
    localStorage.user=JSON.stringify(data);
}