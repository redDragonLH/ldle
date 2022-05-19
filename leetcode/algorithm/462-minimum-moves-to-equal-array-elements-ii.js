/**
 * 462. 最少移动次数使数组元素相等 II
 *
 * 给你一个长度为 n 的整数数组 nums ，返回使所有数组元素相等需要的最少移动数。
 * 在一步操作中，你可以使数组中的一个元素加 1 或者减 1 。
 */

/**
 * 最优解有没有确定的
 *
 * 中位数
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let n = nums.length,
    x = quickSelect(nums, 0, n - 1, Math.floor(n / 2)),
    ret = 0;
  for (let i = 0; i < n; ++i) {
    ret += Math.abs(nums[i] - x);
  }
  return ret;
};
/**
 * 查找中位数
 */
const quickSelect = (nums, left, right, index) => {
  const q = randomPartition(nums, left, right);
  if (q === index) {
    return nums[q];
  } else {
    return q < index
      ? quickSelect(nums, q + 1, right, index)
      : quickSelect(nums, left, q - 1, index);
  }
};
// 随机分割
const randomPartition = (nums, left, right) => {
  const i = Math.floor(Math.random() * (right - left + 1)) + left;
  swap(nums, i, right);
  return partition(nums, left, right);
};

const partition = (nums, left, right) => {
  let x = nums[right],
    i = left - 1;
  for (let j = left; j < right; ++j) {
      // 小于right 
    if (nums[j] <= x) {
      ++i;
      swap(nums, i, j);
    }
  }
  swap(nums, i + 1, right);
  return i + 1;
};
/**
 * 交换元素位置
 * @param {*} nums 
 * @param {*} index1 
 * @param {*} index2 
 */
const swap = (nums, index1, index2) => {
  const temp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = temp;
};
