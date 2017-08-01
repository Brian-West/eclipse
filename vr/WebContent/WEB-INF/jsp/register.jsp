<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>登录 </title>
    <link rel="stylesheet" type="text/css" href="../css/register-login.css">
</head>
<body>
<div id="box"></div>
<div class="cent-box">
    <div class="cent-box-header">
        <h1 class="main-title ">虚拟现实质量评估网站</h1>
        <h2 class="sub-title">从专业的角度，选最好的VR</h2>
    </div>

    <div class="cont-main clearfix">
        <div class="index-tab">
            <div class="index-slide-nav">
                <a href="login" class="active">登录</a>
                <a href="register">注册</a>
                <div class="slide-bar"></div>
            </div>
        </div>

        <div class="login form">
            <div class="group">
                <div class="group-ipt email">
                    <input type="text" name="email" id="email" class="ipt" placeholder="用户名" required>
                </div>
                <div class="group-ipt password">
                    <input type="password" name="password" id="password" class="ipt" placeholder="输入您的登录密码" required>
                </div>
                <div class="group-ipt verify">
                    <input type="text" name="verify" id="verify" class="ipt" placeholder="输入验证码" required>
                    <canvas id="imgcode"></canvas>
                </div>
            </div>
        </div>

        <div class="button">
            <button type="submit" class="login-btn register-btn" id="button" onclick="test()">登录</button>
        </div>

        <div class="remember clearfix">
            <label class="remember-me"><span class="icon"><span class="zt"></span></span><input type="checkbox" name="remember-me" id="remember-me" class="remember-mecheck" checked>记住我</label>
            <label class="forgot-password">
                <a href="#">忘记密码？</a>
            </label>
        </div>
    </div>
</div>

<div class="footer">
    <!--<p>千寻 - Thousands Find</p>-->
    <!--<p>Designed By ZengRong & <a href="zrong.me">zrong.me</a> 2016</p>-->
</div>


<script src='../js/jquery.min.js' type="text/javascript"></script>

<script>
    //    $('.imgcode').hover(function(){
    //        layer.tips("看不清？点击更换", '.verify', {
    //            time: 6000,
    //            tips: [2, "#3c3c3c"]
    //        })
    //    },function(){
    //        layer.closeAll('tips');
    //    }).click(function(){
    //        $(this).attr('src','http://zrong.me/home/index/imgcode?id=' + Math.random());
    //    });
    $("#remember-me").click(function(){
        var n = document.getElementById("remember-me").checked;
        if(n){
            $(".zt").show();
        }else{
            $(".zt").hide();
        }
    });
    function randomNum(min,max){//生成随机数
        return Math.floor(Math.random()*(max-min)+min);
    }
    function randomColor(min,max) {//生成随机颜色
        var r = randomNum(min, max);
        var g = randomNum(min, max);
        var b = randomNum(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    var verification;
    verification = drawPic();//返回验证码值
    document.getElementById("imgcode").onclick = function(){//点击图片更换验证码
        verification = drawPic();//返回验证码值
    }
    function drawPic() {
        var canvas = document.getElementById("imgcode");
        var width = canvas.width;
        var height = canvas.height;
        var ctx = canvas.getContext("2d");//构建一张2维图
        ctx.baseline = 'bottom';
        //设置背景颜色
        ctx.fillStyle = randomColor(180, 240);
        ctx.fillRect(0, 0, width, height);//绘制矩形
        //设置字体
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
        var result = "";
        for (var i = 0; i < 4; i++) {
            var txt = str[randomNum(0, str.length)];
            ctx.fillStyle = randomColor(50, 160);//填充颜色
            ctx.font = randomNum(80, 110) + "px SimHei";
            var x = 20 + i * 70;
            var y = randomNum(75,90);
            var deg = randomNum(-45, 45);
            //修改字体旋转角度
            ctx.translate(x, y);
            ctx.rotate(deg * Math.PI / 180);
            ctx.fillText(txt, 0, 0);//填充文本
            //恢复字体旋转角度
            ctx.rotate(-deg * Math.PI / 180);
            ctx.translate(-x, -y);
            result += txt;
        }
        return result;
    }
    function test(){
        var inputRandom=document.getElementById("verify").value.toLowerCase();
        if(inputRandom==verification.toLowerCase()) {
            alert("通过验证");
        } else  {
            alert("验证码不正确");
        }

    }






</script>
</body>
</html>