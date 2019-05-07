(function(){

    //头部导航栏部分
    let str =`        
    <div class="header">
        <div class="h-left">
            <a href="http://www.lofter.com" class="h-logo"><img src="./img/logo.png"></a>
        </div>
        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#" class="nav-selected">浏览</a></li>
            <li><a href="#">APP</a></li>
            <li><a href="#">话题</a></li>
            <li><a href="#">达人</a></li>
            <li><a href="#">设置</a></li>
            <li><a href="#" class="more">更多 ▼</a></li>
        </ul>
        <div class="h-search">
            <div class="box"></div>
            <div class="sear-ico"></div>
            <input type="text" placeholder="搜索用户、标签" class="sear-input">
            <div class="sear-new"></div>
        </div>
    </div>`;
    document.querySelector('.menu').innerHTML = str;

    //更多模块
    let more = ` 
    <div class="triangle-more"></div>
    <ul>
        <li><a href="#"><div class="icon-1"></div>寻找好友</a></li>
        <li><a href="#"><div class="icon-2"></div>导入导出</a></li>
        <li><a href="#"><div class="icon-3"></div>移动客户端</a></li>
        <li><a href="#"><div class="icon-4"></div>LOFTCam-用心创造滤镜</a></li>
        <li><a href="#"><div class="icon-5"></div>UAPP-创建个人应用</a></li>
        <li><a href="#"><div class="icon-6"></div>帮助反馈及投诉</a></li>
        <li><a href="#"><div class="icon-7"></div>退出</a></li>
    </ul>`
    document.querySelector('.more-box').innerHTML = more;
})()