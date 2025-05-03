/**
 * 1007. 行相等的最少多米诺旋转
 *
 * 在一排多米诺骨牌中，tops[i] 和 bottoms[i] 分别代表第 i 个多米诺骨牌的上半部分和下半部分。（一个多米诺是两个从 1 到 6 的数字同列平铺形成的 —— 该平铺的每一半上都有一个数字。）
 * 我们可以旋转第 i 张多米诺，使得 tops[i] 和 bottoms[i] 的值交换。
 * 返回能使 tops 中所有值或者 bottoms 中所有值都相同的最小旋转次数。
 * 如果无法做到，返回 -1.
 */

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
  const n = tops.length;
  const check = (x) => {
    let top = 0,
      bottom = 0;
    for (let i = 0; i < n; i++) {
      if (tops[i] !== x && bottoms[i] !== x) return -1;
      if (tops[i] === x) top++;
      if (bottoms[i] === x) bottom++;
    }
    return Math.min(n - top, n - bottom);
  };
  const res1 = check(tops[0]);
  const res2 = check(bottoms[0]);
  if (res1 === -1 && res2 === -1) return -1;
  if (res1 === -1) return res2;
  if (res2 === -1) return res1;
  return Math.min(res1, res2);
};
/**
 * 执行用时：4 ms, 在所有 JavaScript 提交中击败了76.92%的用户
 * 内存消耗：64.33 MB, 在所有 JavaScript 提交中击败了15.38%的用户
 */