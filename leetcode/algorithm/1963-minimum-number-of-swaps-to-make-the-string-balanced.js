/**
 * 1963. 使字符串平衡的最小交换次数
 *
 * 给你一个字符串 s ，下标从 0 开始 ，且长度为偶数 n 。字符串 恰好 由 n / 2 个开括号 '[' 和 n / 2 个闭括号 ']' 组成。
 * 只有能满足下述所有条件的字符串才能称为 平衡字符串 ：
 *  * 字符串是一个空字符串，或者
 *  * 字符串可以记作 AB ，其中 A 和 B 都是 平衡字符串 ，或者
 *  * 字符串可以写成 [C] ，其中 C 是一个 平衡字符串 。
 *  * 你可以交换 任意 两个下标所对应的括号 任意 次数。
 * 返回使 s 变成 平衡字符串 所需要的 最小 交换次数。
 */

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let imbalance = 0,
    maxImbalance = 0;
  for (let char of s) {
    if (char === "[") {
      imbalance++;
    } else {
      imbalance--;
    }
    maxImbalance = Math.max(maxImbalance, -imbalance);
  }
  return Math.ceil(maxImbalance / 2);
};
/**
 * 这道题的解法竟然如此简单.
 * 核心就是找到哪些不对称,以直接遍历的方式.
 * 
 * 执行用时：30 ms, 在所有 JavaScript 提交中击败了55.56%的用户
 * 内存消耗：64.57 MB, 在所有 JavaScript 提交中击败了66.67%的用户
 */