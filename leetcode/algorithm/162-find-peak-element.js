/**
 * 162. 寻找峰值
 *
 * 峰值元素是指其值严格大于左右相邻值的元素。
 * 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
 * 你可以假设 nums[-1] = nums[n] = -∞ 。
 * 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
 */

/**
 * 时间复杂度为n好说,log n~~~
 *
 * 官方题解比我的想法做法简单太多,直接找最大值~~我还想和元素两边都判断下
 * 
 * 官方题解把寻找峰值转变为寻找最大值,那这种情况下,最两侧的元素就算只相邻1个元素,也要进入判断逻辑 毕竟两侧之外是负无穷,不是空
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let idx = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[idx]) {
      idx = i;
    }
  }
  return idx;
};
