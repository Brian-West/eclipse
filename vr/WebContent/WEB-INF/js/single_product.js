/**
 * Created by Administrator on 2017/6/3.
 */
//页面加载时部署对比栏
window.onload = function(){
    if(sessionStorage.length != 0) {
        var i = 0;
        while(i < sessionStorage.length){
            var odiv = $("<div class='box'><div/>");
            var oimg = $("<img class='box_img' />");
            var id = sessionStorage.key(i);
            var img = sessionStorage.key(i+1);
            $(odiv).attr("id",sessionStorage.getItem(id));
            $(oimg).attr("src",sessionStorage.getItem(img));
            odiv.append(oimg);
            $("#right_box").append(odiv);
            i = i+ 3;
            if(localStorage.getItem('z_id') == sessionStorage.getItem(id)){
                $("#btn").css({'background-color':'#e4393c'});
                $("#btn").val("撤销");
            }
        }
    }
};
//页面渲染
$.ajax({
    url:'shop1.json',
    //url:'product/'+localStorage.getItem('id'),
    type: 'get',
    async:true,
    success: function (data) {
        $("#product_title1").html(data.name);
        $("#product_title").html(data.name);
        $("#product_brand").html(data.brand);
        $("#product_type").html(data.type);
        $("#product_img").attr('src',data.pic_location);
        $("#price").html(data.price);
        $("#type").html(data.type);
        $("#brand").html(data.brand);
        $("#view_angle").html(data.view_angle);
        $("#glassed").html(data.glassed);
        $("#adjust_function").html(data.adjust_function);
        $("#video_input").html(data.video_input);
        $("#interFace").html(data.interFace);
        $("#resolution_ratio").html(data.resolution_ratio);
        $("#refresh_rate").html(data.refresh_rate);
        $("#screen").html(data.screen);
        $("#screen_size").html(data.screen_size);
        $("#size").html(data.size);
        $("#weight").html(data.weight);
        $("#sensor").html(data.sensor);
        $("#volum_input").html(data.volum_input);
        $("#cpu").html(data.cpu);
        $("#ram").html(data.ram);
        $("#other").html(data.other);
    },
    error:function(data){
        alert("产品信息读取失败");
    }
});
//点击‘加入对比’按钮
function insert(obj){
    var b = $("#right_box").children("div").length;
    if(obj.value != "撤销"){
        if (b <= 4) {
            var odiv = $("<div class='box'><div/>");
            var oimg = $("<img class='box_img' />");
            $(odiv).attr("id",localStorage.getItem('z_id'));
            var m = localStorage.getItem('z_pos') + "id";
            sessionStorage.setItem(m, localStorage.getItem('z_id'));
            var n = localStorage.getItem('z_pos') + "img";
            sessionStorage.setItem(n, $("#product_img")[0].src);
            $(oimg).attr("src",sessionStorage.getItem(n));
            var k =localStorage.getItem('z_pos')+"pos";
            sessionStorage.setItem(k,localStorage.getItem('z_pos'));
            odiv.append(oimg);
            $("#right_box").append(odiv);
            obj.style.backgroundColor = "#e4393c";
            obj.value = "撤销";
        }
        else{
            alert("对比的产品个数不能超过4个");
        }
    }
    else{
        var id2 = localStorage.getItem('z_id');
        $("#"+id2).remove();
        sessionStorage.removeItem(localStorage.getItem('z_pos')+"id");
        sessionStorage.removeItem(localStorage.getItem('z_pos')+"img");
        sessionStorage.removeItem(localStorage.getItem('z_pos')+"pos");
        obj.value = "加入对比";
        obj.style.backgroundColor = "#00a78e";
    }
}