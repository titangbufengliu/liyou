	var can=document.getElementById("can");
	var aa=can.getContext("2d")
	
	var pic=new Image();
	pic.src="img/bj.gif"
	document.getElementsByClassName("codes")[0].appendChild(pic)
	var arr=[0,1,2,3,4,5,6,7,8,9]	
	var sz=""
	
	for (var i = 0; i < 4; i++) {
			x=Math.floor(Math.random()*20)
			var r=Math.floor(Math.random()*9)
			aa.font="36px 宋体"
			x=x+Math.floor(Math.random()+15)+i*20
			y=Math.floor(Math.random()+35)
			aa.fillText(arr[r],x,y)
			sz+=arr[r];
	}
$(".codes").click(function(){
		sz=""
		aa.clearRect(0,0,118,48)
		for (var i = 0; i < 4; i++) {
			x=Math.floor(Math.random()*20)
			var r=Math.floor(Math.random()*9)
			aa.font="36px 宋体"
			x=x+Math.floor(Math.random()+15)+i*20
			y=Math.floor(Math.random()+35)
			aa.fillText(arr[r],x,y)
			sz+=arr[r];
		}
	})