/**
 * 915. 分割数组
 *
 * 给定一个数组 nums ，将其划分为两个连续子数组 left 和 right， 使得：
 *  * left 中的每个元素都小于或等于 right 中的每个元素。
 *  * left 和 right 都是非空的。
 *  * left 的长度要尽可能小。
 *
 * 在完成这样的分组后返回 left 的 长度 。
 *
 * 用例可以保证存在这样的划分方法。
 */

/**
 * 
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  let len = nums.length;
  let left = 1,
    right = len - 2;
  let leftMax = [nums[0]],
    rightMin = [];
  rightMin[len - 1] = nums[len - 1];
  while (left < len) {
    leftMax[left] = Math.max(leftMax[left - 1], nums[left]);
    rightMin[right] = Math.min(rightMin[right + 1], nums[right]);
    left++;
    right--;
  }
  for (let i = 1; i < len; i++) {
    if (leftMax[i - 1] <= rightMin[i]) return i;
  }
  return 0;
};
/**
 * 这是怎么过的~~~
 * 执行用时：184 ms, 在所有 JavaScript 提交中击败了13.33%的用户
 * 内存消耗：63.9 MB, 在所有 JavaScript 提交中击败了8.33%的用户
 */