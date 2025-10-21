/**
 * 3346. 执行操作后元素的最高频率 I
 *
 * 给你一个整数数组 nums 和两个整数 k 和 numOperations 。
 * 你必须对 nums 执行 操作  numOperations 次。每次操作中，你可以：
 *  * 选择一个下标 i ，它在之前的操作中 没有 被选择过。
 *  * 将 nums[i] 增加范围 [-k, k] 中的一个整数。
 * 在执行完所有操作以后，请你返回 nums 中出现 频率最高 元素的出现次数。
 * 一个元素 x 的 频率 指的是它在数组中出现的次数。
 */

/**
 * 使用滑动窗口+排序
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function (nums, k, numOperations) {
  nums = nums.sort((a, b) => a - b);
  let result = 1;
  for (let right = 0; right < nums.length; right++) {
    let Operations = numOperations;
    for (let left = right + 1; left < nums.length; left++) {
      if (Operations && Math.abs(nums[right] - nums[left]) <= k * Operations) {
        Operations -= nums[right] - nums[left] / k;
        result = Math.max(result, left - right + 1);
      } else {
        break;
      }
    }
  }
  return result;
};
/**
 * 失败，没法处理向后的数据，只能一直向前
 * 
 * 需要学习官方题解向后处理的方法，但是我的方案计算太多了
 */

/**
 * 官方题解
 * 
 * 中等题吗？？？
 * @param {*} nums 
 * @param {*} k 
 * @param {*} numOperations 
 * @returns 
 */
var maxFrequency = function (nums, k, numOperations) {
  nums.sort((a, b) => a - b);

  let ans = 0;
  const numCount = new Map();

  let lastNumIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[lastNumIndex]) {
      numCount.set(nums[lastNumIndex], i - lastNumIndex);
      ans = Math.max(ans, i - lastNumIndex);

      lastNumIndex = i;
    }
  }

  numCount.set(nums[lastNumIndex], nums.length - lastNumIndex);
  ans = Math.max(ans, nums.length - lastNumIndex);

  const leftBound = (value) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < value) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };

  const rightBound = (value) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right + 1) / 2);
      if (nums[mid] > value) {
        right = mid - 1;
      } else {
        left = mid;
      }
    }
    return left;
  };

  for (let i = nums.at(0); i <= nums.at(-1); i++) {
    const [l, r] = [leftBound(i - k), rightBound(i + k)];

    let tempAns;

    if (numCount.has(i)) {
      tempAns = Math.min(r - l + 1, numCount.get(i) + numOperations);
    } else {
      tempAns = Math.min(r - l + 1, numOperations);
    }

    ans = Math.max(ans, tempAns);
  }

  return ans;
};
