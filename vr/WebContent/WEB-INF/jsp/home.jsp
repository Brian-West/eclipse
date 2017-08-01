<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all">
    <link href="css/homestyle.css" rel="stylesheet" type="text/css" media="all" />
    <script src="js/jquery.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript" src="js/lunbo.js"></script>
    <script type="text/javascript">
        $(document).ready(function($) {
            $(".scroll").click(function(event){
                event.preventDefault();
                $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
            });
        });
    </script>
    <!-- start-smoth-scrolling -->
</head>
<body>
<!-- header -->
<div class="header">
    <div class="header-top">
        <!-- container -->
        <div class="container">
            <div class="header-top-left">
                <ul>
                    <li><a href="#">评测自媒体</a></li>
                    <li><a href="#">VR百科</a></li>
                    <li><a href="#">VR论坛</a></li>
                </ul>
            </div>
            <div class="header-top-right">
                <form>
                    <input type="text" placeholder=" " required="">
                    <input type="submit" value=" ">
                    <div class="clearfix"> </div>
                </form>
            </div>
            <div class="clearfix"> </div>
        </div>
        <!-- //container -->
    </div>
    <div class="header-middle">
        <!-- container -->
        <div class="container">
            <div class="header-middle-logo">
                <a href="home.html">虚拟现实质量评估网站</a>
            </div>
            <div class="header-middle-right">
                <div class="login">
                    <ul>
                        <li class="gray"><a href="login.html"><strong> 登陆</strong></a></li>
                        <li class="gray"><a href="register.html"><strong> 注册</strong></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- //container -->
    </div>
    <div class="top-nav">
        <!-- container -->
        <div class="container">
            <span class="menu">菜单</span>
            <ul class="nav1">
                <li><a href="home.html">首页</a><li>
                <li><a href="news.html">新闻资讯</a><li>
                <li><a href="shop.html">产品中心</a><li>
                <!--<li><a href="articles.html">评测中心</a><li>-->
                <li><a href="compare.html">产品对比</a><li>
                <!--<li><a href="typo.html">产品排行榜</a><li>-->
                <!--<li><a href="contact.html">消费者口碑</a></li>-->
                <div class="clearfix"> </div>
            </ul>
            <script>
                $( "span.menu" ).click(function() {
                    $( "ul.nav1" ).slideToggle( 300, function() {
                        // Animation complete.
                    });
                });

            </script>

        </div>
        <!-- //container -->
    </div>
</div>
<!-- //header -->
<!-- banner -->
<div class="banner-slider">
    <!-- banner Slider starts Here -->
    <script src="../js/responsiveslides.min.js"></script>
    <script>
        // You can also use "$(window).load(function() {"
        $(function () {
            // Slideshow 4
            $("#slider3").responsiveSlides({
                auto: true,
                pager: true,
                nav: false,
                speed: 500,
                namespace: "callbacks",
                before: function () {
                    $('.events').append("<li>before event fired.</li>");
                },
                after: function () {
                    $('.events').append("<li>after event fired.</li>");
                }
            });

        });
    </script>
    <!--//End-slider-script -->
    <!--<div  id="top" class="callbacks_container">-->
        <!--<ul class="rslides" id="slider3">-->
            <!--<li>-->
                <!--<div class="banner"> </div>-->
            <!--</li>-->
            <!--<li>-->
                <!--<div class="banner-img"> </div>-->
            <!--</li>-->
        <!--</ul>-->
    <!--</div>-->
</div>
<!-- //banner -->
<!-- how -->
<!--<div class="how">-->
    <!-- container -->
    <!--<div class="container">-->
        <!--<div class="how-top-grids">-->
            <!--<div class="preview">-->
            <!--<div class=" how-left">-->
                <!--<h3>头条新闻</h3>-->
                <!--<a href="single.html"><img src="./img/02.jpg" alt=""></a>-->
                <!--<div class="data">-->
                    <!--<a href="single.html">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a>-->
                <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="news-right">-->
                <!--<div class="news-right-left">-->
                    <!---->
                <!--</div>-->

            <!--</div>-->
            <!--&lt;!&ndash;<div class=" how-right">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="tournament">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="how-right-left">&ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="img/02.jpg" alt="" />&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="how-right-right">&ndash;&gt;-->
                        <!--&lt;!&ndash;<a href=""><h4>新闻标题</h4></a>&ndash;&gt;-->
                        <!--&lt;!&ndash;&lt;!&ndash;<p>新闻截取内容新闻截取内容新闻截取内容新闻截取内容新闻截取内容新闻截取内容&ndash;&gt;&ndash;&gt;-->
                        <!--&lt;!&ndash;&lt;!&ndash;</p>&ndash;&gt;&ndash;&gt;-->
                        <!--&lt;!&ndash;&lt;!&ndash;<div class="more">&ndash;&gt;&ndash;&gt;-->
                            <!--&lt;!&ndash;&lt;!&ndash;<a href="single.html">阅读全文</a>&ndash;&gt;&ndash;&gt;-->
                        <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->

                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="clearfix"> </div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<hr>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="tournament t-middle">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="how-right-left">&ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="img/02.jpg" alt="" />&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="how-right-right">&ndash;&gt;-->
                        <!--&lt;!&ndash;<a href=""><h4>新闻标题</h4></a>&ndash;&gt;-->

                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="clearfix"> </div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<hr>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="tournament t-middle">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="how-right-left">&ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="img/02.jpg" alt="" />&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="how-right-right">&ndash;&gt;-->
                        <!--&lt;!&ndash;<a href=""><h4>新闻标题</h4></a>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="clearfix"> </div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<hr>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="tournament t-middle">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="how-right-left">&ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="img/02.jpg" alt="" />&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="how-right-right">&ndash;&gt;-->
                        <!--&lt;!&ndash;<a href=""><h4>新闻标题</h4></a>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="clearfix"> </div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<hr>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="tournament t-middle">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="how-right-left">&ndash;&gt;-->
                        <!--&lt;!&ndash;<img src="img/02.jpg" alt="" />&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="how-right-right">&ndash;&gt;-->
                        <!--&lt;!&ndash;<a href=""><h4>新闻标题</h4></a>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="clearfix"> </div>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<hr>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class=" how-bottom-right">&ndash;&gt;-->
                    <!--&lt;!&ndash;<a href="news.html">更多新闻资讯>>></a>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="clearfix"> </div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->


        <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash; //container &ndash;&gt;-->
<!--</div>-->
<!--&lt;!&ndash; //how &ndash;&gt;-->
<!--&lt;!&ndash; news &ndash;&gt;-->
<div class="main">
    <div class="news">
        <div class="news-left">
            <div id="igs">
                <div class="ig">
                    <div><img src="../img/1.jpg"></div>
                    <div class="data">
                    <a href="single.html">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题1</a>
                    </div>
                </div>
                <div class="ig">
                    <div><img src="../img/02.jpg"></div>
                    <div class="data">
                        <a href="single.html">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题2</a>
                    </div>
                </div>
                <div class="ig">
                    <div><img src="../img/03.jpg"></div>
                    <div class="data">
                        <a href="single.html">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题3</a>
                    </div>
                </div>
            </div>
            <div id="tabs">
                <div class="tab bg">1</div>
                <div class="tab">2</div>
                <div class="tab">3</div>
            </div>
        </div>
        <div class="news-right">
            <div class="content">
            <h3>头条新闻</h3>
            <h4><a href=""> 更多>>></a></h4>
            </div>
            <i>1 </i><a href="">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a>
            <hr>
            <i>2 </i><a href="">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a><hr>
            <i>3 </i><a href="">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a><hr>
            <i>4 </i><a href="">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a><hr>
            <i>5 </i><a href="">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a><hr>
            <i>6 </i><a href="">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a><hr>
            <i>7 </i><a href="">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a><hr>
            <i>8 </i><a href="">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</a><hr>
        </div>
    </div>
    <div class="product">
        <div class="content">
        <h3>产品中心</h3>
        <h4><a href=""> 更多>>></a></h4>
        </div>
        <div class="each">
            <div><img src="../img/02.jpg"></div>
            <div class="name">
                <a href="">产品名产品名产品名产品名产品名</a>
            </div>
        </div>
        <div class="each">
            <div><img src="../img/02.jpg"></div>
            <div class="name">
                <a href="">产品名产品名产品名产品名产品名</a>
            </div>
        </div>
        <div class="each">
            <div><img src="../img/02.jpg"></div>
            <div class="name">
                <a href="">产品名产品名产品名产品名产品名</a>
            </div>
        </div>
        <div class="each">
            <div><img src="../img/02.jpg"></div>
            <div class="name">
                <a href="">产品名产品名产品名产品名产品名</a>
            </div>
        </div>
        <div class="each">
            <div><img src="../img/02.jpg"></div>
            <div class="name">
                <a href="">产品名产品名产品名产品名产品名</a>
            </div>
        </div>
    </div>
</div>
<!--<div class="news">-->
    <!--&lt;!&ndash; container &ndash;&gt;-->
    <!--<div class="container">-->
        <!--<div class="news-info">-->
            <!--<h3>热门产品</h3>-->
        <!--</div>-->
        <!--<div class="news-grids">-->
            <!--<div class="col-md-4 news-grid">-->
                <!--<div class="news-grid-left_1">-->
                <!--</div>-->
                <!--<div class="news-grid-left-info">-->
                    <!--<h5><a href=""> HTC Vive消费者版</a></h5>-->
                    <!--<p>￥6800</p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="col-md-4 news-grid">-->
                <!--<div class=" news-grid-middle_1">-->
                <!--</div>-->
                <!--<div class="news-grid-left-info">-->
                    <!--<h5><a href="">索尼PlayStation VR</a></h5>-->
                    <!--<p>￥2999</p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="col-md-4 news-grid">-->
                <!--<div class="news-grid-right_1">-->
                <!--</div>-->
                <!--<div class="news-grid-left-info">-->
                    <!--<h5><a href="">三星GEAR VR</a></h5>-->
                    <!--<p>￥699</p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="col-md-4 news-grid">-->
                <!--<div class="news-grid-left_2">-->
                <!--</div>-->
                <!--<div class="news-grid-left-info">-->
                    <!--<h5><a href="">商品名</a></h5>-->
                    <!--<p>商品价格</p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="col-md-4 news-grid">-->
                <!--<div class="news-grid-middle_2">-->
                <!--</div>-->
                <!--<div class="news-grid-left-info">-->
                    <!--<h5><a href="">商品名</a></h5>-->
                    <!--<p>商品价格</p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="col-md-4 news-grid">-->
                <!--<div class="news-grid-right_2">-->
                <!--</div>-->
                <!--<div class="news-grid-left-info">-->
                    <!--<h5><a href="">商品名</a></h5>-->
                    <!--<p>商品价格</p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="col-md-4 news-grid">-->
                <!--<div class="news-grid-left_3">-->
                <!--</div>-->
                <!--<div class="news-grid-left-info">-->
                    <!--<h5><a href="">商品名</a></h5>-->
                    <!--<p>商品价格</p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="col-md-4 news-grid">-->
                <!--<div class="news-grid-middle_3">-->
                <!--</div>-->
                <!--<div class="news-grid-left-info">-->
                    <!--<h5><a href="">商品名</a></h5>-->
                    <!--<p>商品价格</p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="col-md-4 news-grid">-->
                <!--<div class="news-grid-right_3">-->
                <!--</div>-->
                <!--<div class="news-grid-left-info">-->
                    <!--<h5><a href="">商品名</a></h5>-->
                    <!--<p>商品价格</p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="news-bottom">-->
                <!--<a href="shop.html">全部商品 >>></a>-->
            <!--</div>-->
            <!--<div class="clearfix"> </div>-->
        <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash; //container &ndash;&gt;-->
<!--</div>-->

<div class="footer">
    <!-- container -->
    <div class="container">
        <div class="footer-top">
            <div class="footer-grids">
                <div class="col-md-3 f-address">
                    <h5>联系我们</h5>
                    <ul>
                        <li>756 gt globel Place,</li>
                        <li>CD-Road,M 07 435.</li>
                        <li>Telephone: +1 234 567 9871</li>
                        <li>FAX: +1 234 567 9871</li>
                        <li>E-mail : <a href="mailto:example@email.com">Example@mail.com</a></li>
                    </ul>
                </div>
                <div class="col-md-6 f-introduce">
                    <h5>关于我们</h5>
                    <p>介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
                        介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍</p>
                </div>
                <div class="clearfix"> </div>
            </div>
            <div class="footer-bottom">
                <div class="copyright">
                    <p>Copyright &copy; 2017.Company name All rights reserved.</p>
                </div>
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
    <!-- //container -->
</div>
<!-- //footer -->
<script type="text/javascript">
    $(document).ready(function() {
        /*
         var defaults = {
         containerID: 'toTop', // fading element id
         containerHoverID: 'toTopHover', // fading element hover id
         scrollSpeed: 1200,
         easingType: 'linear'
         };
         */

        $().UItoTop({ easingType: 'easeOutQuart' });

    });
</script>
<a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
<!-- content-Get-in-touch -->
</body>
</html>