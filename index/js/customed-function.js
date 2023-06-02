/* 点击事件函数 */
function handleNewsItemClick(linkUrl) {
    return function() {
        // 执行点击事件的操作，例如跳转到目标链接
        window.location.href = linkUrl;
    };
}
