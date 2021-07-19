/**
 * 1838. 最高频元素的频数
 *
 * 元素的 频数 是该元素在一个数组中出现的次数。
 *
 * 给你一个整数数组 nums 和一个整数 k 。在一步操作中，你可以选择 nums 的一个下标，并将该下标对应元素的值增加 1 。
 *
 * 执行最多 k 次操作后，返回数组中最高频元素的 最大可能频数 。
 */
/**
 *
 * 应该可以进行排序,然后以一个元素作为参照点,对数据进行匹配
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let result = 0;
  for (let i = len - 1; i > -1; i--) {
    result = Math.max(result, a(nums, i, k));
  }
  return result;
};

const a = (arr, index, k) => {
  let reference = arr[index];
  let result = 0;
  while (k > -1) {
    index--;
    result++;
    k = k - (reference - arr[index]);
  }
  return result;
};
/**
 * 超出时间限制
 */