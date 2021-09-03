/**
 * 面试题 17.14. 最小K个数
 *
 * 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
 */

/**
 * 用小顶堆最好了啦
 * 不过先用排序实现一下
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
  arr.sort((a, b) => a - b);
  let result = [];
  while (k) {
    result.push(arr.shift());
    k--;
  }
  return result;
};
/**
 * 竟然没超时,绝了
 * 执行用时：7780 ms, 在所有 JavaScript 提交中击败了5.01%
 * 的用户内存消耗：45.4 MB, 在所有 JavaScript 提交中击败了22.12%的用户
 */

/**
 * 官方题解: 快速排序
 *
 * 可以借鉴快速排序的思想,快排的划分函数每次执行完后都能将数组分成两个部分,小于等于分界值pivot 的元素都会被放到数组的左边,大于的都会被放到数组的右边,然后返回分界值的下标,
 * 与快速排序不同的是,快速排序会根据分界值的下标递归处理划分的两侧,而这里只处理划分的一边
 * 
 * 定义函数 randomized_selected(arr,l,r,k) 表示划分数组 arr 的 [l,r]部分,使前k小的数载数组的左侧,在函数里调用快排的划分函数,假设划分函数返回的下标是 pos (表示分界值  pivot 
 * 最终在数组中的位置), 即 pivot 是数组中第 pos - l + 1小的数,那么一共会有三种情况
 *  * 如果 pos -l +1 === k,表示 pivot 就是第k小的数,直接返回即可
 *  * 如果  pos - l + 1 < k,表示第 k 小的数在 pivot 的右侧,因此递归调用 randomized_selected(arr, pos + 1, r, k - (pos - l + 1));
 *  * 如果 pos - l + 1 > k,表示第k小的数载pivot 的左侧,递归调用 randomized_selected(arr, l, pos - 1, k)
 */

var smallestK = function (arr, k) {
  randomizedSelected(arr, 0, arr.length - 1, k);
  return arr.slice(0, k);
};

const randomizedSelected = (arr, l, r, k) => {
  if (l >= r) {
    return;
  }
  const pos = randomizedPartition(arr, l, r);
  const num = pos - l + 1;
  if (k === num) {
    return;
  } else if (k < num) {
    randomizedSelected(arr, l, pos - 1, k);
  } else {
    randomizedSelected(arr, pos + 1, r, k - num);
  }
};

// 基于随机的划分
const randomizedPartition = (nums, l, r) => {
  // 随机一个数字,
  const i = parseInt(Math.random() * (r - l + 1)) + l;
  swap(nums, r, i);
  return partition(nums, l, r);
};

const partition = (nums, l, r) => {
  const pivot = nums[r];
  let i = l - 1;
  for (let j = l; j <= r - 1; ++j) {
    if (nums[j] <= pivot) {
      i = i + 1;
      swap(nums, i, j);
    }
  }
  swap(nums, i + 1, r);
  return i + 1;
};

const swap = (nums, i, j) => {
    // 交换两个下标数据位置
  [nums[i], nums[j]] = [nums[j], nums[i]];
};
