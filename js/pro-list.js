$("#suit").focus(function(){
	$(this).val("")
})
$("#suit").blur(function(){
	if($(this).val()==""){
		$(this).val("秋季套装  女")
	}
})

$("#higher").focus(function(){
	$(this).val("")
})
$("#higher").blur(function(){
	if($(this).val()==""){
		$(this).val("￥")
	}
})

$("#lower").focus(function(){
	$(this).val("")
})
$("#lower").blur(function(){
	if($(this).val()==""){
		$(this).val("￥")
	}
})