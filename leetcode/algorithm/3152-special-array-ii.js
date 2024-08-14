/**
 * 3152. 特殊数组 II
 *
 * 如果数组的每一对相邻元素都是两个奇偶性不同的数字，则该数组被认为是一个 特殊数组 。
 * 周洋哥有一个整数数组 nums 和一个二维整数矩阵 queries，对于 queries[i] = [fromi, toi]，请你帮助周洋哥检查子数组 nums[fromi..toi] 是不是一个 特殊数组 。
 * 返回布尔数组 answer，如果 nums[fromi..toi] 是特殊数组，则 answer[i] 为 true ，否则，answer[i] 为 false 。
 */

/**
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