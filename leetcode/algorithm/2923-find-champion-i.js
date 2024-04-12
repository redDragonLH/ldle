/**
 * 2923. 找到冠军 I
 *
 * 一场比赛中共有 n 支队伍，按从 0 到  n - 1 编号。
 * 给你一个下标从 0 开始、大小为 n * n 的二维布尔矩阵 grid 。对于满足 0 <= i, j <= n - 1 且 i != j 的所有 i, j ：如果 grid[i][j] == 1，那么 i 队比 j 队 强 ；否则，j 队比 i 队 强 。
 * 在这场比赛中，如果不存在某支强于 a 队的队伍，则认为 a 队将会是 冠军 。
 * 返回这场比赛中将会成为冠军的队伍。
 */

/**
 * 差点被描述晃过去,就遍历当前元素,i===1就给i 加一份,否则给j加一分然后排序或或得最大值
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
  let row = grid.length;
  let scores = new Array(row).fill(0);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < row; j++) {
      if (i === j) continue;
      if (grid[i][j] === 1) {
        scores[i]++;
      } else {
        scores[j]++;
      }
    }
  }

  return scores.indexOf(Math.max(...scores));
};
/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了13.04%的用户
 * 内存消耗：54.12 MB, 在所有 JavaScript 提交中击败了47.83%的用户
 */