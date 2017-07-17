/**
 * Created by Administrator on 2017/6/1.
 */
//页面渲染
$.ajax({

    url:'url',
    type: 'get',
    async:true,
    success: function (data) {
        $("#title1").html(data[0].title);
        $("#abstract1").html(data[0].news_abstract);
        $("#pic1").attr('src',data[0].pic_location);
        var news1 =  $("#title1").closest(".data");
        $(news1).attr("id",data[0].id);
        $("#title2").html(data[1].title);
        $("#abstract2").html(data[1].news_abstract);
        $("#pic2").attr('src',data[1].pic_location);
        var news2 =  $("#title2").closest(".data");
        $(news2).attr("id",data[1].id);
        $("#title3").html(data[2].title);
        $("#abstract3").html(data[2].news_abstract);
        $("#pic3").attr('src',data[2].pic_location);
        var news3 =  $("#title3").closest(".data");
        $(news3).attr("id",data[2].id);
        $("#title4").html(data[3].title);
        $("#abstract4").html(data[3].news_abstract);
        $("#pic4").attr('src',data[3].pic_location);
        var news4 =  $("#title4").closest(".data");
        $(news4).attr("id",data[3].id);
        $("#title5").html(data[4].title);
        $("#abstract5").html(data[4].news_abstract);
        $("#pic5").attr('src',data[4].pic_location);
        var news5 =  $("#title5").closest(".data");
        $(news5).attr("id",data[4].id);
        $("#title6").html(data[5].title);
        $("#abstract6").html(data[5].news_abstract);
        $("#pic6").attr('src',data[5].pic_location);
        var news6 =  $("#title6").closest(".data");
        $(news6).attr("id",data[5].id);
        $("#title7").html(data[6].title);
        $("#abstract7").html(data[6].news_abstract);
        $("#pic7").attr('src',data[6].pic_location);
        var news7 =  $("#title7").closest(".data");
        $(news7).attr("id",data[6].id);
        $("#title8").html(data[7].title);
        $("#abstract8").html(data[7].news_abstract);
        $("#pic8").attr('src',data[7].pic_location);
        var news8 =  $("#title8").closest(".data");
        $(news8).attr("id",data[7].id);
        $("#title9").html(data[8].title);
        $("#abstract9").html(data[8].news_abstract);
        $("#pic9").attr('src',data[8].pic_location);
        var news9 =  $("#title9").closest(".data");
        $(news9).attr("id",data[8].id);
        $("#title10").html(data[9].title);
        $("#abstract10").html(data[9].news_abstract);
        $("#pic10").attr('src',data[9].pic_location);
        var news10 =  $("#title10").closest(".data");
        $(news10).attr("id",data[9].id);
    },
    error:function(data){
        alert("新闻读取失败");
    }
});

//页面跳转时，将选取浏览的新闻id用localStorage存起来
function jump(obj){
    var p = obj.parentNode.id;
    localStorage.setItem("z_news",p);
}

//分页功能
$(function(){
    //根据总页数判断，如果小于5页，则显示所有页数，如果大于5页，则显示5页。根据当前点击的页数生成

    var pageCount = 10;//模拟后台总页数
    //生成分页按钮
    if(pageCount>5){
        page_icon(1,5,0);
    }else{
        page_icon(1,pageCount,0);
    }

    //点击分页按钮触发
    $("#pageGro li").live("click",function(){
        if(pageCount > 5){
            var pageNum = parseInt($(this).html());//获取当前页数
            pageGroup(pageNum,pageCount);
        }else{
            $(this).addClass("on");
            $(this).siblings("li").removeClass("on");
        }
    });
    $("#pageGro li").live("click",function(){
        jump_page(this);
    });

    //点击上一页触发
    $("#pageGro .pageUp").click(function(){
        if(pageCount > 5){
            var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
            pageUp(pageNum,pageCount);
        }else{
            var index = $("#pageGro ul li.on").index();//获取当前页
            if(index > 0){
                $("#pageGro li").removeClass("on");//清除所有选中
                $("#pageGro ul li").eq(index-1).addClass("on");//选中上一页
            }
        }
    });
    $("#pageGro .pageUp").click(function(){
        jump_page_button();
    });

    //点击下一页触发
    $("#pageGro .pageDown").click(function(){
        if(pageCount > 5){
            var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
            pageDown(pageNum,pageCount);
        }else{
            var index = $("#pageGro ul li.on").index();//获取当前页
            if(index+1 < pageCount){
                $("#pageGro li").removeClass("on");//清除所有选中
                $("#pageGro ul li").eq(index+1).addClass("on");//选中上一页
            }
        }
    });
    $("#pageGro .pageDown").click(function(){
        jump_page_button();
    });
});


//点击跳转页面
function pageGroup(pageNum,pageCount){
    switch(pageNum){
        case 1:
            page_icon(1,5,0);
            break;
        case 2:
            page_icon(1,5,1);
            break;
        case pageCount-1:
            page_icon(pageCount-4,pageCount,3);
            break;
        case pageCount:
            page_icon(pageCount-4,pageCount,4);
            break;
        default:
            page_icon(pageNum-2,pageNum+2,2);
            break;
    }
}

//根据当前选中页生成页面点击按钮
function page_icon(page,count,eq){
    var ul_html = "";
    for(var i=page; i<=count; i++){
        ul_html += "<li>"+i+"</li>";
    }
    $("#pageGro ul").html(ul_html);
    $("#pageGro ul li").eq(eq).addClass("on");
}

//上一页
function pageUp(pageNum,pageCount){
    switch(pageNum){
        case 1:
            break;
        case 2:
            page_icon(1,5,0);
            break;
        case pageCount-1:
            page_icon(pageCount-4,pageCount,2);
            break;
        case pageCount:
            page_icon(pageCount-4,pageCount,3);
            break;
        default:
            page_icon(pageNum-2,pageNum+2,1);
            break;
    }
}

//下一页
function pageDown(pageNum,pageCount){
    switch(pageNum){
        case 1:
            page_icon(1,5,1);
            break;
        case 2:
            page_icon(1,5,2);
            break;
        case pageCount-1:
            page_icon(pageCount-4,pageCount,4);
            break;
        case pageCount:
            break;
        default:
            page_icon(pageNum-2,pageNum+2,3);
            break;
    }
}
//分页按钮
function jump_page(obj){
    var pageNum = obj.innerHTML;
    $.ajax({
        url:'url?page='+pageNum,
        type:'get',
        async:true,
        success:function(data){
            $("#title1").html(data[0].title);
            $("#abstract1").html(data[0].news_abstract);
            $("#pic1").attr('src',data[0].pic_location);
            var news1 =  $("#title1").closest(".data");
            $(news1).attr("id",data[0].id);
            $("#title2").html(data[1].title);
            $("#abstract2").html(data[1].news_abstract);
            $("#pic2").attr('src',data[1].pic_location);
            var news2 =  $("#title2").closest(".data");
            $(news2).attr("id",data[1].id);
            $("#title3").html(data[2].title);
            $("#abstract3").html(data[2].news_abstract);
            $("#pic3").attr('src',data[2].pic_location);
            var news3 =  $("#title3").closest(".data");
            $(news3).attr("id",data[2].id);
            $("#title4").html(data[3].title);
            $("#abstract4").html(data[3].news_abstract);
            $("#pic4").attr('src',data[3].pic_location);
            var news4 =  $("#title4").closest(".data");
            $(news4).attr("id",data[3].id);
            $("#title5").html(data[4].title);
            $("#abstract5").html(data[4].news_abstract);
            $("#pic5").attr('src',data[4].pic_location);
            var news5 =  $("#title5").closest(".data");
            $(news5).attr("id",data[4].id);
            $("#title6").html(data[5].title);
            $("#abstract6").html(data[5].news_abstract);
            $("#pic6").attr('src',data[5].pic_location);
            var news6 =  $("#title6").closest(".data");
            $(news6).attr("id",data[5].id);
            $("#title7").html(data[6].title);
            $("#abstract7").html(data[6].news_abstract);
            $("#pic7").attr('src',data[6].pic_location);
            var news7 =  $("#title7").closest(".data");
            $(news7).attr("id",data[6].id);
            $("#title8").html(data[7].title);
            $("#abstract8").html(data[7].news_abstract);
            $("#pic8").attr('src',data[7].pic_location);
            var news8 =  $("#title8").closest(".data");
            $(news8).attr("id",data[7].id);
            $("#title9").html(data[8].title);
            $("#abstract9").html(data[8].news_abstract);
            $("#pic9").attr('src',data[8].pic_location);
            var news9 =  $("#title9").closest(".data");
            $(news9).attr("id",data[8].id);
            $("#title10").html(data[9].title);
            $("#abstract10").html(data[9].news_abstract);
            $("#pic10").attr('src',data[9].pic_location);
            var news10 =  $("#title10").closest(".data");
            $(news10).attr("id",data[9].id);
        },
        error:function(data) {
            alert("新闻读取失败");
        }
    });
}

//分页按钮
function jump_page_button(){
    var pageNum = parseInt($("#pageGro li.on").html()) ;
    $.ajax({
        url:'url?page='+pageNum,
        type:'get',
        async:true,
        success:function(data){
            $("#title1").html(data[0].title);
            $("#abstract1").html(data[0].news_abstract);
            $("#pic1").attr('src',data[0].pic_location);
            var news1 =  $("#title1").closest(".data");
            $(news1).attr("id",data[0].id);
            $("#title2").html(data[1].title);
            $("#abstract2").html(data[1].news_abstract);
            $("#pic2").attr('src',data[1].pic_location);
            var news2 =  $("#title2").closest(".data");
            $(news2).attr("id",data[1].id);
            $("#title3").html(data[2].title);
            $("#abstract3").html(data[2].news_abstract);
            $("#pic3").attr('src',data[2].pic_location);
            var news3 =  $("#title3").closest(".data");
            $(news3).attr("id",data[2].id);
            $("#title4").html(data[3].title);
            $("#abstract4").html(data[3].news_abstract);
            $("#pic4").attr('src',data[3].pic_location);
            var news4 =  $("#title4").closest(".data");
            $(news4).attr("id",data[3].id);
            $("#title5").html(data[4].title);
            $("#abstract5").html(data[4].news_abstract);
            $("#pic5").attr('src',data[4].pic_location);
            var news5 =  $("#title5").closest(".data");
            $(news5).attr("id",data[4].id);
            $("#title6").html(data[5].title);
            $("#abstract6").html(data[5].news_abstract);
            $("#pic6").attr('src',data[5].pic_location);
            var news6 =  $("#title6").closest(".data");
            $(news6).attr("id",data[5].id);
            $("#title7").html(data[6].title);
            $("#abstract7").html(data[6].news_abstract);
            $("#pic7").attr('src',data[6].pic_location);
            var news7 =  $("#title7").closest(".data");
            $(news7).attr("id",data[6].id);
            $("#title8").html(data[7].title);
            $("#abstract8").html(data[7].news_abstract);
            $("#pic8").attr('src',data[7].pic_location);
            var news8 =  $("#title8").closest(".data");
            $(news8).attr("id",data[7].id);
            $("#title9").html(data[8].title);
            $("#abstract9").html(data[8].news_abstract);
            $("#pic9").attr('src',data[8].pic_location);
            var news9 =  $("#title9").closest(".data");
            $(news9).attr("id",data[8].id);
            $("#title10").html(data[9].title);
            $("#abstract10").html(data[9].news_abstract);
            $("#pic10").attr('src',data[9].pic_location);
            var news10 =  $("#title10").closest(".data");
            $(news10).attr("id",data[9].id);
        },
        error:function(data) {
            alert("新闻读取失败");
        }
    });

}


