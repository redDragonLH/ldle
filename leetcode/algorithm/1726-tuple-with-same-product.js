/**
 * 1726. 同积元组
 *
 * 给你一个由 不同 正整数组成的数组 nums ，请你返回满足 a * b = c * d 的元组 (a, b, c, d) 的数量。其中 a、b、c 和 d 都是 nums 中的元素，且 a != b != c != d 。
 */
/**
 * 前缀和?但是要怎么保证元素不重复,毕竟顺序是乱的
 * 如果有一组是满足条件的,那么按照交换律,就能生成四组满足条件的
 * 
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  let reslult = 0;
  let len = nums.length;
  let mapping = new Map();
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (i != j) {
        let current = mapping.get(nums[i] * nums[j]) || [];
        mapping.set(nums[i] * nums[j], [...current, [i, j]]);
      }
    }
  }
  mapping.forEach((value, k) => {
    if (value.length > 1) {
      reslult += parseInt(
        (factorial(value.length) / (2 * factorial(value.length - 2))) * 8
      );
    }
  });
  return reslult;
};
function factorial(n) {
  if (0 === n) {
    return 1;
  }
  let res = 1;
  for (let i = 1; i <= n; ++i) {
    res *= i;
  }
  return res;
}
/**
 * 前缀和maping
 * 执行用时：2136 ms, 在所有 JavaScript 提交中击败了7.14%的用户
 * 内存消耗：204.25 MB, 在所有 JavaScript 提交中击败了7.14%的用户
 */