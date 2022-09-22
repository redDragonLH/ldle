/**
 * 1640. 能否连接形成数组
 *
 * 给你一个整数数组 arr ，数组中的每个整数 互不相同 。另有一个由整数数组构成的数组 pieces，其中的整数也 互不相同 。请你以 任意顺序 连接 pieces 中的数组以形成 arr 。但是，不允许 对每个数组 pieces[i] 中的整数重新排序。
 *
 * 如果可以连接 pieces 中的数组形成 arr ，返回 true ；否则，返回 false 。
 */

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  const n = arr.length,
    m = pieces.length;
  const index = new Map();
  for (let i = 0; i < m; i++) {
    index.set(pieces[i][0], i);
  }
  for (let i = 0; i < n; ) {
    if (!index.has(arr[i])) {
      return false;
    }
    const j = index.get(arr[i]),
      len = pieces[j].length;
    for (let k = 0; k < len; k++) {
      if (arr[i + k] != pieces[j][k]) {
        return false;
      }
    }
    i = i + len;
  }
  return true;
};
