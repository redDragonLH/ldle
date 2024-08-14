/**
 * 3152. 特殊数组 II
 *
 * 如果数组的每一对相邻元素都是两个奇偶性不同的数字，则该数组被认为是一个 特殊数组 。
 * 周洋哥有一个整数数组 nums 和一个二维整数矩阵 queries，对于 queries[i] = [fromi, toi]，请你帮助周洋哥检查子数组 nums[fromi..toi] 是不是一个 特殊数组 。
 * 返回布尔数组 answer，如果 nums[fromi..toi] 是特殊数组，则 answer[i] 为 true ，否则，answer[i] 为 false 。
 */

/**
 * 这怎么优化嘞
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    let [from, to] = queries[i];
    let flag = true;
    for (let j = from; j < to; j++) {
      if (nums[j] % 2 === nums[j + 1] % 2) {
        flag = false;
        break;
      }
    }
    res.push(flag);
  }
  return res;
};
/**
 * 超时
 */

/**
 * 官方题解 动态规划
 * @param {*} nums
 * @param {*} queries
 * @returns
 */
var isArraySpecial = function (nums, queries) {
  const n = nums.length;
  // 数据结构.
  const dp = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    // ^ 二进制操作符,异或, 两个操作数有且仅有一个对应的二进制位为 1 时，该位的结果值为 1
    // & 二进制操作符,与, 两个操作数的对应位都为 1 时，该位的结果值为 1
    // 对于给定的元素 a,b，当满足 (a^b)&1=1 时，则 a,b 的奇偶性不同，否则奇偶性相同；
    if ((nums[i] ^ nums[i - 1]) & 1) {
      // 如果连续相同那么后一个元素就比前一个元素多一.
      dp[i] = dp[i - 1] + 1;
    }
  }

  const res = [];
  for (const [x, y] of queries) {
    res.push(dp[y] >= y - x + 1);
  }
  return res;
};
