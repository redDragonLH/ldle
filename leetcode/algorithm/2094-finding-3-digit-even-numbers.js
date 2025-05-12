/**
 * 2094. 找出 3 位偶数
 *
 * 给你一个整数数组 digits ，其中每个元素是一个数字（0 - 9）。数组中可能存在重复元素。
 * 你需要找出 所有 满足下述条件且 互不相同 的整数：
 *  * 该整数由 digits 中的三个元素按 任意 顺序 依次连接 组成。
 *  * 该整数不含 前导零
 *  * 该整数是一个 偶数
 * 例如，给定的 digits 是 [1, 2, 3] ，整数 132 和 312 满足上面列出的全部条件。
 * 将找出的所有互不相同的整数按 递增顺序 排列，并以数组形式返回。
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  const n = digits.length;
  const ans = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (i !== j && j !== k && i !== k) {
          const num = digits[i] * 100 + digits[j] * 10 + digits[k];
          if (num % 2 === 0 && digits[i] !== 0) {
            ans.add(num);
          }
        }
      }
    }
  }
  return Array.from(ans).sort((a, b) => a - b);
};
/**
 * 这解法都能过~~
 * 执行用时：224 ms, 在所有 JavaScript 提交中击败了25.00%的用户
 * 内存消耗：57.95 MB, 在所有 JavaScript 提交中击败了70.00%的用户
 */
