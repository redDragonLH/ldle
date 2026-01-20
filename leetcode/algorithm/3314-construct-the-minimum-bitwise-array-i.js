/**
 * 3314. 构造最小位运算数组 I
 *
 * 给你一个长度为 n 的质数数组 nums 。你的任务是返回一个长度为 n 的数组 ans ，对于每个下标 i ，以下 条件 均成立：
 *  * ans[i] OR (ans[i] + 1) == nums[i]
 * 除此以外，你需要 最小化 结果数组里每一个 ans[i] 。
 * 如果没法找到符合 条件 的 ans[i] ，那么 ans[i] = -1 。
 * 质数 指的是一个大于 1 的自然数，且它只有 1 和自己两个因数。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
  const ans = [];
  for (const n of nums) {
    let x = -1;
    for (let i = 0; i < n; i++) {
      if ((i | (i + 1)) === n) {
        x = i;
        break;
      }
    }
    ans.push(x);
  }
  return ans;
};
/**
 * 执行用时 :2 ms, 在所有 JavaScript 提交中击败了77.78%的用户
 * 内存消耗 :58.04 MB, 在所有 JavaScript 提交中击败了55.56%的用户
 */