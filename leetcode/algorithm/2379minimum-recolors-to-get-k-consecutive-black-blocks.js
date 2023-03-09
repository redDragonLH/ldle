/**
 * 2379. 得到 K 个黑块的最少涂色次数
 *
 * 给你一个长度为 n 下标从 0 开始的字符串 blocks ，blocks[i] 要么是 'W' 要么是 'B' ，表示第 i 块的颜色。字符 'W' 和 'B' 分别表示白色和黑色。
 *
 * 给你一个整数 k ，表示想要 连续 黑色块的数目。
 *
 * 每一次操作中，你可以选择一个白色块将它 涂成 黑色块。
 *
 * 请你返回至少出现 一次 连续 k 个黑色块的 最少 操作次数。
 */

/**
 * 滑动窗口
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let left = 0;
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = k - 1; i < blocks.length; i++) {
    result = Math.min(count(blocks, left, i), result);
    left++;
  }
  return result;
};
const count = (array, left, right) => {
  let count = 0;
  for (let i = left; i <= right; i++) {
    if (array[i] === "W") {
      count++;
    }
  }
  return count;
};
/**
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了89.74%的用户
 * 内存消耗：41.3 MB, 在所有 JavaScript 提交中击败了74.36%的用户
 */
