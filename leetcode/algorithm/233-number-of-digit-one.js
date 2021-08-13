/**
 * 233. 数字 1 的个数
 *
 * 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。
 */

/**
 * 循环所有数字,string化后遍历1的个数,这种就有点蠢,因为要进行类型转换,很麻烦
 * 
 * 使用余数的方式对每个位进行处理,不知道除法和转字符串谁消耗更大
 * 
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  // mulk 表示 10^k
  // 在下面的代码中，可以发现 k 并没有被直接使用到（都是使用 10^k）
  // 但为了让代码看起来更加直观，这里保留了 k
  let mulk = 1;
  let ans = 0;
  for (let k = 0; n >= mulk; ++k) {
    ans +=
      Math.floor(n / (mulk * 10)) * mulk +
      Math.min(Math.max((n % (mulk * 10)) - mulk + 1, 0), mulk);
    mulk *= 10;
  }
  return ans;
};
