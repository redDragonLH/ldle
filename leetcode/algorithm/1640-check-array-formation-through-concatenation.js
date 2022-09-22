/**
 * 1640. 能否连接形成数组
 *
 * 给你一个整数数组 arr ，数组中的每个整数 互不相同 。另有一个由整数数组构成的数组 pieces，其中的整数也 互不相同 。请你以 任意顺序 连接 pieces 中的数组以形成 arr 。但是，不允许 对每个数组 pieces[i] 中的整数重新排序。
 *
 * 如果可以连接 pieces 中的数组形成 arr ，返回 true ；否则，返回 false 。
 */

/**
 * 连接~~~
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  const n = arr.length,
    m = pieces.length;
  const index = new Map();
  // pieces[i][0]是key,i是value
  for (let i = 0; i < m; i++) {
    index.set(pieces[i][0], i);
  }
  for (let i = 0; i < n; ) {
    // 如果arr[i]不存在index里面,也就是key 没有arr
    if (!index.has(arr[i])) {
      return false; // 直接失败
    }
    const j = index.get(arr[i]), // 获取存在元素所在的 index
      len = pieces[j].length; // 
    for (let k = 0; k < len; k++) {
      if (arr[i + k] != pieces[j][k]) { // 顺序不能变的情况下由pieces的元素组成arr 
        return false;
      }
    }
    i = i + len;
  }
  return true;
};
