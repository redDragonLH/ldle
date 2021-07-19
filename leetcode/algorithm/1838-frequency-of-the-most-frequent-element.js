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

/**
 * 官方题解: 排序+滑动窗口
 *
 * 提示 1: 操作后的最高频元素必定是数组中年已有的某个元素 (可推导)
 * 提示 2: 优先操作距离目标值最近且小于目标值的元素(可推导)
 * 提示 3: 遍历数组中的每个元素作为目标值并进行尝试(逻辑可理解,不知道怎么优化)
 *
 * 思路:
 *      提示1和提示2已经揭示了大体的逻辑框架,排序,然后找到一个参照点,以参照点降序判断查看k可填补多少参照点减去降序元素,但是朴素线性查找超时
 *      使用l与r作为执行操作的左右边界(闭区间),同时用 total 来维护将[l,r] 区间全部变为末尾元素的操作次数.在顺序枚举目标值的同时,更新对应的左边界,并用 res 来维护满足限制的最大区间元素数量即可
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let total = 0,
    res = 1,
    l = 0;

  for (let r = 1; r < n; r++) {
    // 操作次数为啥是这个公式
    total += (nums[r] - nums[r - 1]) * (r - l);
    while (total > k) {
      total -= nums[r] - nums[l];
      l += 1;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};
