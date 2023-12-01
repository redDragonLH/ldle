/**
 * 2661. 找出叠涂元素
 *
 * 给你一个下标从 0 开始的整数数组 arr 和一个 m x n 的整数 矩阵 mat 。arr 和 mat 都包含范围 [1，m * n] 内的 所有 整数。
 *
 * 从下标 0 开始遍历 arr 中的每个下标 i ，并将包含整数 arr[i] 的 mat 单元格涂色。
 *
 * 请你找出 arr 中在 mat 的某一行或某一列上都被涂色且下标最小的元素，并返回其下标 i 。
 */
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function (arr, mat) {
  let n = mat.length,
    m = mat[0].length;
  let mp = new Map();
  // 把元素内容与位置使用hash表关联起来
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      mp.set(mat[i][j], [i, j]);
    }
  }
  let rowCnt = new Array(n).fill(0);
  let colCnt = new Array(m).fill(0);
  // arr 表里是 mat 表中元素内容
  for (let i = 0; i < arr.length; i++) {
    // 获取元素的位置
    let v = mp.get(arr[i]);
    // 横排判断,如果长度达到顶峰就返回
    rowCnt[v[0]]++;
    if (rowCnt[v[0]] == m) {
      return i;
    }
    // 竖排判断, 长度达到最高就返回
    colCnt[v[1]]++;
    if (colCnt[v[1]] == n) {
      return i;
    }
  }
  return -1;
};
