/**
 * 397. 整数替换
 *
 * 给定一个正整数 n ，你可以做如下操作：
 *  * 如果 n 是偶数，则用 n / 2替换 n 。
 *  * 如果 n 是奇数，则可以用 n + 1或n - 1替换 n 。
 *
 * n 变为 1 所需的最小替换次数是多少？
 */
/**
 * 处理逻辑还是比较明显的,动态规划或者广度优先
 *
 * 主要是最小替换次数的逻辑是怎样的, 数最小还是成为2的幂
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  //广度优先
  let arr = [n];
  let result = 0;
  while (arr.length) {
    let len = arr.length;
    result++;
    while (len) {
      let data = arr.shift();
      if (data === 1) return result - 1;
      if (data < 1) continue;
      if (data % 2) {
        arr.push(data + 1, data - 1);
      } else {
        arr.push(data / 2);
      }
      len--;
    }
  }
  return result;
};
/**
 * 广度优先倒是没问题,但是由于没办法剪枝,处理的数据过大,效率低下
 * 执行用时：2444 ms, 在所有 JavaScript 提交中击败了8.33%的用户
 * 内存消耗：41.5 MB, 在所有 JavaScript 提交中击败了5.95%的用户
 */

/**
 * 动态规划好像不太行~
 * 
 * 官方题解: 贪心
 *
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  let ans = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      ++ans;
      n = Math.floor(n / 2);
    } else if (n % 4 === 1) {
      ans += 2;
      n = Math.floor(n / 2);
    } else {
      if (n === 3) {
        ans += 2;
        n = 1;
      } else {
        ans += 2;
        n = Math.floor(n / 2) + 1;
      }
    }
  }
  return ans;
};
