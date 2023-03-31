/**
 * 2367. 算术三元组的数目
 *
 * 给你一个下标从 0 开始、严格递增 的整数数组 nums 和一个正整数 diff 。如果满足下述全部条件，则三元组 (i, j, k) 就是一个 算术三元组 ：
 *  * i < j < k ，
 *  * nums[j] - nums[i] == diff 且
 *  * nums[k] - nums[j] == diff
 * 返回不同 算术三元组 的数目。
 */

/**
 * 三层循环~~
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let len = nums.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) result++;
      }
    }
  }
  return result;
};
/**
 * 暴力遍历
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了54.44%的用户
 * 内存消耗：41.1 MB, 在所有 JavaScript 提交中击败了76.67%的用户
 */

/**
 * 优化: 哈希表
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  const set = new Set();
  // 把当前数据塞进去
  for (const x of nums) {
    set.add(x);
  }
  let ans = 0;
  for (const x of nums) {
    // 因为当前要求的其实是一个等差数列,而且使用减的,所以所要找的数据都在数组nums里面,所以
    // 可以用逆式查找所需用的另两个数
    // 也就是说在已知一个数的情况下可以同时找到另两个数
    if (set.has(x + diff) && set.has(x + 2 * diff)) {
      ans++;
    }
  }
  return ans;
};
/**
 * 题目隐藏着答案
 */