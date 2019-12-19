const a = [1, 4, 5, 7, 689, 8, 22, 21, 6, 45, 122, 1, 5, 21, 215, 12, 45];

/**
 * 选择排序
 * 原理：
 * 现有无序数组A，要对A进行从大到小的排序。则先新建一个数组B，然后开始进行排序：遍历A，找到A中此时最大的值，将此值推入B，并在A中剔除，然后再次上述操作，直到所有的元素都被处理完毕。
 */
function selectionSort(originArr) {
  const arr = [...originArr];
  let result = [];
  while (arr.length) {
    let max = arr[0];
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
        maxIndex = i;
      }
    }
    result.push(max);
    arr.splice(maxIndex, 1);
  }
  console.log('selection sort>>>', result);
}

selectionSort(a);

/**
 * 快速排序
 * 涉及原理：递归、D&C、归纳证明
 * 基线条件：对于包含0个或1个元素的数组，原样返回即可，无需排序
 * 归纳条件：对于包含多个元素的数组，选择某一元素作为基线值，将数组划分为 `[小于基线值的元素集合], [基线值元素], [大于基线值的元素集合]`三个子数组
 * 对于子数组再次执行快速排序，最后将结果拼接即可得到排序结果
 */
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let base = arr.shift();
  // 从循环两遍变成循环一遍
  // const minArr = arr.filter(n => n <= base);
  // const maxArr = arr.filter(n => n > base);
  let minArr = [];
  let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      minArr.push(arr[i]);
    } else {// arr[i]>= base 
      // 把等于归并到大于的情况里是为了增加算法稳定性
      // 因为每次取值取的都是数组中第一个值，如果将相等元素放在数组左侧，则相当于将相等元素的位置进行交换
      maxArr.push(arr[i]);
    }
  }
  return [...quickSort(minArr), base, ...quickSort(maxArr)];
}

console.log('quick sort>>>', quickSort(a));

/**
 * 归并排序
 * 原理：分治法
 * 将数组不停对半拆分至长度小于2的粒度，此时可以直接排序
 * 将排序好并返回的子数组按次序合并
 * 
 * 合并方法：
 * 使用左、右两个指针分别指向左右两个子数组的起始位置，然后开始比较大小
 * 较小的元素推入合并数组，且此数组指针+1
 * 当有一边的数组处理完毕时，退出比较循环
 * 此时将未处理完的数组直接推入合并数组末尾
 */
function mergeSort(originArr) {
  const arr = [...originArr];
  if (arr.length === 2) {
    if (arr[0] < arr[1]) {
      return arr;
    } else {
      return [arr[1], arr[0]]
    }
  }
  if (arr.length < 2) {
    return arr;
  }
  const baseIndex = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, baseIndex));
  const rightArr = mergeSort(arr.slice(baseIndex, arr.length));
  let mergeArr = [];
  let l = 0; // 左指针，指向当前处理元素，值为leftArr.length时才代表左数组处理完毕
  let r = 0; // 右指针，指向当前处理元素，值为rightArr.length时才代表右数组处理完毕
  // 循环比较元素大小，将较小的元素推入合并数组，且只要左右数组中有一个数组处理完毕就退出循环
  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] <= rightArr[r]) {
      mergeArr.push(leftArr[l]);
      l++;
    } else if (leftArr[l] > rightArr[r]) {
      mergeArr.push(rightArr[r]);
      r++;
    }
  }
  // 将未处理到的元素直接推入末尾即可
  if (l < leftArr.length) {
    mergeArr = [...mergeArr, ...leftArr.slice(l, leftArr.length)]
  }
  if (r < rightArr.length) {
    mergeArr = [...mergeArr, ...rightArr.slice(r, rightArr.length)]
  }
  return mergeArr;
}

console.log('merge sort>>>', mergeSort(a));