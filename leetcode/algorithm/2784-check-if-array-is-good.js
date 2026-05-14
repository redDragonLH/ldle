/**
 * 2784. 检查数组是否是好的
 *
 * 给你一个整数数组 nums ，如果它是数组 base[n] 的一个排列，我们称它是个 好 数组。
 * base[n] = [1, 2, ..., n - 1, n, n] （换句话说，它是一个长度为 n + 1 且包含 1 到 n - 1 恰好各一次，包含 n  两次的一个数组）。比方说，base[1] = [1, 1] ，base[3] = [1, 2, 3, 3] 。
 * 如果数组是一个好数组，请你返回 true ，否则返回 false 。
 * 注意：数组的排列是这些数字按任意顺序排布后重新得到的数组。
 */

/**
 * 有点脑筋急转弯的意思,不过其实是将base[n]计算出来,然后和nums进行比较
 * 不对,乱序转顺序的一个过程,然后比较是否符合base规则
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  nums = s.sort((a, b) => a - b);
  let n = nums.length - 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] != i + 1) {
      return false;
    }
  }
  return nums[n] == n;
};
/**
 * 执行用时 :4 ms, 在所有 JavaScript 提交中击败了20.00%的用户
 * 内存消耗 :56.14 MB, 在所有 JavaScript 提交中击败了70.00%的用户
 */