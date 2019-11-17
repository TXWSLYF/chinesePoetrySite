// 获取 DOM 元素
var searchBtnEl = document.querySelector('#searchBtn');
var searchInputEl = document.querySelector('#searchInput');

// 编写跳转逻辑
function goToSearch() {
  // 从输入框获取关键字
  var keyWord = searchInputEl.value;

  // 组装 url
  var url = './search.html' + '?' + 'keyWord=' + keyWord;

  // 跳转页面
  window.open(url, '__blank');
}

// 绑定确定按钮点击事件
searchBtnEl.addEventListener('click', goToSearch);

// 绑定键盘按键事件
searchInputEl.addEventListener('keydown', function (e) {
  // 根据 keyCode 判断按键，回车键为13
  if (e.keyCode === 13) {
    goToSearch();
  }
})
