/**
 * 3024. 三角形类型
 *
 * 给你一个下标从 0 开始长度为 3 的整数数组 nums ，需要用它们来构造三角形。
 *  * 如果一个三角形的所有边长度相等，那么这个三角形称为 equilateral 。
 *  * 如果一个三角形恰好有两条边长度相等，那么这个三角形称为 isosceles 。
 *  * 如果一个三角形三条边的长度互不相同，那么这个三角形称为 scalene 。
 * 如果这个数组无法构成一个三角形，请你返回字符串 "none" ，否则返回一个字符串表示这个三角形的类型。
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums[0] + nums[1] <= nums[2]) return "none";
  if (nums[0] === nums[1] && nums[1] === nums[2]) return "equilateral";
  if (nums[0] === nums[1] || nums[1] === nums[2]) return "isosceles";
  return "scalene";
};
/**
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了65.22%的用户
 * 内存消耗：55.94 MB, 在所有 JavaScript 提交中击败了34.78%的用户
 */