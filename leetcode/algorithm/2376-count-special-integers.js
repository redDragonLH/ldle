/**
 * 2376. 统计特殊整数
 *
 * 如果一个正整数每一个数位都是 互不相同 的，我们称它是 特殊整数 。
 * 给你一个 正 整数 n ，请你返回区间 [1, n] 之间特殊整数的数目。
 */
/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let str = i.toString();
    let set = new Set(str);
    if (str.length === set.size) {
      count++;
    }
  }
  return count;
};
/**
 * 超时
 * 果然超时,这个最简单的方法不行,应该可以优化,以空间换时间?
 */

/**
 * DP 的路子~~
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
  const nStr = n.toString();
  const memo = new Map();

  const dp = (mask, prefixSmaller, nStr) => {
    if (countOnes(mask) === nStr.length) {
      return 1;
    }
    const key = mask * 2 + (prefixSmaller ? 1 : 0);
    if (!memo.has(key)) {
      let res = 0;
      let lowerBound = mask === 0 ? 1 : 0;
      let upperBound = prefixSmaller ? 9 : nStr[countOnes(mask)] - "0";
      for (let i = lowerBound; i <= upperBound; i++) {
        if (((mask >> i) & 1) === 0) {
          res += dp(mask | (1 << i), prefixSmaller || i < upperBound, nStr);
        }
      }
      memo.set(key, res);
    }
    return memo.get(key);
  };

  let res = 0;
  let prod = 9;
  for (let i = 0; i < nStr.length - 1; i++) {
    res += prod;
    prod *= 9 - i;
  }
  res += dp(0, false, nStr);
  return res;
};

const countOnes = (x) => {
  let count = 0;
  while (x) {
    count++;
    x &= x - 1;
  }
  return count;
};
