const a = [1, 5, 89, 6, 91, 2];

function sum(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log('循环>>>', total);
}

function recursiveSum(arr) {
  let tempArr = [...arr];
  let num = tempArr[0];
  if(tempArr.length === 1){
    return num;
  }
  tempArr.shift();
  return num + recursiveSum(tempArr);
}

sum(a);
console.log('递归>>>', recursiveSum(a));

function recursiveLength(arr) {
  let tempArr = [...arr];
  if(!tempArr[0]) {
    return 0;
  }
  tempArr.shift();
  return 1 + recursiveLength(tempArr);
}

console.log('递归求列表长度>>>', recursiveLength(a));

function cycleMax(arr) {
  let max = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
}

/**
 * 递归求最大值的思路相当于依次把数组的第一个元素拿出来，和剩余数组中的最大值比较大小
 * 基线条件是数组长度为1，此时取出数组中唯一一个元素，直接比较大小
 * 每次递归执行完返回到上一层递归时，返回的结果作为该数组中的最大值参与比较
 */
function recursiveMax(arr, n) {
  let max = 0;
  if(n === 1) {
    return arr[0];
  }
  let t = recursiveMax(arr, n - 1);
  max = arr[0] < t ? t : arr[0];
  arr.shift();
  return max;
}

console.log('循环求最大值>>>', cycleMax(a));
console.log('递归求最大值>>>', recursiveMax(a, a.length));