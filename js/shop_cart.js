
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



//商品数量
function shop_info() {
    var date= gets();
    $.each(date, function (index, value) {
        $(".get>a>p").html(value.shop_title);
        //价格
        $(".price").html(value.price);
        // 数量
        var cart_pr = value.price;
        $(".number").val(value.number);
        var num = $(".number").val();
        var sum = + num * cart_pr;
        $(".quantum").html(sum);
    });
    totals();
    saves(date);
}
shop_info();

//总价
function totals() {
    var sele_price = 0;
    var totals = 0;
    $(".total").html(sele_price);
    $(".btns ").each(function (i, v) {
        if ($(v).prop("checked")) {
            var price = parseInt($(v).siblings(".quantum").html());
            totals += price;
        }
        $(".total").html(totals);
    })
}
function reWrite() {
    var date = gets();
    $(".cart ul").empty();
    $.each(date, function (index, value) {
        $("<li></li>").attr('index', index).html(
        	    "<input type='checkbox' class='btns' value='' />" +
        	    "<div class='res'>"+
	        	    "<a href='pro-cente.html?"+value.id+"'>" +
	                "<img src='" + value.imgSrc + "'  width='91px' height='68px'/>\n" +
	                "</a>\n" +
        	    	"<div class='get'>"+
		        	    "<a href='pro-cente.html?"+value.id+"'>" +
		               	    "<p>"+value.shop_title+"</p>\n" + 
		                "</a>\n " +
		        	    "<p>七天无理由退换</p>\n" + 
		        	    "<p>满88元包邮</p>\n" + 
        	    	"</div>"+
        	    "</div>"+
        	
        	    "<div class='quotation'>"+
        	        "<p class='price'>"+value.price+"</p>\n" + 
        	        "<p>"+value.old_price+"</p>\n" + 
        	    "</div>"+
        	
        	    "<div class='sum'>"+
	        	    "<button class='reduce'>-</button>"+
	                "<input type='' class='number' value='"+value.number+"' />"+
	                "<button class='plus'>+</button>"+
        	    "</div>"+
        	    
        	    
        	    "<div class='quantum'>"+value.price * value.number+"<span>.00</span></div>"+
        	    "<div class='del'>"+
	        	    "<p class='delete'>删除</p>\n" + 
	        	    "<a href='order.html'>移入我的收藏</a></br>"+
        	    "</div>"
        ).appendTo(".cart ul")

    });
    //删除
    $(".delete").click(function () {
    	var bResult = window.confirm("确定删除？");
    	if(bResult){
    		var index=$(this).parent().parent().attr('index');
	        date.splice(index,1);
	        $(this).parent().parent().remove();
    	}
    	 saves(date);
	        totals();
    });
    saves(date);
}


$(function () {
	var date= gets();
    reWrite();
    var num = "";
    var len=$(".btns").length;
    $(".shop h3 span").html(len);
    //	全选
	bol=false
	$(".btn").click(function(){
		var le=$(".cart li>input[type='checkbox']:checked").length;
		if(bol){
			$(".btn").prop("checked",false)
			$(".btns").prop("checked",false)
			$(".on").html(0)
		}
		if(le<len){
			$(".btn").prop("checked",true)
			$(".btns").prop("checked",true);
			total=0
			bol=true;
			$(".on").html(len)
			totals()
		}
	})
//	单选
	var total = 0;
	var bo=false;
	$(".btns").click(function(){
		var le=$(".cart li>input[type='checkbox']:checked").length;
		if(len==le){
			$(".btn").prop("checked",true)
		}else{
			$(".btn").prop("checked",false)
		}
		if($("this").prop("checked",true)){
			bo=true
			if(bo){
				totals()
				$(".on").html(le)
			}else{
				$("this").prop("checked",false)
				bo=false
				totals()
			}
		}
	})
    
   	//数字验证
   	$(".number").keyup(function(){
   		$(this).val($(this).val().replace(/[^0-9.]/g, ''));
   	});
$(".number").change(function(){
		var s=/[\d]$/g;
		var qq=$(this).parent().siblings(".quotation").children(".price").html()
		if(!s.test($(this).val())||$(this).val()<=1){
			$(this).val(1)
			$(this).parent().siblings(".quantum").html(qq*$(this).val())
			totals()
		}else{
			$(this).parent().siblings(".quantum").html(qq*$(this).val())
			totals()
		}
	})
	
//	加
	$(".plus").click(function(){
			num=$(this).siblings(".number").val();
			num++;
			$(this).siblings(".number").val(num);
			var sub= num*$(this).parent().siblings(".quotation").children(".price").html();
			$(this).parent().siblings(".quantum").html(sub+".00");
			totals()
	}) 
	
    //减
    $(".reduce").click(function(){
		var num=$(this).siblings(".number").val();
		num--;
			if(num<=1){
			num=1;	
			$(this).siblings(".number").val(num);
			var sub= num*$(this).parent().siblings(".quotation").children(".price").text();
			$(this).parent().siblings(".quantum").html(sub+".00");
			totals()
		}else{
			$(this).siblings(".number").val(num);
			var sub= num*$(this).parent().siblings(".quotation").children(".price").text();
			$(this).parent().siblings(".quantum").html(sub+".00");
			totals()
		}
	})
}); 

//批量删除
$("#del").on("click",function () {
    var date=gets();
    var bResult = window.confirm("确定删除？");
    	if(bResult){
	        $(".btns").each(function () {
	            if($(this).prop("checked")){
	                var index=$(this).parents(".cart li").index();
	                $(this).parents(".cart li").remove();
	                if($(this).prop("checked")==1){
	                    date.splice(index,1);
	                }else{
	                    date.splice(index);
	                }
	                if(date==0){
	                	$(".btn").prop("checked",false)
	                	$(".shopp").html(0)
	                	$(".on").html(0)
	                }
	                saves(date);
	                totals();
	            }
	        });
        }
});
// 结算
function get() {
    var arr=[];
    if(localStorage.orlist==undefined){
        arr=[];
    }else{
        arr=JSON.parse(localStorage.orlist)
    }
    return arr;
}

function save(order) {
    localStorage.orlist=JSON.stringify(order);
};
$(".expense>a").on("click",function () {
    var flag = false;
    var date = gets();
    $(".btns").each(function (i,v) {
        if($(v).prop("checked")){
            flag=true;
            var order=get();
            var href=$(this).siblings(".res").children("a").attr("href");
            var hrefs=$(this).siblings(".res").children(".get").children("a").attr("href");
            var arr=href.split("");
            var a=arr.splice(0,15);
            var id=arr.join("");
            var comOrder={
                id:id,
                imgSrc:$(this).siblings(".res").children("a").children().attr("src"),
                order_title:$(this).siblings(".res").children(".get").children("a").children().html(),
                order_price:$(this).siblings(".quotation").children(".price").html(),
                order_number:$(this).siblings(".sum").children(".number").val(),
                order_sum:$(this).siblings(".quantum").html(),
            };
            order.push(comOrder);
            save(order)
        }
})
    if (flag == false) {
        alert("请先选择要结算的商品！");
    } else {
        location.href = "confirm_order.html";
    }
    saves(date);
    reWrite();
});