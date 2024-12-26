/**
 * 3218. 切蛋糕的最小总开销 I
 * 
 * 有一个 m x n 大小的矩形蛋糕，需要切成 1 x 1 的小块。

 * 给你整数 m ，n 和两个数组：

 *  * horizontalCut 的大小为 m - 1 ，其中 horizontalCut[i] 表示沿着水平线 i 切蛋糕的开销。
 *  * verticalCut 的大小为 n - 1 ，其中 verticalCut[j] 表示沿着垂直线 j 切蛋糕的开销。
 * 一次操作中，你可以选择任意不是 1 x 1 大小的矩形蛋糕并执行以下操作之一：

 * 1. 沿着水平线 i 切开蛋糕，开销为 horizontalCut[i] 。
 * 2. 沿着垂直线 j 切开蛋糕，开销为 verticalCut[j] 。
 * 每次操作后，这块蛋糕都被切成两个独立的小蛋糕。
 * 每次操作的开销都为最开始对应切割线的开销，并且不会改变。
 * 请你返回将蛋糕全部切成 1 x 1 的蛋糕块的 最小 总开销。
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function (m, n, horizontalCut, verticalCut) {
  const memo = new Array(m * m * n * n).fill(-1);
  const index = (row1, col1, row2, col2) => {
    return (row1 * n + col1) * m * n + row2 * n + col2;
  };

  const dp = (row1, col1, row2, col2) => {
    if (row1 === row2 && col1 === col2) {
      return 0;
    }
    const ind = index(row1, col1, row2, col2);
    if (memo[ind] >= 0) {
      return memo[ind];
    }

    memo[ind] = Number.MAX_SAFE_INTEGER;
    for (let i = row1; i < row2; i++) {
      memo[ind] = Math.min(
        memo[ind],
        dp(row1, col1, i, col2) + dp(i + 1, col1, row2, col2) + horizontalCut[i]
      );
    }
    for (let i = col1; i < col2; i++) {
      memo[ind] = Math.min(
        memo[ind],
        dp(row1, col1, row2, i) + dp(row1, i + 1, row2, col2) + verticalCut[i]
      );
    }
    return memo[ind];
  };

  return dp(0, 0, m - 1, n - 1);
};
