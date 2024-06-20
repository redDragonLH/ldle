/**
 * 2748. 美丽下标对的数目
 *
 * 给你一个下标从 0 开始的整数数组 nums 。如果下标对 i、j 满足 0 ≤ i < j < nums.length ，如果 nums[i] 的 第一个数字 和 nums[j] 的 最后一个数字 互质 ，则认为 nums[i] 和 nums[j] 是一组 美丽下标对 。
 * 返回 nums 中 美丽下标对 的总数目。
 * 对于两个整数 x 和 y ，如果不存在大于 1 的整数可以整除它们，则认为 x 和 y 互质 。换而言之，如果 gcd(x, y) == 1 ，则认为 x 和 y 互质，其中 gcd(x, y) 是 x 和 y 的 最大公因数 。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  let result = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (gcd(Number(nums[i].toString()[0]), nums[j] % 10) === 1) {
        result++;
      }
    }
  }
  return result;
};

/**
 * 求最大公因数
 */
let gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};
/**
 * 执行用时：126 ms, 在所有 JavaScript 提交中击败了56.10%的用户
 * 内存消耗：54.19 MB, 在所有 JavaScript 提交中击败了31.71%的用户
 */