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

/**
 * 官方题解: 双向遍历
 *
 * 在nums[i] 的左边存在一个元素小于nums[i].等价于在nums[i]的左边的最小元素小于nums[i],在nums[i]
 * 的右边存在一个元素大于 nums[i] 等价于在 nums[i] 的右边的最大元素大于 nums[i],因此可以维护数组nums 
 * 中的每个元素左边的最小值和右边的最大值
 * 
 * 创建两个长度为n的数组leftMin和rightMax,对于 0 <= i < n.leftMin[i]表示nums[0]到nums[i]中的最小值,rightMax[i]表示 nums[i]
 * 到 nums[n-1]中的最大值
 */
var increasingTriplet = function (nums) {
  const n = nums.length;
  if (n < 3) {
    return false;
  }
  const leftMin = new Array(n).fill(0);
  leftMin[0] = nums[0];
  for (let i = 1; i < n; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i]);
  }
  const rightMax = new Array(n).fill(0);
  rightMax[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
  }
  for (let i = 1; i < n - 1; i++) {
    if (nums[i] > leftMin[i - 1] && nums[i] < rightMax[i + 1]) {
      return true;
    }
  }
  return false;
};

/**
 * 官方题解: 贪心
 * 
 * 从左往右遍历数组nums,遍历过程中维护两个变量 first 和 second,分别表示递增的三元子序列中的第一个数和第二个数,任何时候都有 first < second
 * 
 * 初始时,first = nums[0],second =+∞.对于 1 <= i <n,当遍历到下标i时,令 num = nums[i],进行如下操作:
 *  1. 如果 num > second,则找到了一个递增的三元子序列,返回true
 *  2. 否则,如果num>first,则将 second 的值更新为 num
 *  3. 否则,将 first 的值更新为 num.
 * 
 * 题解的原理:为了找到递增的三元子序列,first 和 secod 应尽可能的小,此时找到递增的三元子序列的可能性更大
 */