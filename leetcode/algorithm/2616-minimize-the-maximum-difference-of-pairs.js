/**
 * 2616. 最小化数对的最大差值
 *
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 p 。请你从 nums 中找到 p 个下标对，每个下标对对应数值取差值，你需要使得这 p 个差值的 最大值 最小。同时，你需要确保每个下标在这 p 个下标对中最多出现一次。
 * 对于一个下标对 i 和 j ，这一对的差值为 |nums[i] - nums[j]| ，其中 |x| 表示 x 的 绝对值 。
 * 请你返回 p 个下标对对应数值 最大差值 的 最小值 。
 */
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums[nums.length - 1] - nums[0];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] - nums[i] <= mid) {
        count++;
        i++; // Skip the next index as it's already paired
      }
    }

    if (count >= p) {
      right = mid; // Try for a smaller maximum difference
    } else {
      left = mid + 1; // Increase the minimum possible maximum difference
    }
  }

  return left;
};
/**
 * 执行用时 : 45 ms, 在所有 JavaScript 提交中击败了 40.00% 的用户
 * 内存消耗 : 67.78 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户
 */