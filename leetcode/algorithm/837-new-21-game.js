/**
 * 837. 新 21 点
 *
 * 爱丽丝参与一个大致基于纸牌游戏 “21点” 规则的游戏，描述如下：
 * 爱丽丝以 0 分开始，并在她的得分少于 k 分时抽取数字。 抽取时，她从 [1, maxPts] 的范围中随机获得一个整数作为分数进行累计，其中 maxPts 是一个整数。 每次抽取都是独立的，其结果具有相同的概率。
 * 当爱丽丝获得 k 分 或更多分 时，她就停止抽取数字。
 * 爱丽丝的分数不超过 n 的概率是多少？
 * 与实际答案误差不超过 10-5 的答案将被视为正确答案。
 */
/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
  if (k === 0 || n >= k + maxPts) return 1.0;
  if (n < k) return 0.0;

  let dp = new Array(n + 1).fill(0);
  dp[0] = 1.0; // 初始分数为0的概率为1

  let windowSum = dp[0]; // 窗口和
  for (let i = 1; i <= n; i++) {
    dp[i] = windowSum / maxPts; // 当前分数的概率是窗口和除以maxPts
    if (i < k) {
      windowSum += dp[i]; // 更新窗口和
    }
    if (i - maxPts >= 0) {
      windowSum -= dp[i - maxPts]; // 移除超出窗口的值
    }
  }

  let result = 0;
  for (let i = k; i <= n; i++) {
    result += dp[i]; // 累加k到n的概率
  }

  return result;
};

/**
 * 执行用时：8 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：56.24 MB, 在所有 JavaScript 提交中击败了66.67%的用户
 */