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
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/single_product.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <!--<script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>-->
    <!--<script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>-->
    <![endif]-->
    <script src="js/jquery-v1.10.2.min.js" type="text/javascript"></script>
    <script src="js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="js/jquery-1.8.3.min.js" type="text/javascript"></script>
    <script src="js/single_product.js" type="text/javascript"></script>
</head>
<body>
<!-- Header nav menu  -->
<nav>
    <div class="container">
        <div class="main-menu-container">
            <ul class="main-menu">
                <li>
                    <a href="index.html">首页</a>
                </li>
                <li>
                    <a href="news_list.html">新闻资讯</a>
                </li>
                <li>
                    <a href="product.html">产品中心</a>
                </li>
                <li>
                    <a href="product_compare.html">产品对比</a>
                </li>
                <li>
                    <a href="news.html">产品排行榜</a>
                </li>
                <li>
                    <a href="news.html">评测自媒体</a>
                </li>
                <li>
                    <a href="news.html">消费者口碑</a>
                </li>
                <li>
                    <a href="news.html">VR百科</a>
                </li>
                <li>
                    <a href="news.html">VR论坛</a>
                </li>
                <li>
                    <a href="login.html" class="btn-standard">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<section class="news-header container-fluid page-top">
    <div class="container">
        <h1>产品中心</h1>
        <p></p>
    </div>
</section>
<div class="container">
    <div class="Dbox">
        <div class="box">
            <div class="left">
                <div class="timg"><img id = "product_img" src="img/c4.png" alt=""></div>
            </div>
            <div class="cent">
                <div id="product_title">Tralean 750英寸1080P智能视频眼镜VR一体机3D虚拟现实头戴显示设备灯</div>
                <div id="bg">
                    <div>产品价：<a id="price">¥26666.00</a></div>
                    <div>制造商：<a id="product_brand">索尼</a></div>
                    <div>产品类型：<a id="product_type">VR眼镜</a></div>
                </div>
                <div class="compare">
                    <input type="button" onclick="insert(this)" id="btn" value="加入对比" />
                </div>
            </div>
        </div>
    </div>
    <div id="right_box">
        <div class="box_title">对比栏</div>
    </div>
    <button class="right_button"><a href="compare.html"> 进行对比</a></button>
    <div class="left_Dbox">
        <div class="Dbox1">
            <div class="configuration">
                <div class="top">
                    <span>配置参数</span>
                </div>
                <div class="configuration1">
                    <div class="data1">
                        <p>主要技术规格：</p>
                        <table>
                            <tr>
                                <td>类型：<a id="type" class="parameter"></a></td>
                                <td>品牌：<a id="brand" class="parameter"></a></td>
                            </tr>
                            <tr>
                                <td>分辨率：<a id="resolution_ratio" class="parameter"></a></td>
                                <td>刷新率：<a id="refresh_rate" class="parameter"></a></td>
                            </tr>
                            <tr>
                                <td>显示屏：<a id="screen" class="parameter"></a></td>
                                <td>显示尺寸：<a id="screen_size" class="parameter"></a></td>
                            </tr>
                            <tr>
                                <td>视场角：<a id="view_angle" class="parameter"></a></td>
                                <td>镜片：<a id="glassed" class="parameter"></a></td>
                            </tr>
                            <tr>
                                <td>调节功能：<a id="adjust_function" class="parameter"></a></td>
                                <td>传感器：<a id="sensor" class="parameter"></a></td>
                            </tr>
                            <tr>
                                <td>视频输入：<a id="video_input" class="parameter"></a></td>
                                <td>音频输入：<a id="volum_input" class="parameter"></a></td>
                            </tr>
                            <tr>
                                <td>接口：<a id="interFace" class="parameter"></a></td>
                                <td>CPU：<a id="cpu" class="parameter"></a></td>
                            </tr>
                            <tr>
                                <td>RAM：<a id="ram" class="parameter"></a></td>
                                <td>尺寸：<a id="size" class="parameter"></a></td>
                            </tr>
                            <tr>
                                <td>重量：<a id="weight" class="parameter"></a></td>
                            </tr>

                        </table>
                        <p>其他技术规格：</p>
                        <a id="other" class="parameter"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="Dbox2">
            <div class="question">
                <div class="top">
                    <span>问卷小调查</span>
                </div>
                <div class="question_content">
                    <form action="" method="get" class="research">
                        <p><i>1.  </i>您是否使用过这款产品？</p><br />
                        <label><input   name="use" type="radio" value="yes" />是 </label>
                        <label><input   name="use" type="radio" value="no" style="margin-left: 40px" />否</label>
                        <p><i>2.  </i>您觉得这款产品怎么样？</p><br />
                        <label><input  name="feeling" type="radio" value="good" />棒 </label>
                        <label><input  name="feeling" type="radio" value="normal" style="margin-left: 40px"/>一般 </label>
                        <label><input  name="feeling" type="radio" value="worse" style="margin-left: 40px"/>差 </label>
                        <p><i>3.  </i>觉得这款产品存在什么不足，或还有什么需要改进？</p><br />
                        <textarea id="research_text"></textarea>
                    </form>
                    <button id="question_submit">提交</button>
                </div>

            </div>
        </div>
    </div>
</div>
<script src="js/bootstrap.min.js"></script>
</body>
</html>