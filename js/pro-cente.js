$.ajax({
    type: "GET",//请求方式
    url: "js/new.json",//地址，就是json文件的请求路径
    dataType: "json",//数据类型可以为 text xml json  script  jsonp
    success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
    	console.log(result)
        result.forEach(function (v) {
            if(v.id==location.search.slice(1)) {
                $(".small>img").attr("src", v.src);
                $(".big img").attr("src", v.src);
                $(".title").html(v.info);
                $(".instance span>p").html("￥"+v.oldprice);
                $(".price").html("￥"+v.price);
            }
       });
    }
});

$(".oppo").click(function(){
	$(".minutia").css("display","block")
	$(".appraises").css("display","none")
	$(".page").css("display","none")
	$(".current").removeClass("current")
	$(this).attr("class","current")
})
$(".ins").click(function(){
	$(".minutia").css("display","none")
	$(".appraises").css("display","block")
	$(".page").css("display","block")
	$(".oppo").attr("class","current")
	$(".current").removeClass("current")
	$(this).attr("class","current")
})





//商品添加和减少
var t=$("#number");
function total() {
    var num=$("#number").val();
    var pr = $(".price").html();
    var sum=num*pr;
    $(".price").html(sum);
}
//数量增加操作
$(".plus").click(function(){
    t.val(Math.abs(parseInt(t.val()))+1);
//  total();
});
//数量减少操作
$(".reduce").click(function(){
    if (parseInt(t.val())==1){
        t.val();
    }else{
        t.val(Math.abs(parseInt(t.val()))-1);
//      total();
    }
});

//数量的验证
$("#number").keyup(function(){
	$(this).val($(this).val().replace(/[^0-9.]/g, ''));
})
$("#number").blur(function(){
	if($(this).val()==""){
		$(this).val("1")
	}
//	total();
});

   function addShopcart(){
	var login=document.querySelector(".container>ul>li:first-child a")
	  if(login.innerHTML=="登录"){
		    alert("请先登录");
		    location.href="login.html";
		    return false;
		}else{
			return true;
		}
}
   
// 立即购买
$(function () {
    function get() {
        var arr = [];
        if (localStorage.orlist == undefined) {
            arr = [];
        } else {
            arr = JSON.parse(localStorage.orlist)
        }
        return arr;
    }
    function save(order) {
        localStorage.orlist = JSON.stringify(order);
    };
// 跳转|立即购买
    $(".buy").click(function () {
	        var order = get();
	        var num = $("#number").val();
	        var name = $('.title').html();
	        var picSrc = $('.small>img').attr('src');
	        var pr = $(".price").html().slice(1);
	        var btn=$(".btn").html();
	        var oldprice=$(".instance span>p").html().slice(1);
	        var id=location.search.slice(1);
	        var comBuy = {
	            id:id,
	            imgSrc:picSrc,
	            order_title:name,
	            order_price:pr,
	            order_number:num,
	            order_sum:pr * num,
	            old_price:oldprice,
	            type:btn
	        };
	        order.push(comBuy);
	        save(order);
	        if(addShopcart()){
	        	location.href = "confirm_order.html";
    	}
    });
    
})
// 购物车数据
$(function () {
    function gets() {
        var cart=[];
        if(localStorage.tdlist==undefined){
            cart=[];
        }else{
            cart=JSON.parse(localStorage.tdlist)
        }
        return cart;
    }
    function saves(date){
        localStorage.tdlist=JSON.stringify(date);
    };
// 添加商品至购物车
    $(".car").click(function () {
    	var bols=false
    	if(addShopcart()){
	        var date=gets();
	        var num=$("#number").val();
	        var pr=$(".price").html().slice(1);
	        var name=$(".title").html();
	        var imgSrc = $('.small>img').attr('src');
	        var btn=$(".btn").html();
	        var id=location.search.slice(1);
	        var oldprice=$(".instance span>p").html().slice(1);
	        var shop={
	            id:id,
	            imgSrc:imgSrc,
	            shop_title:name,
	            number:num,
	            price:pr,
	            type:btn,
	            old_price:oldprice,
	            lg:date.length+1,
	        };
	        date.push(shop);
	        saves(date);
	        alert("已成功加入购物车");
	        bols=true
     	}
    });
});