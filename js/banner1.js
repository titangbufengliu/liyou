var index=0;
var s=0;
var bol=true;
$(".banner .next").click(function(){
	if(bol){
		bol=false;
		s++;
		if(s>2){
			s=0;
		}
		$(".banner .btn li").eq(s).addClass("current").siblings().removeClass("current");
		index++;
		if(index>3){
			index=1;
			$(".banner .pic").css("left","0px");
		}
		$(".banner .pic").animate({
			"left":-index*1920+"px"
		},2000)
		setTimeout(function(){
			bol=true;
		},2500)
	
	}
	
})

$(".banner .prev").click(function(){
	if(bol){
		s--;
		if(s<0){
			s=2;
		} 
		$(".banner .btn li").eq(s).addClass("current").siblings().removeClass("current");
		index--;
		if(index<0){
			index=2;
			$(".banner .pic").css("left",-3*1920+"px");
		}
		
		$(".banner .pic").animate({
			"left":-index*1920+"px"
		},2000)
		bol=false;
		setTimeout(function(){
			bol=true;
		},2500)
	}
})

run();
var timer;
$(".banner").hover(function(){
	clearInterval(timer)
},function(){
	run();
})

function run(){
	clearInterval(timer)
	timer=setInterval(function(){
		s++;
		if(s>2){
			s=0;
		}
		$(".banner .btn li").eq(s).addClass("current").siblings().removeClass("current");
		index++;
		if(index>3){
			index=1;
			$(".banner .pic").css("left","0px");
		}
		$(".banner .pic").animate({
		"left":-index*1920+"px"
		},2000)
	},2500)
}

$(".banner .btn li").mouseenter(function(){
	$(this).addClass("current").siblings().removeClass("current");
	index=$(this).index();
	s=$(this).index();
	$(".banner .pic").css("left",-index*1920+"px");
})
