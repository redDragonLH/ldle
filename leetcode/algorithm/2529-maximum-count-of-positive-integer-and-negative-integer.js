/**
 * 2529. 正整数和负整数的最大计数
 *
 * 给你一个按 非递减顺序 排列的数组 nums ，返回正整数数目和负整数数目中的最大值。
 *  * 换句话讲，如果 nums 中正整数的数目是 pos ，而负整数的数目是 neg ，返回 pos 和 neg二者中的最大值。
 * 注意：0 既不是正整数也不是负整数。
 */

/**
 * 二分找到中间分界线
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let len = nums.length;
  let mid = parseInt(len / 2),
    left = 0,
    right = len - 1;
  while (true) {
    if (mid === 0 || mid === len - 1) {
      return len;
    }
    if (nums[mid] >= 0 && nums[mid - 1] < 0) {
      break;
    }
    if (nums[mid] < 0) {
      right = mid;
      mid = Math.ceil((left + mid) / 2);
    } else if (nums[mid] > 0 && nums[mid - 1] > 0) {
      left = mid;
      mid = Math.ceil((right + mid) / 2);
    }
  }
  console.log(mid);
  if(nums[mid]===0){
    let withOutZero = mid
    while(nums[withOutZero]===0){
        withOutZero++
    }
    return len - withOutZero > mid ? len - withOutZero : mid;
  }
  return len - mid > mid ? len - mid : mid;
};
/**
 * 0 不算正整数,需要剔除
 */