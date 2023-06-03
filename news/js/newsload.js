/* 新闻模块加载函数 */
function loadNewsModule(filepath) {
    fetch(filepath)
        .then(response => response.text())
        .then(data => {
            // 将filepath的内容插入到所有具有class为"news-module"的<div>中
            const newsModules = document.getElementsByClassName('page1');
            for (let i = 0; i < newsModules.length; i++) {
                newsModules[i].innerHTML = data;
            }
        });
}

/* 通告模块加载函数 */
function loadDocumentModule(filepath) {
    fetch(filepath)
        .then(response => response.text())
        .then(data => {
            // 将filepath的内容插入到所有具有class为"news-module"的<div>中
            const newsModules = document.getElementsByClassName('document1');
            for (let i = 0; i < newsModules.length; i++) {
                newsModules[i].innerHTML = data;
            }
        });
}



