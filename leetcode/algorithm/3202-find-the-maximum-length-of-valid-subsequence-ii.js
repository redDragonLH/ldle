/**
 * 3202. 找出有效子序列的最大长度 II
 *
 * 给你一个整数数组 nums 和一个 正 整数 k 。
 * nums 的一个 子序列 sub 的长度为 x ，如果其满足以下条件，则称其为 有效子序列 ：
 *  * (sub[0] + sub[1]) % k == (sub[1] + sub[2]) % k == ... == (sub[x - 2] + sub[x - 1]) % k
 * 返回 nums 的 最长有效子序列 的长度。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
  // 1. 状态定义：dp[prev][mod] 表示以余数 prev 结尾，当前数余数为 mod 的最长有效子序列长度
  const dp = Array.from({ length: k }, () => new Array(k).fill(0));
  let res = 0;
  // 2. 状态转移：遍历每个数，更新 dp
  for (const num of nums) {
    const mod = num % k;
    for (let prev = 0; prev < k; prev++) {
      // 如果前一个数余数为 prev，当前数余数为 mod，则转移
      dp[prev][mod] = dp[mod][prev] + 1;
      res = Math.max(res, dp[prev][mod]);
    }
  }
  // 3. 返回答案：最长有效子序列长度
  return res;
};
/**
 * 执行用时：207 ms, 在所有 JavaScript 提交中击败了26.67%的用户
 * 内存消耗：80.84 MB, 在所有 JavaScript 提交中击败了53.33%的用户
 */