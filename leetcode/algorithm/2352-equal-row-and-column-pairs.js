/**
 * 2352. 相等行列对
 *
 * 给你一个下标从 0 开始、大小为 n x n 的整数矩阵 grid ，返回满足 Ri 行和 Cj 列相等的行列对 (Ri, Cj) 的数目。
 *
 * 如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的。
 */

/**
 * 官方题解也是模拟,这就~~
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;
  const cnt = {};

  for (const row of grid) {
    // 把每行转为字符串存起来
    const rowStr = row.toString();
    // 重复的就把数量加一
    cnt[rowStr] = (cnt[rowStr] || 0) + 1;
  }

  let res = 0;
  for (let j = 0; j < n; j++) {
    const arr = [];
    // 列转字符串
    for (let i = 0; i < n; i++) {
      arr.push(grid[i][j]);
    }
    const arrStr = arr.toString();
    // 比较就好了
    if (cnt[arrStr]) {
      res += cnt[arrStr];
    }
  }

  return res;
};
