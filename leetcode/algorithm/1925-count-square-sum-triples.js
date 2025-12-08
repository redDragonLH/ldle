/**
 * 1925. 统计平方和三元组的数目
 *
 * 一个 平方和三元组 (a,b,c) 指的是满足 a2 + b2 = c2 的 整数 三元组 a，b 和 c 。
 * 给你一个整数 n ，请你返回满足 1 <= a, b, c <= n 的 平方和三元组 的数目。
 */
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let squares = [0];
  for (let i = 1; i <= n; i++) {
    squares.push(i * i);
  }
  let set = new Set(squares);
  let count = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = a+1; b <= n; b++) {
      let cSquare = squares[a] + squares[b];
      if (set.has(cSquare)) {
        count+=2;
      }
    }
  }
  return count;
};
/**
 * 平方和 set 看起来占了很大一部分运行时间
 * 执行用时：19 ms, 在所有 JavaScript 提交中击败了31.25%的用户
 * 内存消耗：56.38 MB, 在所有 JavaScript 提交中击败了12.50%的用户
 */

/**
 * 官方题解
 */
var countTriples = function (n) {
  let res = 0;
  // 枚举 a 与 b
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      // 判断是否符合要求
      let c = Math.floor(Math.sqrt(a * a + b * b + 1));
      if (c <= n && c * c === a * a + b * b) {
        res++;
      }
    }
  }
  return res;
};
/**
 * 为什么每次都平方的方案要比一次平方的方案快?
 * 执行用时：8 ms, 在所有 JavaScript 提交中击败了75.00%的用户
 * 内存消耗：54.84 MB, 在所有 JavaScript 提交中击败了68.75%的用户
 */
