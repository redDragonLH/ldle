/**
 * 1664. 生成平衡数组的方案数
 *
 * 给你一个整数数组 nums 。你需要选择 恰好 一个下标（下标从 0 开始）并删除对应的元素。请注意剩下元素的下标可能会因为删除操作而发生改变。
 *
 * 比方说，如果 nums = [6,1,7,4,1] ，那么：
 *  * 选择删除下标 1 ，剩下的数组为 nums = [6,7,4,1] 。
 *  * 择删除下标 2 ，剩下的数组为 nums = [6,1,4,1] 。
 *  * 选择删除下标 4 ，剩下的数组为 nums = [6,1,7,4] 。
 *  * 如果一个数组满足奇数下标元素的和与偶数下标元素的和相等，该数组就是一个 平衡数组 。
 * 请你返回删除操作后，剩下的数组 nums 是 平衡数组 的 方案数 。
 */

/**
 * 看起来逻辑比较简单,就是删除一个之后判断是否平衡,
 * 但是如果每次全量计算估计会超时,或者效率很差,
 * 要考虑优化,
 *
 * 优化思路:
 *  在删除一个下标之后这个下标后面的元素才会改变位置那么可不可以考虑使用前缀和,以及从后往前遍历并且后缀和,只不过后缀和可能要两个~~
 *  注意,删除一个元素后后边的所有元素整体进一,所以后缀和可以切换使用,不会失效
 * 第一版,前缀和+ 后全量
 *
 * 有点复杂,先中断
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
    let oddPrefix = [0];
    let evenPrefix = [0];
    let len = nums.length;
    for (let i = 1; i < len; i++) {
      if (i & 1) {
        evenPrefix[i] = evenPrefix[i - 1] + (nums[i - 2] || 0);
        oddPrefix[i] = oddPrefix[i - 1];
      } else {
        oddPrefix[i] = oddPrefix[i - 1] + (nums[i - 2] || 0);
        evenPrefix[i] = evenPrefix[i - 1];
      }
    }
  };
  
  /**
   * 官方题解 动态规划
   * @param {*} nums 
   * @returns 
   */
  var waysToMakeFair = function (nums) {
      // 优化了结构
    let odd1 = 0,
      even1 = 0;
    let odd2 = 0,
      even2 = 0;
    for (let i = 0; i < nums.length; ++i) {
      if ((i & 1) !== 0) {
        odd2 += nums[i];
      } else {
        even2 += nums[i];
      }
    }
    let res = 0;
    for (let i = 0; i < nums.length; ++i) {
      if ((i & 1) != 0) {
        odd2 -= nums[i];
      } else {
        even2 -= nums[i];
      }
      if (odd1 + even2 === odd2 + even1) {
        ++res;
      }
      if ((i & 1) !== 0) {
        odd1 += nums[i];
      } else {
        even1 += nums[i];
      }
    }
    return res;
  };
  