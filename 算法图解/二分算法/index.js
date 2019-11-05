// 数据准备工具方法 start
function getOrderedArray(range = [1, 10]) {
  const arr = [];
  for (let i = range[0]; i <= range[1]; i++) {
    arr.push(i);
  }
  return arr;
}
// 数据准备工具方法 end

// 初始数据 start
const range = [1, 10];
const arr = getOrderedArray(range);
const target = 8;
// 初始数据 end

// 二分算法 start
function binary() {
  
}
// 二分算法 end