/**
 * 498. 对角线遍历
 *
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 */

/**
 * 官方题解: 直接模拟
 * 根据题目要求,矩阵按照对角线进行遍历.设矩阵的行数为m.矩阵的列数为n,观察对角线遍历的规律可以得到如下信息
 *  * 一共有 m + n-1条对角线,相邻的对角线的遍历方向不同,当前遍历方向为从左下到右上,则紧挨着的下一条对角线遍历方向为右上到左下
 *  * 设对角线从上到下的编号为 i ∈ [0,m + n -2]:
 *      * 当 i 为偶数时,则第 i 条对角线的走向时从下往上遍历
 *      * 当 i 为奇数时,则第 i 条对角线的走向时从上往下遍历
 *  * 当第i条对角线从下往上遍历时,每次行索引减 1,列索引加 1,直到矩阵边缘为止
 *      * 当 i < m 时,则此时对角线遍历的起点位置为(i,0)
 *      * 当 i ≥ m 时,则此时对角线遍历的起点位置为(m-1,i-m+1)
 *  * 当第 i 条对角线从上往下遍历时,每次行索引加1,列索引减1,直到矩阵的边缘为止:
 *      * 当 i < n 时,则此时对角线遍历的起点位置为(0,i)
 *      * 当 i ≥ n 时,则此时对角线遍历的起点位置为(i-n+1,n-1)
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const res = new Array(m * n).fill(0);
  let pos = 0;
  for (let i = 0; i < m + n - 1; i++) {
    if (i % 2 === 1) {
      let x = i < n ? 0 : i - n + 1;
      let y = i < n ? i : n - 1;
      while (x < m && y >= 0) {
        res[pos] = mat[x][y];
        pos++;
        x++;
        y--;
      }
    } else {
      let x = i < m ? i : m - 1;
      let y = i < m ? 0 : i - m + 1;
      while (x >= 0 && y < n) {
        res[pos] = mat[x][y];
        pos++;
        x--;
        y++;
      }
    }
  }
  return res;
};
