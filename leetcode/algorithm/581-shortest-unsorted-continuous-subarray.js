/**
 * 581. 最短无序连续子数组
 *
 * 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 *
 * 请你找出符合题意的 最短 子数组，并输出它的长度。
 */

/**
 * 无序,至少得两个元素吧,而且有序的必须从两边判断,确认有多少靠边的元素有序,内部如果位置对的话应该也算有序吧(喵的,不算)
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let tempNums = [...nums];
  let len = nums.length;
  tempNums.sort((a, b) => a - b);
  let result = 0;
  let start = 0;
  while (tempNums[start] === nums[start] && start < len) {
    start++;
  }
  if (start === len) return 0;
  result += start;
  start = len - 1;
  while (tempNums[start] === nums[start]) {
    start--;
  }
  result += len - start - 1;
  return len - result;
};
