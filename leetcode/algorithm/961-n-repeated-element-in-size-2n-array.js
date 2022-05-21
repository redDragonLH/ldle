/**
 * 961. 在长度 2N 的数组中找出重复 N 次的元素
 *
 * 给你一个整数数组 nums ，该数组具有以下属性：
 *  * nums.length == 2 * n.
 *  * nums 包含 n + 1 个 不同的 元素
 *  * nums 中恰有一个元素重复 n 次
 * 找出并返回重复了 n 次的那个元素。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  let mapping = {};
  for (const iter of nums) {
    if (mapping[iter]) {
      return iter;
    }
    mapping[iter] = 1;
  }
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了83.45%的用户
 * 内存消耗：43.6 MB, 在所有 JavaScript 提交中击败了86.21%的用户
 */
