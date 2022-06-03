/**
 * 829. 连续整数求和
 *
 * 给定一个正整数 n，返回 连续正整数满足所有数字之和为 n 的组数 。
 */

/**
 * 如果 k 是奇数，则当 n 可以被 k 整除时，正整数 n 可以表示成 k 个连续正整数之和；
 * 
 * 如果 k 是偶数，则当 n 不可以被 k 整除且 2n 可以被 k 整除时，正整数 n 可以表示成 k 个连续正整数之和。
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (n) {
  let ans = 0;
  const bound = 2 * n;
  for (let k = 1; k * (k + 1) <= bound; k++) {
    if (isKConsecutive(n, k)) {
      ans++;
    }
  }
  return ans;
};

const isKConsecutive = (n, k) => {
  if (k % 2 === 1) {
    return n % k === 0;
  } else {
    return n % k !== 0 && (2 * n) % k === 0;
  }
};
