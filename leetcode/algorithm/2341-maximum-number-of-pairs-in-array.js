/**
 * 2341. 数组能形成多少数对
 *
 * 给你一个下标从 0 开始的整数数组 nums 。在一步操作中，你可以执行以下步骤：
 *  * 从 nums 选出 两个 相等的 整数
 *  * 从 nums 中移除这两个整数，形成一个 数对
 * 请你在 nums 上多次执行此操作直到无法继续执行。
 *
 * 返回一个下标从 0 开始、长度为 2 的整数数组 answer 作为答案，其中 answer[0] 是形成的数对数目，answer[1] 是对 nums 尽可能执行上述操作后剩下的整数数目。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let mapping = {};
  let total = nums.length;
  let result = 0;
  for (const num of nums) {
    if (mapping[num]) {
      mapping[num] += 1;
    } else {
      mapping[num] = 1;
    }
  }
  for (const key in mapping) {
    if (Object.hasOwnProperty.call(mapping, key)) {
      let quotient = parseInt(mapping[key] / 2);
      if (quotient > 0) {
        result += quotient;
        total -= quotient * 2;
      }
    }
  }
  return [result, total];
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了43.94%的用户
 * 内存消耗：41.5 MB, 在所有 JavaScript 提交中击败了40.91%的用户
 */
