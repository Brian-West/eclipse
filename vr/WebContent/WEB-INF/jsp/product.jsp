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
    <link rel="stylesheet" type="text/css" href="css/product.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <!--<script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>-->
    <!--<script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>-->
    <![endif]-->
    <script src="js/jquery-v1.10.2.min.js" type="text/javascript"></script>
    <script src="js/jquery-3.2.1.js" type="text/javascript"></script>
    <script src="js/product.js" type="text/javascript"></script>
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
    <div class="Sscreen">
        <hr>
        <div class="list">
            <form>
                <select style="float: left" name="grand"  id="select1">
                    <option value="all">所有种类</option>
                    <option value="glasses" >VR眼镜</option>
                    <option value="helmet" >VR头盔</option>
                    <option value="machine">VR一体机</option>
                </select>
                <select style="float: left" name="rank"  id="select2" >
                    <option value="time" name="按日期排序">按日期排序</option>
                    <option  value="price">按价格排序</option>
                </select>
                <!--<a style="color: #000000;font-size: 15px; margin-top:5px;cursor: default">当前排序 :</a><a id="select_type" style="color: #000000;font-size: 15px; margin-top:5px ;cursor: default">所有种类</a><a style="color: #000000;font-size: 15px; margin-top:5px ;cursor: default">/</a> <a id="select_sequence" style="color: #000000;font-size: 15px; margin-top:5px;cursor: default">按日期排序</a>-->
                <button onclick="select()" class="select_button">筛选/排序</button>
            </form>
            <hr>
        </div>
    </div>
    <div class="Sbox">
        <div id="right_box">
            <div class="box_title">对比栏</div>
        </div>
        <button class="right_button"><a href="product_compare.html">进行对比</a></button>
        <div class="Sbox_list">
            <div class="list" id="1">
                <img class="img" src="img/c4.png" alt="" id="img1">
                <div class="title" id="title1" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比"  />
            </div>
            <div class="list" id="2">
                <img class="img" src="img/p2.jpg" alt="" id="img2">
                <div class="title" id="title2" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="3">
                <img class="img" src="img/p3.jpg" alt="" id="img3">
                <div class="title" id="title3" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="4">
                <img class="img" src="img/p4.jpg" alt="" id="img4">
                <div class="title" id="title4" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="5">
                <img class="img" src="img/c4.png" alt="" id="img5">
                <div class="title" id="title5" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="6">
                <img class="img" src="img/c4.png" alt="" id="img6">
                <div class="title" id="title6" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="7">
                <img class="img" src="img/c4.png" alt="" id="img7">
                <div class="title" id="title7" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="8">
                <img class="img" src="img/c4.png" alt="" id="img8">
                <div class="title" id="title8" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="9">
                <img class="img" src="img/c4.png" alt="" id="img9">
                <div class="title" id="title9" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="10">
                <img class="img" src="img/c4.png" alt="" id="img10">
                <div class="title" id="title10" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list"  id="11">
                <img class="img" src="img/c4.png" alt="" id="img11">
                <div class="title" id="title11" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="12">
                <img class="img" src="img/c4.png" alt="" id="img12">
                <div class="title" id="title12" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list"  id="13">
                <img class="img" src="img/c4.png" alt="" id="img13">
                <div class="title" id="title13" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;"><a href="">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="14">
                <img class="img" src="img/c4.png" alt="" id="img14">
                <div class="title" id="title14" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="15">
                <img class="img" src="img/c4.png" alt="" id="img15">
                <div class="title" id="title15" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="16">
                <img class="img" src="img/c4.png" alt="" id="img16">
                <div class="title" id="title16" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 80px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="17">
                <img class="img" src="img/c4.png" alt="" id="img17">
                <div class="title" id="title17" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="18">
                <img class="img" src="img/c4.png" alt="" id="img18">
                <div class="title" id="title18" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="19">
                <img class="img" src="img/c4.png" alt="" id="img19">
                <div class="title" id="title19" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
            <div class="list" id="20">
                <img class="img" src="img/c4.png" alt="" id="img20">
                <div class="title" id="title20" style="font-size: 16px;font-weight: bold;margin: 5px;word-break: break-all;height: 240px;"></div>
                <div class="article" style="text-decoration: underline;margin-left: 70px;color: #005aa0;font-size: 10px;" onclick="store(this)"><a href="single_product.html">详细信息</a></div>
                <input type="button" onclick="pull(this)" class="button1" value="加入对比" />
            </div>
        </div>
        <div id="pageGro" class="cb">
            <div class="pageUp">上一页</div>
            <div class="pageList">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
            <div class="pageDown">下一页</div>
        </div>

</div>
</div>
<script src="js/bootstrap.min.js"></script>
</body>
</html>