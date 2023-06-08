/* 搜索功能 */
function _nl_ys_check() {
    var keyword = document.getElementById('contentshow').value;
    if(keyword==null||keyword==""){
        alert("请输入你要检索的内容！");
        return false;
    }
    if(window.toFF === 1)
    {
        document.getElementById("newssearchkey").value = Simplized(keyword );
    }else
    {
        document.getElementById("newssearchkey").value = keyword;
    }
    const base64 = new Base64();
    document.getElementById("newssearchkey").value = base64.encode(document.getElementById("newssearchkey").value);
    new VsbFormFunc().disableAutoEnable(document.getElementById("contentshow"));
    return true;
};

/* 计算页面高度 */
function calculateContentHeight() {
    let content = document.getElementById("content");
    let inner1 = document.querySelector(".body-title");
    let inner2 = document.querySelector(".body-line");
    let inner3 = document.querySelector(".body-content");
    let remRatio = parseFloat(getComputedStyle(document.documentElement).fontSize);
    content.style.height = (inner1.scrollHeight + inner2.scrollHeight + inner3.scrollHeight) / remRatio + 1 + "rem"; // 获取子元素高度并设置给父元素
};

/* 加载导航栏 */
function navfunction(){
    let mainlevela = $('#nav .mainlevel a');
    let mainlevel = $('#nav .mainlevel')
    let navdot = $('.navdot');
    /* 下拉菜单开始 */
    mainlevela.mouseenter(function(event) {
        let target = $(event.target);
        if(target.is('a')&& target.parents('.mainlevel').length > 0){
            target.siblings('.inferiorlevel').addClass('show hover');
        }
    });

    mainlevel.mouseleave(function(event) {
        let target = $(event.target);
        if (!target.is('.mainlevel')) {
            target = target.parents('.mainlevel');
        }
        target.find('.inferiorlevel').removeClass('show hover');
    });
    <!--侧拉菜单开始-->
    navdot.mouseenter(function(){
        $(this).find('.thirdlevel , .thirdlevelspecial , .thirdlevelspecial_copy , .thirdlevelspecial_copy2').addClass("imshow");
        $(this).addClass('hover');
    });
    navdot.mouseleave(function(){
        $(this).find(".thirdlevel , .thirdlevelspecial , .thirdlevelspecial_copy , .thirdlevelspecial_copy2").removeClass("imshow");
        $(this).removeClass('hover');
    });
};

/* 点击事件函数 */
function handleNewsItemClick(linkUrl) {
    return function() {
        // 执行点击事件的操作，例如跳转到目标链接
        window.location.href = linkUrl;
    };
}


