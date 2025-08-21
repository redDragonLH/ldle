/**
 * 1504. 统计全 1 子矩形
 *
 * 给你一个 m x n 的二进制矩阵 mat ，请你返回有多少个 子矩形 的元素全部都是 1 。
 */
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  const n = mat[0].length;
  const heights = new Array(n).fill(0); // heights[i] 表示第 i 列到当前行为止连续 1 的高度
  let res = 0;
  for (const row of mat) {
    // 更新每一列的高度
    for (let i = 0; i < n; i++) {
      heights[i] = row[i] === 0 ? 0 : heights[i] + 1;
    }
    // 单调栈统计以当前行为底的所有全 1 子矩形数量
    // stack: [列索引, 以该列为右端点的子矩形数量, 高度]
    const stack = [[-1, 0, -1]];
    for (let i = 0; i < n; i++) {
      const h = heights[i];
      // 保持栈中高度递增
      while (stack[stack.length - 1][2] >= h) {
        stack.pop();
      }
      const [j, prev] = stack[stack.length - 1];
      // 以当前列为右端点的子矩形数量
      const cur = prev + (i - j) * h;
      stack.push([i, cur, h]);
      res += cur; // 累加结果
    }
  }
  return res;
};
