$("#textarea").focus(function(){
	$(this).val("")
})
$("#textarea").blur(function(){
	if($(this).val()==""){
		$(this).val("商品是否满意，来分享你的购物心得~")
	}
})