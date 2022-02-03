/**
 * 1414. 和为 K 的最少斐波那契数字数目
 *
 * 给你数字 k ，请你返回和为 k 的斐波那契数字的最少数目，其中，每个斐波那契数字都可以被使用多次。
 *
 * 斐波那契数字定义为：
 *  * F1 = 1
 *  * F2 = 1
 *  * Fn = Fn-1 + Fn-2 ， 其中 n > 2 。
 *
 * 数据保证对于给定的 k ，一定能找到可行解。
 */

/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  const f = [1];
  let a = 1,
    b = 1;
  // 找到小于 k的斐波那契数列 所有数据
  while (a + b <= k) {
    let c = a + b;
    f.push(c);
    a = b;
    b = c;
  }
  let ans = 0;
  // 从大到小开始试
  for (let i = f.length - 1; i >= 0 && k > 0; i--) {
    const num = f[i];
    if (k >= num) {
      k -= num;
      ans++;
    }
  }
  return ans;
};
