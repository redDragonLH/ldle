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
    for (let b = 1; b <= n; b++) {
      let cSquare = squares[a] + squares[b];
      if (set.has(cSquare)) {
        let c = Math.sqrt(cSquare);
        if (c <= n) {
          count++;
        }
      }
    }
  }
  return count;
};
/**
 * 执行用时：43 ms, 在所有 JavaScript 提交中击败了25.00%的用户
 * 内存消耗：56.22 MB, 在所有 JavaScript 提交中击败了12.50%的用户
 */