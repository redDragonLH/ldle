/**
 * 3531. 统计被覆盖的建筑
 *
 * 给你一个正整数 n，表示一个 n x n 的城市，同时给定一个二维数组 buildings，其中 buildings[i] = [x, y] 表示位于坐标 [x, y] 的一个 唯一 建筑。
 * 如果一个建筑在四个方向（左、右、上、下）中每个方向上都至少存在一个建筑，则称该建筑 被覆盖 。
 * 返回 被覆盖 的建筑数量。
 */
/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function (n, buildings) {
  const m = buildings.length;
  const grid = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  // 标记建筑物位置
  for (const [x, y] of buildings) {
    grid[x][y] = 1;
  }
  let coveredCount = 0;

  // 检查每个建筑物是否被覆盖
  for (const [x, y] of buildings) {
    let left = false,
      right = false,
      up = false,
      down = false;
    // 检查左侧
    for (let j = y - 1; j >= 1; j--) {
      if (grid[x][j] === 1) {
        left = true;
        break;
      }
    }
    // 检查右侧
    for (let j = y + 1; j <= n; j++) {
      if (grid[x][j] === 1) {
        right = true;
        break;
      }
    }
    // 检查上方
    for (let i = x - 1; i >= 1; i--) {
      if (grid[i][y] === 1) {
        up = true;
        break;
      }
    }
    // 检查下方
    for (let i = x + 1; i <= n; i++) {
      if (grid[i][y] === 1) {
        down = true;
        break;
      }
    }
    if (left && right && up && down) {
      coveredCount++;
    }
  }

  return coveredCount;
};
/**
 * 超时
 */
/**
 * 官方题解：模拟
 * 有点类似前缀和的逻辑
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function (n, buildings) {
  const maxRow = new Array(n + 1).fill(0);
  const minRow = new Array(n + 1).fill(n + 1);
  const maxCol = new Array(n + 1).fill(0);
  const minCol = new Array(n + 1).fill(n + 1);

  for (const p of buildings) {
    const x = p[0],
      y = p[1];
    maxRow[y] = Math.max(maxRow[y], x);
    minRow[y] = Math.min(minRow[y], x);
    maxCol[x] = Math.max(maxCol[x], y);
    minCol[x] = Math.min(minCol[x], y);
  }

  let res = 0;
  for (const p of buildings) {
    const x = p[0],
      y = p[1];
    if (x > minRow[y] && x < maxRow[y] && y > minCol[x] && y < maxCol[x]) {
      res++;
    }
  }

  return res;
};
/**
 * 执行用时：79 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：97.37 MB, 在所有 JavaScript 提交中击败了33.33%的用户
 */