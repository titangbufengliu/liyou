//获取信息
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

//地址（开始）
function getData(){
	var newArr=[];
	if(!localStorage.address){
		newArr=[];
	}else{
		newArr=JSON.parse(localStorage.address)
	}
	return newArr;
}
function getSave(data){
	localStorage.address=JSON.stringify(data)
}

function dz() {
    var orders=getData();
    function creatnewLis(i,o){
    	var newLis="<li>" +
    	'<b></b>'+
        '<span>'+orders[i].name+'</span>'+
        '<span>'+orders[i].pro+''+orders[i].city+''+orders[i].area+''+orders[i].address+'</span>'+
        '<span>'+orders[i].tel+'</span>'+
        '<a class="add">设为默认地址</a>'+
        '<a href="address.html">编辑</a>'+
    	 "</li>"
    	 $(o).append(newLis);
    }
    for (var i = 0; i < orders.length; i++){
    	 creatnewLis(i,".info ul");
    }

$(".info li[i]").each(function () {
        var newName=$(".info li[i]").children("span").html();
        var newNames=$(".info li[i]").children("span:nth-child(4)").html();
        var address=$(".info li[i]").children("span:nth-child(3)").html();
        $(".sum h2+h2 span").html(newName);
        $(".sum h2+h2 span:last-child").html(newNames);
        $(".sum h2 span").html(address);
})

$("b").click(function(){
	for (var i = 0; i < $("b").length; i++) {
		$("b").css("background","url(img/co-b-bg.jpg) 1px -1px no-repeat")
	}
		$(this).css("background","url(img/co-b-bg2.jpg) 1px 0px no-repeat")
		$(".sum div h2:first-child span").html($(this).siblings("span:nth-child(3)").html())
		var sjr=$(this).siblings("span").html()
		var phone=$(this).siblings("span:nth-child(4)").html()
		$(".sum div h2:last-child span:first-child").html(sjr)
		$(".sum div h2:last-child span:last-child").html(phone)
})
$(".add").click(function(){
	for (var i = 0; i < $("b").length; i++) {
		$("b").css("background","url(img/co-b-bg.jpg) 1px -1px no-repeat")   
	}
		$(this).siblings("b").css("background","url(img/co-b-bg2.jpg) 1px 0px no-repeat")
		$(".sum div h2:first-child span").html($(this).siblings("span:nth-child(3)").html())
		var sjr=$(this).siblings("span").html()
		var phone=$(this).siblings("span:nth-child(4)").html()
		$(".sum div h2:last-child span:first-child").html(sjr)
		$(".sum div h2:last-child span:last-child").html(phone)
})
}
dz()
//地址（结束)
function cWrite() {
    var order=get();
    console.log(order)
    function creatnewLi(i,z){
    	var newLi="<li>" +
    	'<a href="pro_cente.html?'+order[i].id+'">'+
            '<img src="'+order[i].imgSrc+'" height="104" width="134"/>'+
        '</a>'+
    	
    	'<div class="bought">'+
            '<a href="pro_details.html?'+order[i].id+'">'+order[i].order_title+'</a>'+
            '<p><img src="img/buy-2.png" alt="" />七天无理由退换</p>'+  
            '<p><img src="img/buy-3.png" alt="" />满88元包邮</p>'+
        '</div>'+
    	'<p>0.18</p>'+
    	'<p>'+order[i].order_price+'</p>'+
    	'<p>'+order[i].order_number+'</p>'+
    	'<p>'+order[i].order_sum+'</p>'+
    	 "</li>"
    	 $(z).append(newLi);
    }
    for (var i = 0; i < order.length; i++){
    	 creatnewLi(i,".buy ul");
    }
    var numArr=[];
    $(".subtotal").each(function () {
        var a=parseInt($(this).html());
        numArr.push(a);
    });
    var sum=0;
    for(var i=0;i<numArr.length;i++){
        sum+=numArr[i];
    }
    var n=numArr.length;
    var newSum="￥"+sum+".00";
    var num=parseInt($(".reduce").html());
    var newNum=(sum-num);
    $(".aa").html(n);
    $(".total span:nth-child(3)").html(newSum);
    $(".zj").html(newNum);
    if($(".aa").html()==0){
        $(".zj").html("￥0.00");
    }
    save(order);
}
cWrite();
//确认支付
function getToOrder() {
    var dataToOrder=[];
    if(localStorage.toOrder==undefined){
        dataToOrder=[];
    }else{
        dataToOrder=JSON.parse(localStorage.toOrder)
    }
    return dataToOrder;
}
function saveToOrder(orderData) {
    localStorage.toOrder=JSON.stringify(orderData);
}

$(".submit").on("click",function () {
    var orderData=getToOrder();
    $(".main .list li").each(function (i,v) {
        var href=$(".main .list li").eq(i).children().children().attr("href");
        var arr=href.split("");
        var a=arr.splice(0,17);
        var id=arr.join("");
        var imgSrc=$(".main .list li").eq(i).children().children().children().attr("src");
        var name=$(this).children(".goods").find("a+a p").html();
        var number=$(this).children(".number").html();
        var te=$(".sum h2+h2").children().html();
        var tl=$(".sum h2+h2 span:last-child").html();
        var tel=te+tl;
        var nSum=$(this).children(".subtotal").html();
        function getNowFormatDate() {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes();
            return currentdate;
        }
        
        var newDate=getNowFormatDate();
        var oData={
            id:id,
            imgSrc:imgSrc,
            title:name,
            number:number,
            tel:tel,
            sum:nSum,
            date:newDate
        };
        orderData.push(oData);
    });
    saveToOrder(orderData);
    if($(".total span").html()==0){
        alert("没有商品");
    }else{
    var p=$(".zj").html();
    var nName=$(".sum h2:last-child span").html()+$(".sum h2:last-child span:last-child").html();
    var site=$(".sum h2 span").html();
    var info=nName+site;
    localStorage.setItem("money",p);
    localStorage.setItem("names",info);
    location.href="pay.html";
    }
});

    //默认地址
//  $(".info li[index]").each(function () {
//          var newName=$(".info li[index]").children("span").html();
//	        var newNames=$(".info li[index]").children("span:nth-child(4)").html();
//	        var address=$(this).children("span:nth-child(3)").html();
//          $(".sum h2+h2 span").html(newName);
//          $(".sum h2+h2 span:last-child").html(newNames);
//          $(".sum h2 span").html(address);
//  })
//  $(".info li[index]").click(function () {
//    		var newName=$(".info li[index]").children("span").html();
//	        var newNames=$(".info li[index]").children("span:nth-child(4)").html();
//	        var address=$(this).children("span:nth-child(3)").html();
//          $(".sum h2+h2 span").html(newName);
//          $(".sum h2+h2 span:last-child").html(newNames);
//          $(".sum h2 span").html(address);
//  });
//  //删除
//  $(".consignee li h6 span").click(function () {
//  	var datas=getsData();
//      var index=$(this).parent().parent().attr('index');
//      datas.splice(index,1);
//      console.log(datas.splice(index,1))
//      $(this).parent().parent().remove();
//      savesData(datas);
//      sWrite();
//  });
//  savesData(datas);
//}
//sWrite();

//localStorage.orlist="" 清空orlist缓存
