/**
 * 3375. 使数组的值全部为 K 的最少操作次数
 *
 * 给你一个整数数组 nums 和一个整数 k 。
 * 如果一个数组中所有 严格大于 h 的整数值都 相等 ，那么我们称整数 h 是 合法的 。
 * 比方说，如果 nums = [10, 8, 10, 8] ，那么 h = 9 是一个 合法 整数，因为所有满足 nums[i] > 9 的数都等于 10 ，但是 5 不是 合法 整数。
 * 你可以对 nums 执行以下操作：
 *  * 选择一个整数 h ，它对于 当前 nums 中的值是合法的。
 *  * 对于每个下标 i ，如果它满足 nums[i] > h ，那么将 nums[i] 变为 h 。
 * 你的目标是将 nums 中的所有元素都变为 k ，请你返回 最少 操作次数。如果无法将所有元素都变 k ，那么返回 -1 。
 */
/**
 * 原理上来说就是建立一个金字塔形状的桶,从上到下遍历改变值
 * 还得是桶好用
 *
 * 思路好像错了,找个最多的数,然后让其他数变成这个数
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let bucket = new Array(100).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= k) {
      // 如果大于k,那么就放到桶里面
      bucket[nums[i]]++;
    } else {
      return -1;
    }
  }
  let ans = 0;
  let sum = 0;
  for (let i = 99; i >= 0; i--) {
    if (bucket[i] > 0) {
      // 如果桶里面有值,那么就可以直接加上去
      ans += bucket[i] + sum;
      sum += bucket[i];
    }
  }

  return ans;
};

/**
 * 新思路, 找最多
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  nums.sort((a, b) => b - a);
  if (nums[nums.length - 1] < k) {
    return -1;
  }
  let maxLen = 1;
  let max = nums[0];
  let cur = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (cur > maxLen) {
      maxLen = cur;
      max = nums[i];
    }
    if (nums[i] == nums[i + 1]) {
      cur++;
    } else {
      cur = 1;
    }
  }

  return nums.length - maxLen;
};
/**
 * 也不对,奇怪,肯定是思路错了
 */

/**
 * 官方题解 阅读理解失败
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const st = new Set();
  for (const x of nums) {
    if (x < k) {
      return -1;
    } else if (x > k) {
      st.add(x);
    }
  }
  return st.size;
};
/**
 * 执行用时：63 ms, 在所有 JavaScript 提交中击败了85.71%的用户
 * 内存消耗：56.16 MB, 在所有 JavaScript 提交中击败了14.29%的用户
 */
