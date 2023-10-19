/**
 * 1726. 同积元组
 *
 * 给你一个由 不同 正整数组成的数组 nums ，请你返回满足 a * b = c * d 的元组 (a, b, c, d) 的数量。其中 a、b、c 和 d 都是 nums 中的元素，且 a != b != c != d 。
 */
/**
 * 前缀和?但是要怎么保证元素不重复,毕竟顺序是乱的
 * 如果有一组是满足条件的,那么按照交换律,就能生成四组满足条件的
 * 超级暴力的方案,果然超出时间限制
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  let reslult = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        for (let l = k + 1; l < len; l++) {
          if (nums[i] * nums[j] === nums[k] * nums[l]) {
            reslult += 8;
          } else if (nums[i] * nums[k] === nums[j] * nums[l]) {
            reslult += 8;
          } else if (nums[i] * nums[l] === nums[j] * nums[k]) {
            reslult += 8;
          }
        }
      }
    }
  }
  return reslult;
};
