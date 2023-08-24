/**
 * 1267. 统计参与通信的服务器
 *
 * 这里有一幅服务器分布图，服务器的位置标识在 m * n 的整数矩阵网格 grid 中，1 表示单元格上有服务器，0 表示没有。
 *
 * 如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。
 *
 * 请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量。
 */
/**
 * 直观点的就是找到服务器然后四向遍历,但是应该不至于,可以按顺序遍历,然后检查是否在一层上
 * 广度优先 遍历
 * @param {number[][]} grid
 * @return {number}
 */
const direction = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];
var countServers = function (grid) {
  let mLen = grid.length,
    nLen = grid[0].length;

  let result = 0;
  let connectedPoint = [];
  for (let i = 0; i < mLen; i++) {
    for (let j = 0; j < nLen; j++) {
      if (grid[[i][j]]) {
        // 在里面往四个方向走,然后判断是否到达边界以及是否重复
      }
    }
  }
  return result;
};

/**
 * 两次遍历 + 哈希表
 * 
 * 这个思路有些抽象
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  const rows = new Map();
  const cols = new Map();
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] == 1) {
        // 计算每行、列里面分别有多少元素
        rows.set(i, (rows.get(i) || 0) + 1);
        cols.set(j, (cols.get(j) || 0) + 1);
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
        // 是否把当前服务器加入到结果
        // 当前位置以及他的上下左右有服务器,那就加入进去
      if (
        grid[i][j] == 1 &&
        ((rows.get(i) || 0) > 1 || (cols.get(j) || 0) > 1)
      ) {
        
        ++ans;
      }
    }
  }
  return ans;
};
