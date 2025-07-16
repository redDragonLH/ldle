/**
 * 3201. 找出有效子序列的最大长度 I
 *
 * 给你一个整数数组 nums。
 * nums 的子序列 sub 的长度为 x ，如果其满足以下条件，则称其为 有效子序列：
 *  * (sub[0] + sub[1]) % 2 == (sub[1] + sub[2]) % 2 == ... == (sub[x - 2] + sub[x - 1]) % 2
 * 返回 nums 的 最长的有效子序列 的长度。
 * 一个 子序列 指的是从原数组中删除一些元素（也可以不删除任何元素），剩余元素保持原来顺序组成的新数组。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  let res = 0; // 初始化结果变量，记录最长有效子序列长度
  const patterns = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ]; // 枚举所有可能的奇偶模式（0表示偶数，1表示奇数）
  for (const pattern of patterns) {
    // 遍历每一种奇偶模式
    let cnt = 0; // 当前模式下的计数器，记录匹配的子序列长度
    for (const num of nums) {
      // 遍历数组中的每个数字
      if (num % 2 === pattern[cnt % 2]) {
        // 判断当前数字的奇偶性是否与当前模式匹配
        cnt++; // 匹配则子序列长度加一
      }
    }
    res = Math.max(res, cnt); // 更新最大子序列长度
  }
  return res; // 返回最大有效子序列长度
};
/**
 * 执行用时：23 ms, 在所有 JavaScript 提交中击败了0%的用户
 * 内存消耗：68.46 MB, 在所有 JavaScript 提交中击败了75.00%的用户
 */