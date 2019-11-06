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
const range = [1, 16];
const arr = getOrderedArray(range);
const target = 16;
// 初始数据 end

// 二分算法 start
/**
 * @param {Number} target 要查找的目标数字
 * @param {Array} arr 要查找的数组
 */
function binary(target, arr) {
  let low = 0, // 左侧指针
    high = arr.length - 1, // 右侧指针
    count = 0,
    index = -1; // 查找次数
  while (low <= high) {
    count++;
    const i = low + Math.floor((high - low) / 2);
    if (arr[i] === target) {
      index = i;
      break;
    }
    if (arr[i] > target) {
      high = i - 1;
    }
    if (arr[i] < target) {
      low = i + 1;
    }
  }
  return {
    count,
    index,
  }
}
console.log(`要查找的元素是${target}，查找的数组是${arr}`);
const { count, index } = binary(target, arr);
console.log(`二分查找到元素的位置是：${index}，查找次数是${count}。`);
// 二分算法 end