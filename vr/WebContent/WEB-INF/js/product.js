/**
 * Created by Administrator on 2017/6/3.
 */
//页面加载时部署对比栏
function load(){
    if(sessionStorage.length != 0) {
        var i = 0;
        while(i < sessionStorage.length){
            var odiv = document.createElement("div");
            var oimg = document.createElement("img");
            odiv.className = "box";
            oimg.className = "box_img";
            var id = sessionStorage.key(i);
            odiv.id = sessionStorage.getItem(id);
            var pos = sessionStorage.key(i+2);
            var position = sessionStorage.getItem(pos);
            var g = $(".Sbox_list").children("#"+position);
            var obj = $(g).children(".button1");
            obj.attr("value","撤销");
            obj.css("backgroundColor","#e4393c");
            var img = sessionStorage.key(i+1);
            oimg.src = sessionStorage.getItem(img);
            odiv.appendChild(oimg);
            document.getElementById("right_box").appendChild(odiv);
            i = i+ 3;
        }
        //var i1 = sessionStorage.key(0);
        //var i2 = sessionStorage.key(1);
        //var i3 = sessionStorage.key(2);
        //var i4 = sessionStorage.key(3);
        //var i5 = sessionStorage.key(4);
        //var i6 = sessionStorage.key(5);
        //var i7 = sessionStorage.key(6);
        //var i8 = sessionStorage.key(7);
        //var i9 = sessionStorage.key(8);
        //alert(sessionStorage.getItem(i1));
        //alert(sessionStorage.getItem(i2));
        //alert(sessionStorage.getItem(i3));
        //alert(sessionStorage.getItem(i4));
        //alert(sessionStorage.getItem(i5));
        //alert(sessionStorage.getItem(i6));
        //alert(sessionStorage.getItem(i7));
        //alert(sessionStorage.getItem(i8));
        //alert(sessionStorage.getItem(i9));

    }

}
//实时更新对比栏
window.onload = function(){
    setInterval(load(),1000);
};
//页面渲染
$.ajax({
    url:'shop.json',
    //url:'url?pid='+ 1,
    type: 'get',
    async:true,
    success: function (data) {
        $("#title1").next().next().attr("id",data[0].id);
        $("#title1").html(data[0].name);
        $("#img1").attr("src",data[0].pic_location);
        $("#title2").next().next().attr("id",data[1].id);
        $("#title2").html(data[1].name);
        $("#img2").attr("src",data[1].pic_location);
        $("#title3").next().next().attr("id",data[2].id);
        $("#title3").html(data[2].name);
        $("#img3").attr("src",data[2].pic_location);
        $("#title4").next().next().attr("id",data[3].id);
        $("#title4").html(data[3].name);
        $("#img4").attr("src",data[3].pic_location);
        $("#title5").next().next().attr("id",data[4].id);
        $("#title5").html(data[4].name);
        $("#img5").attr("src",data[4].pic_location);
        $("#title6").next().next().attr("id",data[5].id);
        $("#title6").html(data[5].name);
        $("#img6").attr("src",data[5].pic_location);
        $("#title7").next().next().attr("id",data[6].id);
        $("#title7").html(data[6].name);
        $("#img7").attr("src",data[6].pic_location);
        $("#title8").next().next().attr("id",data[7].id);
        $("#title8").html(data[7].name);
        $("#img8").attr("src",data[7].pic_location);
        $("#title9").next().next().attr("id",data[8].id);
        $("#title9").html(data[8].name);
        $("#img9").attr("src",data[8].pic_location);
        $("#title10").next().next().attr("id",data[9].id);
        $("#title10").html(data[9].name);
        $("#img10").attr("src",data[9].pic_location);
        $("#title11").next().next().attr("id",data[10].id);
        $("#title11").html(data[10].name);
        $("#img11").attr("src",data[10].pic_location);
        $("#title12").next().next().attr("id",data[11].id);
        $("#title12").html(data[11].name);
        $("#img12").attr("src",data[11].pic_location);
        $("#title13").next().next().attr("id",data[12].id);
        $("#title13").html(data[12].name);
        $("#img13").attr("src",data[12].pic_location);
        $("#title14").next().next().attr("id",data[13].id);
        $("#title14").html(data[13].name);
        $("#img14").attr("src",data[13].pic_location);
        $("#title15").next().next().attr("id",data[14].id);
        $("#title15").html(data[14].name);
        $("#img15").attr("src",data[14].pic_location);
        $("#title16").next().next().attr("id",data[15].id);
        $("#title16").html(data[15].name);
        $("#img16").attr("src",data[15].pic_location);
        $("#title17").next().next().attr("id",data[16].id);
        $("#title17").html(data[16].name);
        $("#img17").attr("src",data[16].pic_location);
        $("#title18").next().next().attr("id",data[17].id);
        $("#title18").html(data[17].name);
        $("#img18").attr("src",data[17].pic_location);
        $("#title19").next().next().attr("id",data[18].id);
        $("#title19").html(data[18].name);
        $("#img19").attr("src",data[18].pic_location);
        $("#title20").next().next().attr("id",data[19].id);
        $("#title20").html(data[19].name);
        $("#img20").attr("src",data[19].pic_location);

    },
    error:function(data){
        alert("产品信息读取失败");
    }
});
//点击‘加入对比’按钮
function pull(obj){
    var b = $("#right_box").children("div").length;
    if (obj.value != "撤销") {
        if (b <= 4) {
            var odiv = $("<div class='box'><div/>");
            var oimg = $("<img class='box_img' />");
            //var p = obj.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
            var p = $(obj).prev().prev().prev(".img");
            //var m = obj.parentNode.id+"id";
            var m = $(obj).parent(".list").attr("id")+"id";
            sessionStorage.setItem(m, $(obj).attr("id"));
            var k = $(obj).parent(".list").attr("id")+"pos";
            sessionStorage.setItem(k,obj.parentNode.id);
            $(odiv).attr("id",sessionStorage.getItem(m));
            var n = $(obj).parent(".list").attr("id")+"img";
            sessionStorage.setItem(n, p.attr("src"));
            $(oimg).attr("src",sessionStorage.getItem(n));
            odiv.append(oimg);
            $("#right_box").append(odiv);
            obj.value = "撤销";
            obj.style.backgroundColor = "#e4393c";
        }
        else{
            alert("对比的产品个数不能超过4个");
        }
    }

    else{
        $("#"+obj.id).remove();
        sessionStorage.removeItem($(obj).parent(".list").attr("id")+"id");
        sessionStorage.removeItem($(obj).parent(".list").attr("id")+"img");
        sessionStorage.removeItem($(obj).parent(".list").attr("id")+"pos");
        obj.value = "加入对比";
        obj.style.backgroundColor = "#00a78e";

    }


}
//跳转到单个产品页面时保存相关产品的id和在列表中位置pos
function store(obj){
    var q = $(obj).parent(".list").attr("id");
    var k = $(obj).next(".button1").attr("id");
    localStorage.setItem('z_pos',q);
    localStorage.setItem('z_id',k);
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
        //url:'shop2.json',
        url:'url?page='+pageNum,
        type:'get',
        async:true,
        success:function(data){
            $("#title1").next().next().attr("id",data[0].id);
            $("#title1").html(data[0].name);
            $("#img1").attr("src",data[0].pic_location);
            $("#title2").next().next().attr("id",data[1].id);
            $("#title2").html(data[1].name);
            $("#img2").attr("src",data[1].pic_location);
            $("#title3").next().next().attr("id",data[2].id);
            $("#title3").html(data[2].name);
            $("#img3").attr("src",data[2].pic_location);
            $("#title4").next().next().attr("id",data[3].id);
            $("#title4").html(data[3].name);
            $("#img4").attr("src",data[3].pic_location);
            $("#title5").next().next().attr("id",data[4].id);
            $("#title5").html(data[4].name);
            $("#img5").attr("src",data[4].pic_location);
            $("#title6").next().next().attr("id",data[5].id);
            $("#title6").html(data[5].name);
            $("#img6").attr("src",data[5].pic_location);
            $("#title7").next().next().attr("id",data[6].id);
            $("#title7").html(data[6].name);
            $("#img7").attr("src",data[6].pic_location);
            $("#title8").next().next().attr("id",data[7].id);
            $("#title8").html(data[7].name);
            $("#img8").attr("src",data[7].pic_location);
            $("#title9").next().next().attr("id",data[8].id);
            $("#title9").html(data[8].name);
            $("#img9").attr("src",data[8].pic_location);
            $("#title10").next().next().attr("id",data[9].id);
            $("#title10").html(data[9].name);
            $("#img10").attr("src",data[9].pic_location);
            $("#title11").next().next().attr("id",data[10].id);
            $("#title11").html(data[10].name);
            $("#img11").attr("src",data[10].pic_location);
            $("#title12").next().next().attr("id",data[11].id);
            $("#title12").html(data[11].name);
            $("#img12").attr("src",data[11].pic_location);
            $("#title13").next().next().attr("id",data[12].id);
            $("#title13").html(data[12].name);
            $("#img13").attr("src",data[12].pic_location);
            $("#title14").next().next().attr("id",data[13].id);
            $("#title14").html(data[13].name);
            $("#img14").attr("src",data[13].pic_location);
            $("#title15").next().next().attr("id",data[14].id);
            $("#title15").html(data[14].name);
            $("#img15").attr("src",data[14].pic_location);
            $("#title16").next().next().attr("id",data[15].id);
            $("#title16").html(data[15].name);
            $("#img16").attr("src",data[15].pic_location);
            $("#title17").next().next().attr("id",data[16].id);
            $("#title17").html(data[16].name);
            $("#img17").attr("src",data[16].pic_location);
            $("#title18").next().next().attr("id",data[17].id);
            $("#title18").html(data[17].name);
            $("#img18").attr("src",data[17].pic_location);
            $("#title19").next().next().attr("id",data[18].id);
            $("#title19").html(data[18].name);
            $("#img19").attr("src",data[18].pic_location);
            $("#title20").next().next().attr("id",data[19].id);
            $("#title20").html(data[19].name);
            $("#img20").attr("src",data[19].pic_location);

        },
        error:function(data) {
            alert("产品信息读取失败");
        }
    });
}
//分页按钮
function jump_page_button(){
    var pageNum = parseInt($("#pageGro li.on").html()) ;
    $.ajax({
        //url:'shop2.json',
        url:'url?page='+pageNum,
        type:'get',
        async:true,
        success:function(data){
            $("#title1").next().next().attr("id",data[0].id);
            $("#title1").html(data[0].name);
            $("#img1").attr("src",data[0].pic_location);
            $("#title2").next().next().attr("id",data[1].id);
            $("#title2").html(data[1].name);
            $("#img2").attr("src",data[1].pic_location);
            $("#title3").next().next().attr("id",data[2].id);
            $("#title3").html(data[2].name);
            $("#img3").attr("src",data[2].pic_location);
            $("#title4").next().next().attr("id",data[3].id);
            $("#title4").html(data[3].name);
            $("#img4").attr("src",data[3].pic_location);
            $("#title5").next().next().attr("id",data[4].id);
            $("#title5").html(data[4].name);
            $("#img5").attr("src",data[4].pic_location);
            $("#title6").next().next().attr("id",data[5].id);
            $("#title6").html(data[5].name);
            $("#img6").attr("src",data[5].pic_location);
            $("#title7").next().next().attr("id",data[6].id);
            $("#title7").html(data[6].name);
            $("#img7").attr("src",data[6].pic_location);
            $("#title8").next().next().attr("id",data[7].id);
            $("#title8").html(data[7].name);
            $("#img8").attr("src",data[7].pic_location);
            $("#title9").next().next().attr("id",data[8].id);
            $("#title9").html(data[8].name);
            $("#img9").attr("src",data[8].pic_location);
            $("#title10").next().next().attr("id",data[9].id);
            $("#title10").html(data[9].name);
            $("#img10").attr("src",data[9].pic_location);
            $("#title11").next().next().attr("id",data[10].id);
            $("#title11").html(data[10].name);
            $("#img11").attr("src",data[10].pic_location);
            $("#title12").next().next().attr("id",data[11].id);
            $("#title12").html(data[11].name);
            $("#img12").attr("src",data[11].pic_location);
            $("#title13").next().next().attr("id",data[12].id);
            $("#title13").html(data[12].name);
            $("#img13").attr("src",data[12].pic_location);
            $("#title14").next().next().attr("id",data[13].id);
            $("#title14").html(data[13].name);
            $("#img14").attr("src",data[13].pic_location);
            $("#title15").next().next().attr("id",data[14].id);
            $("#title15").html(data[14].name);
            $("#img15").attr("src",data[14].pic_location);
            $("#title16").next().next().attr("id",data[15].id);
            $("#title16").html(data[15].name);
            $("#img16").attr("src",data[15].pic_location);
            $("#title17").next().next().attr("id",data[16].id);
            $("#title17").html(data[16].name);
            $("#img17").attr("src",data[16].pic_location);
            $("#title18").next().next().attr("id",data[17].id);
            $("#title18").html(data[17].name);
            $("#img18").attr("src",data[17].pic_location);
            $("#title19").next().next().attr("id",data[18].id);
            $("#title19").html(data[18].name);
            $("#img19").attr("src",data[18].pic_location);
            $("#title20").next().next().attr("id",data[19].id);
            $("#title20").html(data[19].name);
            $("#img20").attr("src",data[19].pic_location);
        },
        error:function(data) {
            alert("产品信息读取失败");
        }
    });

}
//点击‘筛选’按钮
function select(){
    var aa = $("#select1").attr("value");
    var bb = $("#select2").attr("value");
    $.ajax({
        url:'url?type='+aa+'&sequence='+bb,
        type:'get',
        async:true,
        success:function(data){
            $("#title1").next().next().attr("id",data[0].id);
            $("#title1").html(data[0].name);
            $("#img1").attr("src",data[0].pic_location);
            $("#title2").next().next().attr("id",data[1].id);
            $("#title2").html(data[1].name);
            $("#img2").attr("src",data[1].pic_location);
            $("#title3").next().next().attr("id",data[2].id);
            $("#title3").html(data[2].name);
            $("#img3").attr("src",data[2].pic_location);
            $("#title4").next().next().attr("id",data[3].id);
            $("#title4").html(data[3].name);
            $("#img4").attr("src",data[3].pic_location);
            $("#title5").next().next().attr("id",data[4].id);
            $("#title5").html(data[4].name);
            $("#img5").attr("src",data[4].pic_location);
            $("#title6").next().next().attr("id",data[5].id);
            $("#title6").html(data[5].name);
            $("#img6").attr("src",data[5].pic_location);
            $("#title7").next().next().attr("id",data[6].id);
            $("#title7").html(data[6].name);
            $("#img7").attr("src",data[6].pic_location);
            $("#title8").next().next().attr("id",data[7].id);
            $("#title8").html(data[7].name);
            $("#img8").attr("src",data[7].pic_location);
            $("#title9").next().next().attr("id",data[8].id);
            $("#title9").html(data[8].name);
            $("#img9").attr("src",data[8].pic_location);
            $("#title10").next().next().attr("id",data[9].id);
            $("#title10").html(data[9].name);
            $("#img10").attr("src",data[9].pic_location);
            $("#title11").next().next().attr("id",data[10].id);
            $("#title11").html(data[10].name);
            $("#img11").attr("src",data[10].pic_location);
            $("#title12").next().next().attr("id",data[11].id);
            $("#title12").html(data[11].name);
            $("#img12").attr("src",data[11].pic_location);
            $("#title13").next().next().attr("id",data[12].id);
            $("#title13").html(data[12].name);
            $("#img13").attr("src",data[12].pic_location);
            $("#title14").next().next().attr("id",data[13].id);
            $("#title14").html(data[13].name);
            $("#img14").attr("src",data[13].pic_location);
            $("#title15").next().next().attr("id",data[14].id);
            $("#title15").html(data[14].name);
            $("#img15").attr("src",data[14].pic_location);
            $("#title16").next().next().attr("id",data[15].id);
            $("#title16").html(data[15].name);
            $("#img16").attr("src",data[15].pic_location);
            $("#title17").next().next().attr("id",data[16].id);
            $("#title17").html(data[16].name);
            $("#img17").attr("src",data[16].pic_location);
            $("#title18").next().next().attr("id",data[17].id);
            $("#title18").html(data[17].name);
            $("#img18").attr("src",data[17].pic_location);
            $("#title19").next().next().attr("id",data[18].id);
            $("#title19").html(data[18].name);
            $("#img19").attr("src",data[18].pic_location);
            $("#title20").next().next().attr("id",data[19].id);
            $("#title20").html(data[19].name);
            $("#img20").attr("src",data[19].pic_location);
        },
        error:function(data) {
              alert("排序方式读取失败");
        }
    });
}
