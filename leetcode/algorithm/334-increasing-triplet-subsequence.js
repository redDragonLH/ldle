/**
 * 334. 递增的三元子序列
 *
 * 给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。
 *
 * 如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。
 */
/**
 * 子序列是不要求连续的
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  // 那虽然是不连续的,但是从小到大的要求是不变的,大一些的数组成的序列,最后一个换成小一点的也是成立的
  let currNumber = Number.MAX_SAFE_INTEGER;
  let count = 1;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    console.log(currNumber, nums[i], len - i, count);
    if (currNumber > nums[i] && len - i > 2) {
      currNumber = nums[i];
      count = 1;
    } else if (currNumber < nums[i]) {
      currNumber = nums[i];
      count++;
    }
    if (count === 3) return true;
  }
  return false;
};
/**
 * 贪心限制还是大,一些用例无法过
 * [1,5,0,4,1,3]
 */
/**
 * 那就得用多叉树吧,有三层,那也麻烦
 *
 * 用多维数组,从前往后创建,如果大于数组内部数组的最后一个元素就push进去,然后判断数量
 * 
 * 对栈溢出,还不如三层遍历
 */
var increasingTriplet = function (nums) {
  let resultArr = [];
  for (const item of nums) {
    for (const arr of resultArr) {
      if (arr[arr.length - 1] < item) {
        resultArr.push([...arr, item]);
        if (resultArr[resultArr.length - 1].length === 3) return true;
      }
    }
    resultArr.push([item]);
  }
  return false;
};
