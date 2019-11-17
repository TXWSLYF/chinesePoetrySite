// 获取 DOM 元素
var searchBtnEl = document.querySelector('#searchBtn');
var searchInputEl = document.querySelector('#searchInput');

// 绑定点击事件
function handleSearchBtnClick() {
  // 从 input 组件获取关键字
  var keyWord = searchInputEl.value;

  // 组装 url
  var url = './search.html' + '?' + 'keyWord=' + keyWord;

  // 跳转页面
  window.open(url, '__blank');
}

searchBtnEl.addEventListener('click', handleSearchBtnClick);
