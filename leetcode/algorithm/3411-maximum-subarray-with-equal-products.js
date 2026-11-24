/**
 * 3411. 最长乘积等价子数组
 *
 * 给你一个由 正整数 组成的数组 nums。
 * 如果一个数组 arr 满足 prod(arr) == lcm(arr) * gcd(arr)，则称其为 乘积等价数组 ，其中：
 *  * prod(arr) 表示 arr 中所有元素的乘积。
 *  * gcd(arr) 表示 arr 中所有元素的最大公因数 (GCD)。
 *  * lcm(arr) 表示 arr 中所有元素的最小公倍数 (LCM)。
 * 返回数组 nums 的 最长 乘积等价 子数组 的长度。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function (nums) {
  let res = 0;
  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  for (let i = 0; i < nums.length; i++) {
    let prodVal = nums[i];
    let gcdVal = nums[i];
    let lcmVal = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      prodVal = prodVal * nums[j];
      gcdVal = gcd(gcdVal, nums[j]);
      lcmVal = (lcmVal * nums[j]) / gcd(lcmVal, nums[j]);
      if (prodVal > gcdVal * lcmVal) {
        break;
      }
      if (prodVal === gcdVal * lcmVal) {
        res = Math.max(res, j - i + 1);
      }
    }
  }
  return res;
};
