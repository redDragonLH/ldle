/**
 * 3583. 统计特殊三元组
 *
 * 给你一个整数数组 nums。
 * 特殊三元组 定义为满足以下条件的下标三元组 (i, j, k)：
 *  * 0 <= i < j < k < n，其中 n = nums.length
 *  * nums[i] == nums[j] * 2
 *  * nums[k] == nums[j] * 2
 * 返回数组中 特殊三元组 的总数。
 * 由于答案可能非常大，请返回结果对 109 + 7 取余数后的值。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function (nums) {
  const MOD = 1e9 + 7;
  let n = nums.length;
  let ans = 0;

  // Map to count occurrences of each value to the left and right of j
  let left = new Map();
  let right = new Map();

  // Initialize right map with all counts except j
  for (let num of nums) {
    right.set(num, (right.get(num) || 0) + 1);
  }

  for (let j = 0; j < n; j++) {
    // Remove current nums[j] from right map
    right.set(nums[j], right.get(nums[j]) - 1);

    let target = nums[j] * 2;
    let leftCount = left.get(target) || 0;
    let rightCount = right.get(target) || 0;

    ans = (ans + leftCount * rightCount) % MOD;

    // Add current nums[j] to left map
    left.set(nums[j], (left.get(nums[j]) || 0) + 1);
  }

  return ans;
};
/**
 * 奇思妙想：
 * 使用两个哈希表分别记录当前元素左侧和右侧的元素出现次数。
 * 遍历数组时，计算以当前元素为中间元素的特殊三元组数量，并更新左右哈希表。
 * 执行用时 :302 ms, 在所有 JavaScript 提交中击败了47.06.00%的用户
 * 内存消耗 :90.13 MB, 在所有 JavaScript 提交中击败了90.20%的用户
 */