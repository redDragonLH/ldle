/**
 * 1039. 多边形三角剖分的最低得分
 *
 * 你有一个凸的 n 边形，其每个顶点都有一个整数值。给定一个整数数组 values ，其中 values[i] 是第 i 个顶点的值（即 顺时针顺序 ）。
 * 假设将多边形 剖分 为 n - 2 个三角形。对于每个三角形，该三角形的值是顶点标记的乘积，三角剖分的分数是进行三角剖分后所有 n - 2 个三角形的值之和。
 * 返回 多边形进行三角剖分后可以得到的最低分 。
 */
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
  const n = values.length;
  const memo = new Map();
  const dp = (i, j) => {
    if (i + 2 > j) {
      return 0;
    }
    if (i + 2 === j) {
      return values[i] * values[i + 1] * values[j];
    }
    const key = i * n + j;
    if (!memo.has(key)) {
      let minScore = Number.MAX_VALUE;
      for (let k = i + 1; k < j; k++) {
        minScore = Math.min(
          minScore,
          values[i] * values[k] * values[j] + dp(i, k) + dp(k, j)
        );
      }
      memo.set(key, minScore);
    }
    return memo.get(key);
  };
  return dp(0, n - 1);
};
