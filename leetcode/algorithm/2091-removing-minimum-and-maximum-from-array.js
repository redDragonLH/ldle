/**
 * 2091. 从数组中移除最大值和最小值
 *
 * 给你一个下标从 0 开始的数组 nums ，数组由若干 互不相同 的整数组成。
 * nums 中有一个值最小的元素和一个值最大的元素。分别称为 最小值 和 最大值 。你的目标是从数组中移除这两个元素。
 * 一次 删除 操作定义为从数组的 前面 移除一个元素或从数组的 后面 移除一个元素。
 * 返回将数组中最小值和最大值 都 移除需要的最小删除次数。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function (nums) {
  let minIndex = 0,
    maxIndex = 0;
  // 找到最大值和最小值的下标
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[minIndex]) {
      minIndex = i;
    }
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }
  // 计算从左边删除、从右边删除和从两边删除的次数
  const left = Math.min(minIndex, maxIndex) + 1;
  const right = nums.length - Math.max(minIndex, maxIndex);
  const mid = Math.abs(minIndex - maxIndex);
  return Math.min(left + right, left + mid, right + mid);
};
