/**
 * Created by Administrator on 2017/6/1.
 */
//页面渲染
$.ajax({
    url:'news/'+localStorage.getItem("z_news"),
    type: 'get',
    async:true,
    success: function (data) {
        $("#news_title").html(data.title);
        $("#little_title").html(data.title);
        $("#author").html(data.author);
        $("#time").html(data.last_edit_time);
        $("#source").html(data.source);
        $("#news_body").html(data.content);
        $("#news_img").attr('src',data.pic_location);
    },
    error:function(data){
        alert("新闻读取失败");
    }
});