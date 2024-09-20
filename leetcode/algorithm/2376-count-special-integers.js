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