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
const range = [1, 8];
const arr = getOrderedArray(range);
const target = 8;
// 初始数据 end

// 二分算法 start
/**
 * @param {Number} target 要查找的目标数字
 * @param {Array} arr 要查找的数组
 */
function binary(target, arr) {
  let low = 0, // 左侧指针
    high = arr.length - 1, // 右侧指针
    count = 0; // 查找次数
  while (low <= high) {
    count++;
    // const i = low + Math.floor((high - low) / 2); // 自己实现时使用的取中间位置的方式，更好理解但多一次加法运算
    /**
     * 下面的公式实际上就是上面的公式演化了一步而已，演化过程为：
     * low + (high - low) / 2
     * = low + high/2 - low/2
     * = low/2 + high/2
     * = (low + high) / 2
     */
    const index = Math.floor((low + high) / 2);
    if (arr[index] === target) {
      return { // 在while中return可以直接return出函数
        count,
        index,
      }
    }
    if (arr[index] > target) {
      high = index - 1;
    }
    if (arr[index] < target) {
      low = index + 1;
    }
  }
  return { // 如果循环结束了没查找到
    count,
    index: -1,
  }
}
console.log(`要查找的元素是${target}，查找的数组是${arr}`);
const { count, index } = binary(target, arr);
console.log(`二分查找到元素的位置是：${index}，查找次数是${count}。`);
// 二分算法 end