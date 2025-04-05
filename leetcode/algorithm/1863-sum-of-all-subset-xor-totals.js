/**
 * 1863. 找出所有子集的异或总和再求和
 *
 * 一个数组的 异或总和 定义为数组中所有元素按位 XOR 的结果；如果数组为 空 ，则异或总和为 0 。
 *  * 例如，数组 [2,5,6] 的 异或总和 为 2 XOR 5 XOR 6 = 1 。
 * 给你一个数组 nums ，请你求出 nums 中每个 子集 的 异或总和 ，计算并返回这些值相加之 和 。
 * 注意：在本题中，元素 相同 的不同子集应 多次 计数。
 * 数组 a 是数组 b 的一个 子集 的前提条件是：从 b 删除几个（也可能不删除）元素能够得到 a 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  // 1. 先求出所有子集
  // 2. 求出每个子集的异或总和
  // 3. 求出所有子集的异或总和之和
  let sum = 0;
  let n = nums.length;

  for (let i = 0; i < 1 << n; i++) {
    let xor = 0;
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        xor ^= nums[j];
      }
    }
    sum += xor;
  }
  return sum;
};
/**
 * 执行用时：6 ms, 在所有 JavaScript 提交中击败了34.43%的用户
 * 内存消耗：55.77 MB, 在所有 JavaScript 提交中击败了9.84%的用户
 */