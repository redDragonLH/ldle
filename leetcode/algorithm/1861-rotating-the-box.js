/**
 * 1861. 旋转盒子
 *
 * 给你一个 m x n 的字符矩阵 boxGrid ，它表示一个箱子的侧视图。箱子的每一个格子可能为：
 *  * '#' 表示石头
 *  * '*' 表示固定的障碍物
 *  * '.' 表示空位置
 * 这个箱子被 顺时针旋转 90 度 ，由于重力原因，部分石头的位置会发生改变。每个石头会垂直掉落，直到它遇到障碍物，另一个石头或者箱子的底部。重力 不会 影响障碍物的位置，同时箱子旋转不会产生惯性 ，也就是说石头的水平位置不会发生改变。
 * 题目保证初始时 boxGrid 中的石头要么在一个障碍物上，要么在另一个石头上，要么在箱子的底部。
 * 请你返回一个 n x m 的矩阵，表示按照上述旋转后，箱子内的结果。
 */
/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
  const m = boxGrid.length,
    n = boxGrid[0].length;
  // 旋转后矩阵的行数是原矩阵的列数，旋转后矩阵的列数是原矩阵的行数
  const ans = Array.from({ length: n }, () => Array(m));
  for (let i = 0; i < m; i++) {
    const row = boxGrid[i];
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      let ch = row[j];
      if (ch === "#") {
        // 石头
        cnt++;
        ch = "."; // 先把石头清空
      }
      ans[j][m - 1 - i] = ch;
      if (j === n - 1 || row[j + 1] === "*") {
        // 下一个格子是障碍物
        // 石头垂直掉落后，从 j 往前 cnt 个格子都是石头
        for (let k = j; k > j - cnt; k--) {
          ans[k][m - 1 - i] = "#";
        }
        cnt = 0; // 重置计数器
      }
    }
  }

  return ans;
};
/**
 * 执行用时 :17 ms, 在所有 JavaScript 提交中击败了66.67%的用户
 * 内存消耗 :80.01 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */