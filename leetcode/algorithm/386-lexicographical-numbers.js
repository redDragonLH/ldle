/**
 * 386. 字典序排数
 *
 * 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。
 *
 * 你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr.sort();
};

/**
 * 语言原生方法
 *
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了82.64%的用户
 * 内存消耗：48 MB, 在所有 JavaScript 提交中击败了80.56%的用户
 */

/**
 * 官方题解:深度优先搜索
 * 
 * 对于整数number 字典序整数规则为:
 *  1. 如果number后面附加一个0,即 number ✖️ 10,如果 number ✖️ 10 <= n,那么说明 number ✖️ 10 是下一个字典序整数
 *  2. 如果 number mod 10 = 9或 number + 1 > n 那么说明末尾的数位已经搜索完成,退回上一位,即number = number/10,然后继续判断直到 number mod 10 != 9且
 *      number + 1 <= n为止,那么number + 1 是下一个字典序整数
 */
var lexicalOrder = function (n) {
  const ret = [];
  let number = 1;
  for (let i = 0; i < n; i++) {
    ret.push(number);
    // 10,100,1000
    if (number * 10 <= n) {
      number *= 10;
    } else {
      while (number % 10 === 9 || number + 1 > n) {
        number = Math.floor(number / 10);
      }
      number++;
    }
  }
  return ret;
};
