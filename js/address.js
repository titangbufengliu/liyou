	var savebol=true;
	if(!localStorage.getItem("index")){
		localStorage.setItem("index",1);
	}
	
	function getData(){
		var arr=[];
		if(!localStorage.address){
			arr=[];
		}else{
			arr=JSON.parse(localStorage.address)
		}
		return arr;
	}
	function getSave(data){
		localStorage.address=JSON.stringify(data)
	}
	
	var bol=true;	
//遍历数据 数据的插入
	function adds(){
		$(".listing>ul li:not(.listing>ul li:first .listing>ul li:last)").remove();
		var data=getData()
		
		$.each(data,function(i,v){
				$(".listing ul").append(`<li>
				<div>
					<span>`+v.name+`</span>
					<span class="contact">`+v.tel+`</span>
					<p>`+v.pro+`&nbsp`+v.city+`&nbsp`+v.area+`&nbsp;`+v.address+`</p>
				</div>
				<div>
					<a class="fir">默认地址</a>
					<a class="edit">修改</a>
					<a class="delete">删除</a>
					<input type="hidden" num="`+v.index+`" />
				</div>
			</li>`);
		})
				//编辑
				
			$(".edit").click(function(){
				savebol=false;
		        var s=$(this).parents("li").find("input[type=hidden]").attr("num");
		        var arr=getData();
		        arr.forEach(function(el){
		        	if(el.index==s){
		        		$("#geetr").val(el.name)
		        		$("#province").val(el.pro)
		        		$("#city").html("<option selected>"+el.city+"<option>")
		        		$("#area").html("<option selected>"+el.area+"<option>")
		        		$("#add").val(el.address)
		        		$("#tel").val(el.tel)
		        		$("#hi").attr("num",el.index)
		        	}
		        })
			})
			//删除
				$(".delete").click(function(){
				var ind = $(this).parent().parent().index();
				var data=getData()
				data.forEach(function(index,v){
					if(ind == v){
						data.splice(v,1);
						$(this).parent().remove();
					getSave(data);
					adds();
					}
				})
			})
	}
	adds();
	//点击保存
	var index=0;
	$("#save").click(function(){
		if(savebol){
			var s1=localStorage.getItem("index");
			s1++;
			localStorage.setItem("index",s1);
			var data=getData();
			var geetr=$("#geetr").val();
			var pro=$("#province").val();
			var city=$("#city").val();
			var area=$("#area").val();
			var ad=$("#add").val();
			var tel=$("#tel").val();
			if(bol){
				if(geetr!=""&&pro!=""&&city!=""&&area!=""&&ad!=""&&tel!=""&&tel.length==11){
				var address={
					name:geetr,
					pro:pro,
					city:city,
					area:area,
					address:ad,
					tel:tel,
					index:s1
				}
				data.push(address)
				getSave(data);
				adds();
				}else{
					alert("请完善信息")
				}
			}
			
		}else{
			var data=getData();
			var geetr=$("#geetr").val();
			var pro=$("#province").val();
			var city=$("#city").val();
			var area=$("#area").val();
			var ad=$("#add").val();
			var tel=$("#tel").val();
			var index=$(this).find("input[type=hidden]").attr("num");
			$(".listing>ul li").each(function(index,el){
				if($(this).find("input[type=hidden]").attr("num")==$("#hi").attr("num")){
					$(el).find("span:first").html($("#geetr").val())
					$(el).find(".area").html($("#province").val()+$('#city').val())
					$(el).find(".detailed").html($("#province").val()+$('#city').val()+$('#area').val()+$("#add").val())
					$(el).find(".contact").html($("#tel").val())
					
					var address={
					name:geetr,
					pro:pro,
					city:city,
					area:area,
					address:ad,
					tel:tel,
					index:index
				}
				data.forEach(function(el,index){
					if(el.index==$("#hi").attr("num")){
						data.splice(index,1,address);
					}
				})

				getSave(data);
				}
			})
		}
		$(".content form").hide();
			var geetr=$("#geetr").val("");
			var pro=$("#province").val("");
			var city=$("#city").val("");
			var area=$("#area").val("");
			var ad=$("#add").val("");
			var tel=$("#tel").val("");
		savebol=true;
			
	})
							


	$(".content form").on("blur","input,select",function(e){ 
		if($(e.target).val()){
			bol=true;
		}else{
			bol=false;
		}
	})

$("#tel").blur(function(){
	var reg=/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
	var tel=$("#tel").val()
	if(!reg.test(tel)){
		alert("手机号格式错误")
//		return false;
	}

})


$(".fir").click(function(){
	for (var i = 0; i < $(".listing li").length; i++) {
		$(".listing li .fir").css("background", "url(img/delete2.png) 78px 0px no-repeat")
	}
	$(this).css("background", "url(img/delete1.png) 78px 0px no-repeat")
})
