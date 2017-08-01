/**
 * Created by Administrator on 2017/6/5.
 */
window.onload = function(){
    var array = new Array(4);
    for(var a = 0; a < array.length ; a++){
        array[a] = 0;
    }
    if(sessionStorage.length != 0) {
        var i = 0;
        var j = 0;
        while(i < sessionStorage.length){
            var p = sessionStorage.key(i);
            array[j] = parseInt(sessionStorage.getItem(p));
            i= i + 3;
            j= j + 1;
        }

    }
    else{
        alert("没有选择对比产品");
    }
    var pid1 = array[0];
    var pid2 = array[1];
    var pid3 = array[2];
    var pid4 = array[3];

    $.ajax({
        //url:'shop2.json',
        url:'url?pid1='+pid1 +'&pid2='+pid2+'&pid3='+pid3+'&pid4='+pid4,
        type: 'get',
        async:true,
        success: function (data) {
            $("#img1").attr('src',data[0].pic_location);
            $("#2_1").html(data[0].resolution_ratio);
            $("#3_1").html(data[0].refresh_rate);
            $("#4_1").html(data[0].screen);
            $("#5_1").html(data[0].screen_size);
            $("#6_1").html(data[0].view_angle);
            $("#7_1").html(data[0].glassed);
            $("#8_1").html(data[0].adjust_function);
            $("#9_1").html(data[0].sensor);
            $("#10_1").html(data[0].video_input);
            $("#11_1").html(data[0].volum_input);
            $("#12_1").html(data[0].interFace);
            $("#13_1").html(data[0].cpu);
            $("#14_1").html(data[0].ram);
            $("#15_1").html(data[0].other);

            $("#img2").attr('src',data[1].pic_location);
            $("#2_2").html(data[1].resolution_ratio);
            $("#3_2").html(data[1].refresh_rate);
            $("#4_2").html(data[1].screen);
            $("#5_2").html(data[1].screen_size);
            $("#6_2").html(data[1].view_angle);
            $("#7_2").html(data[1].glassed);
            $("#8_2").html(data[1].adjust_function);
            $("#9_2").html(data[1].sensor);
            $("#10_2").html(data[1].video_input);
            $("#11_2").html(data[1].volum_input);
            $("#12_2").html(data[1].interFace);
            $("#13_2").html(data[1].cpu);
            $("#14_2").html(data[1].ram);
            $("#15_2").html(data[1].other);

            $("#img3").attr('src',data[2].pic_location);
            $("#2_3").html(data[2].resolution_ratio);
            $("#3_3").html(data[2].refresh_rate);
            $("#4_3").html(data[2].screen);
            $("#5_3").html(data[2].screen_size);
            $("#6_3").html(data[2].view_angle);
            $("#7_3").html(data[2].glassed);
            $("#8_3").html(data[2].adjust_function);
            $("#9_3").html(data[2].sensor);
            $("#10_3").html(data[2].video_input);
            $("#11_3").html(data[2].volum_input);
            $("#12_3").html(data[2].interFace);
            $("#13_3").html(data[2].cpu);
            $("#14_3").html(data[2].ram);
            $("#15_3").html(data[2].other);

            $("#img4").attr('src',data[3].pic_location);
            $("#2_4").html(data[3].resolution_ratio);
            $("#3_4").html(data[3].refresh_rate);
            $("#4_4").html(data[3].screen);
            $("#5_4").html(data[3].screen_size);
            $("#6_4").html(data[3].view_angle);
            $("#7_4").html(data[3].glassed);
            $("#8_4").html(data[3].adjust_function);
            $("#9_4").html(data[3].sensor);
            $("#10_4").html(data[3].video_input);
            $("#11_4").html(data[3].volum_input);
            $("#12_4").html(data[3].interFace);
            $("#13_4").html(data[3].cpu);
            $("#14_4").html(data[3].ram);
            $("#15_4").html(data[3].other);

        },
        error:function(data){
            alert("产品信息读取失败");
        }
    })
};