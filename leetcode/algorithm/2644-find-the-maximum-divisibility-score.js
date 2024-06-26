/**
 * 2644. 找出可整除性得分最大的整数
 *
 * 给你两个下标从 0 开始的整数数组 nums 和 divisors 。
 * divisors[i] 的 可整除性得分 等于满足 nums[j] 能被 divisors[i] 整除的下标 j 的数量。
 * 返回 可整除性得分 最大的整数 divisors[i] 。如果有多个整数具有最大得分，则返回数值最小的一个。
 */
/**
 * 咋看都是双循环遍历
 *
 * 如果都没有 可整除性得分 也是有的，只是0而已
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  let count = 0;
  let result = Math.min(...divisors);
  divisors.forEach((v) => {
    let divisor = 0;
    nums.forEach((num) => {
      num % v === 0 && divisor++;
    });
    if (count < divisor || (count === divisor&& result>v)) {
      count = divisor;
      result = v;
    } 
  });
  return result;
};
/**
 * 非常啰嗦的一个解
 * 
 * 在这种情况下for循环可能会更好看和简练一点
 * 执行用时：268 ms, 在所有 JavaScript 提交中击败了74.03%的用户
 * 内存消耗：56.61 MB, 在所有 JavaScript 提交中击败了28.57%的用户
 */