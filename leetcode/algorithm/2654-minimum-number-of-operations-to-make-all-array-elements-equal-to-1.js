/**
 * 2654. 使数组所有元素变成 1 的最少操作次数
 *
 * 给你一个下标从 0 开始的 正 整数数组 nums 。你可以对数组执行以下操作 任意 次：
 *  * 选择一个满足 0 <= i < n - 1 的下标 i ，将 nums[i] 或者 nums[i+1] 两者之一替换成它们的最大公约数。
 * 请你返回使数组 nums 中所有元素都等于 1 的 最少 操作次数。如果无法让数组全部变成 1 ，请你返回 -1 。
 * 两个正整数的最大公约数指的是能整除这两个数的最大正整数。
 */
/**
 * 必须有奇数才能有可能公约数为1
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length;
  let num1 = 0;
  let g = 0;

  const gcd = (a, b) => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
// 统计数组中1的数量，并计算整个数组的最大公约数
  for (const x of nums) {
    if (x === 1) {
      num1++;
    }
    g = gcd(g, x);
  }

  if (num1 > 0) {
    return n - num1;
  }
  if (g > 1) {
    return -1;
  }

  // 寻找最短子数组，使其最大公约数为1

  // 可以找到一个最小的区间，这个区间内所有数字的 gcd 是 1。假设这个区间长度是 minLen，
  // 那么由这些数字得到一个 1 所需的次数是 minLen−1；然后再由这个 1 使得其他数字都变为 1 所需的次数是 n−1。因此总共需要 minLen+n−2 次操作。
  let minLen = n;
  for (let i = 0; i < n; i++) {
    let currentGcd = 0;
    for (let j = i; j < n; j++) {
      currentGcd = gcd(currentGcd, nums[j]);
      if (currentGcd === 1) {
        minLen = Math.min(minLen, j - i + 1);
        break;
      }
    }
  }
  return minLen + n - 2;
};
/**
 * 执行用时：2 ms, 在所有 JavaScript 提交中击败了90.00%的用户
 * 内存消耗：57.94 MB, 在所有 JavaScript 提交中击败了90.00%的用户
 */