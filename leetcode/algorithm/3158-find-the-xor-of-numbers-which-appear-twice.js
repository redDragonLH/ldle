/**
 * 3158. 求出出现两次数字的 XOR 值
 *
 * 给你一个数组 nums ，数组中的数字 要么 出现一次，要么 出现两次。
 * 请你返回数组中所有出现两次数字的按位 XOR 值，如果没有数字出现过两次，返回 0 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  let set = new Set();
  // let twice = []
  let result = 0;
  for (const num of nums) {
    if (set.has(num)) {
      if (result === 0) {
        result = num;
      } else {
        result ^= num;
      }
    } else {
      set.add(num);
    }
  }
  return result;
};
/**
 * 执行用时：73 ms, 在所有 JavaScript 提交中击败了60.61%的用户
 * 内存消耗：51.45 MB, 在所有 JavaScript 提交中击败了72.73%的用户
 */