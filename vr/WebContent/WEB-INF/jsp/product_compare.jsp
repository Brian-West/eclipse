<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="utf-8">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>VR web</title>

    <!-- Bootstrap -->
    <link href="./src/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="./src/css/product_compare.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <!--<script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>-->
    <!--<script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>-->
    <![endif]-->
    <script src="src/js/jquery-v1.10.2.min.js" type="text/javascript"></script>
    <script src="src/js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="src/js/product_compare.js" type="text/javascript"></script>
</head>
<body>
<!-- Header nav menu  -->
<nav>
    <div class="container">
        <div class="main-menu-container">
            <ul class="main-menu">
                <li>
                    <a href="./index.html">首页</a>
                </li>
                <li>
                    <a href="./news_list.html">新闻资讯</a>
                </li>
                <li>
                    <a href="./product.html">产品中心</a>
                </li>
                <li>
                    <a href="./news.html">产品对比</a>
                </li>
                <li>
                    <a href="./news.html">产品排行榜</a>
                </li>
                <li>
                    <a href="./news.html">评测自媒体</a>
                </li>
                <li>
                    <a href="./news.html">消费者口碑</a>
                </li>
                <li>
                    <a href="./news.html">VR百科</a>
                </li>
                <li>
                    <a href="./news.html">VR论坛</a>
                </li>
                <li>
                    <a href="./login.html" class="btn-standard">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<section class="news-header container-fluid page-top">
    <div class="container">
        <h1>产品对比</h1>
        <p></p>
    </div>
</section>
<script src="./src/js/bootstrap.min.js"></script>
<div class="container">
    <table>
        <tr class="line1">
            <td></td>
            <td><img id="img1" src="" ></td>
            <td><img id="img2" src="" ></td>
            <td><img id="img3" src="" ></td>
            <td><img id="img4" src="" ></td>
        </tr>
        <tr>
            <td>分辨率</td>
            <td id="2_1"></td>
            <td id="2_2"></td>
            <td id="2_3"></td>
            <td id="2_4"></td>
        </tr>
        <tr>
            <td>刷新率</td>
            <td id="3_1"></td>
            <td id="3_2"></td>
            <td id="3_3"></td>
            <td id="3_4"></td>
        </tr>
        <tr>
            <td>显示屏</td>
            <td id="4_1"></td>
            <td id="4_2"></td>
            <td id="4_3"></td>
            <td id="4_4"></td>
        </tr>
        <tr>
            <td>显示尺寸</td>
            <td id="5_1"></td>
            <td id="5_2"></td>
            <td id="5_3"></td>
            <td id="5_4"></td>
        </tr>
        <tr>
            <td>视场角</td>
            <td id="6_1"></td>
            <td id="6_2"></td>
            <td id="6_3"></td>
            <td id="6_4"></td>
        </tr>
        <tr>
            <td>镜片</td>
            <td id="7_1"></td>
            <td id="7_2"></td>
            <td id="7_3"></td>
            <td id="7_4"></td>
        </tr>
        <tr>
            <td>调节功能</td>
            <td id="8_1"></td>
            <td id="8_2"></td>
            <td id="8_3"></td>
            <td id="8_4"></td>
        </tr>
        <tr>
            <td>传感器</td>
            <td id="9_1"></td>
            <td id="9_2"></td>
            <td id="9_3"></td>
            <td id="9_4"></td>
        </tr>
        <tr>
            <td>视频输入</td>
            <td id="10_1"></td>
            <td id="10_2"></td>
            <td id="10_3"></td>
            <td id="10_4"></td>
        </tr>
        <tr>
            <td>音频输入</td>
            <td id="11_1"></td>
            <td id="11_2"></td>
            <td id="11_3"></td>
            <td id="11_4"></td>
        </tr>
        <tr>
            <td>接口</td>
            <td id="12_1"></td>
            <td id="12_2"></td>
            <td id="12_3"></td>
            <td id="12_4"></td>
        </tr>
        <tr>
            <td>CPU</td>
            <td id="13_1"></td>
            <td id="13_2"></td>
            <td id="13_3"></td>
            <td id="13_4"></td>
        </tr>
        <tr>
            <td>RAM</td>
            <td id="14_1"></td>
            <td id="14_2"></td>
            <td id="14_3"></td>
            <td id="14_4"></td>
        </tr>
        <tr>
            <td>其他参数</td>
            <td id="15_1"></td>
            <td id="15_2"></td>
            <td id="15_3"></td>
            <td id="15_4"></td>
        </tr>
    </table>
</div>
</body>
</html>