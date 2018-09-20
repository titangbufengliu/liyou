//获取json文件中的值
$(function () {
    $.ajax({
        type: "GET",//请求方式
        url: "js/new.json",//地址，就是json文件的请求路径
        dataType: "json",//数据类型可以为 text xml json  script  jsonp 
       success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
            addBox(result);
        }
    });
    function addBox(result) {
        function creatnewLi(i,a) {
            var newLi = "<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<div class='name'>"+
                "<h2>"+ result[i].title +"</h2>"+
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<p>"+result[i].info+"</p>\n" + 
                "</a>\n " +
                "</div>\n"+
                "<div class='price'>"+
                "<span>￥"+ result[i].price +"<p>￥"+ result[i].oldprice +"</p></span><br />\n"+
                "<span>"+ result[i].kc +"</span>\n"+
                "<a href='shop_cart.html?"+result[i]['id']+"'>"+ result[i].buy +"</a> " +
                "</div>"+
                "</li>"
            $(a).append(newLi);
        } 
        function addLi(i,b){
            var newsLi="<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<p>"+result[i].info+"</p>\n" + 
                "</a>\n " +
                "<span>￥"+ result[i].price +"<p>￥"+ result[i].oldprice +"</p></span><br />\n"+
                "</li>"
            $(b).append(newsLi);
        }
        function addLi1(i,c) {
            var newLi = "<li>" +
                "<div class='rule'>"+
                "<h2>"+ result[i].title +"</h2>"+
                "<h3>"+ result[i].info +"</h3>"+
                "</div>\n"+
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +result[i].enter+
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "</li>"
            $(c).append(newLi);
        } 
        function addLi2(i,d){
            var newsLi="<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<p>"+result[i].info+"</p>\n" + 
                "</a>\n " +
                "<span>￥"+ result[i].price +"<p>￥"+ result[i].oldprice +"</p></span><br />\n"+
                "</li>"
            $(d).append(newsLi);
        }
        function addLi3(i,e) {
            var newLi = "<li>" +
                "<div class='rule'>"+
                "<h2>"+ result[i].title +"</h2>"+
                "<h3>"+ result[i].info +"</h3>"+
                "</div>\n"+
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +result[i].enter+
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "</li>"
            $(e).append(newLi);
        } 
        function addLi4(i,f){
            var newsLi="<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<p>"+result[i].info+"</p>\n" + 
                "</a>\n " +
                "<span>￥"+ result[i].price +"<p>￥"+ result[i].oldprice +"</p></span><br />\n"+
                "</li>"
            $(f).append(newsLi);
        }
        function addLi5(i,g) {
            var newLi = "<li>" +
                "<div class='rule'>"+
                "<h2>"+ result[i].title +"</h2>"+
                "<h3>"+ result[i].info +"</h3>"+
                "</div>\n"+
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +result[i].enter+
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "</li>"
            $(g).append(newLi);
        } 
        function addLi6(i,h){
            var newsLi="<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<p>"+result[i].info+"</p>\n" + 
                "</a>\n " +
                "<span>￥"+ result[i].price +"<p>￥"+ result[i].oldprice +"</p></span><br />\n"+
                "</li>"
            $(h).append(newsLi);
        }
        function addLi7(i,j) {
            var newLi = "<li>" +
                "<div class='rule'>"+
                "<h2>"+ result[i].title +"</h2>"+
                "<h3>"+ result[i].info +"</h3>"+
                "</div>\n"+
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +result[i].enter+
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "</li>"
            $(j).append(newLi);
        } 
        function addLi8(i,k){
            var newsLi="<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<p>"+result[i].info+"</p>\n" + 
                "</a>\n " +
                "<span>￥"+ result[i].price +"<p>￥"+ result[i].oldprice +"</p></span><br />\n"+
                "</li>"
            $(k).append(newsLi);
        }
        function addLi9(i,l) {
            var newLi = "<li>" +
                "<div class='rule'>"+
                "<h2>"+ result[i].title +"</h2>"+
                "<h3>"+ result[i].info +"</h3>"+
                "</div>\n"+
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +result[i].enter+
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "</li>"
            $(l).append(newLi);
        } 
        
        function addLi10(i,m) {
            var newLi = "<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<p>"+result[i].info+"</p>\n" + 
                "</a>\n " +
                "<div class='price'>"+
                "<span>￥"+ result[i].price +"<p>￥"+ result[i].oldprice +"</p></span><br />\n"+
                "<span>"+ result[i].kc +"</span>\n"+
                "<a href='shop_cart.html?"+result[i]['id']+"'>"+ result[i].buy +"</a> " +
                "</div>"+
                "</li>"
            $(m).append(newLi);
        } 
        function addLi11(i,n) {
            var newLi = "<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<p>"+
                "<a href='pro-cente.html?"+result[i]['id']+"'>" + result[i].info +"</a>"+
                "</p>\n" +
                "<div class='price'>"+
                "<span>￥"+ result[i].price +"<p>￥"+ result[i].oldprice +"</p></span>\n"+
                "<span>"+ result[i].rebate +"</span>\n"+
                "<span>"+ result[i].free +"</span>\n"+
                "</div>"+
                "</li>"
            $(n).append(newLi);
        } 
        function addLi12(i,o) {
            var newLi = "<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<p>"+
                "<a href='pro-cente.html?"+result[i]['id']+"'>" + result[i].info +"</a>"+
                "</p>\n" +
                "<p>￥"+ result[i].price +"<span>￥"+ result[i].oldprice +"</span></p>"
            $(o).append(newLi);
        } 
        function addLi13(i,p) {
            var newLi = "<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<p>"+
                "<a href='pro-cente.html?"+result[i]['id']+"'>" + result[i].info +"</a>"+
                "</p>\n" +
                "<p>￥"+ result[i].price +"<span>￥"+ result[i].oldprice +"</span></p>"
            $(p).append(newLi);
        } 
        
        
        function addLi14(i,q) {
            var newLi = "<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<p>"+result[i].info+"</p>\n" + 
                "</a>\n " +
                "<p>￥"+ result[i].price +"<span>￥"+ result[i].oldprice +"</span></p>"
            $(q).append(newLi);
        } 
        function addLi15(i,r) {
           var newLi = "<li>" +
                "<a href='pro-cente.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<p>"+
                "<a href='pro-cente.html?"+result[i]['id']+"'>"+result[i].info+"</a>\n " +
                "</p>\n" +
                "<p>￥"+ result[i].price +"<span>￥"+ result[i].oldprice +"</span></p>"
            $(r).append(newLi);
        } 
        
        

        for (var i = 0; i < result.length; i++) {
            if(i<=3){
                creatnewLi(i,".new ul");
            }else if(i<=11&&i>3){
                addLi(i,".active ul");
            }else if(i==93){
                addLi1(i,".active ul");
            }else if(i<=20&&i>11){
                addLi2(i,".discount .lower ul");
            }else if(i==94){
                addLi3(i,".discount .lower ul");
            }else if(i<=27&&i>20){
                addLi4(i,".mode ul");
            }else if(i==95){
                addLi5(i,".mode ul");
            }else if(i<=34&&i>27){
                addLi6(i,".cases ul");
            }else if(i==96){
                addLi7(i,".cases ul");
            }else if(i<=41&&i>34){
                addLi8(i,".cleaning .lower ul");
            }else if(i==97){
                addLi9(i,".cleaning .lower ul");
            }else if(i<=46&&i>41){
                addLi10(i,".inter ul");
            }else if(i<=82&&i>46){
                addLi11(i,".goods ul");
            }else if(i<=87&&i>82){
                addLi12(i,".like ul");
            }else if(i<=92&&i>87){
                addLi13(i,".pop ul");
            }else if(i<=100&&i>96){
                addLi14(i,".substance ul");
            }else if(i<=104&&i>96){
                addLi15(i,".recommend ul");
            }
        }
    }
});