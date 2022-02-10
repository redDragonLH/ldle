/**
 * 1447. 最简分数
 * 给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。
 */
/**
 * 没有余数?有公约数也不行
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (j === 1 || i % j) {
        result.push(j + "/" + i);
      }
    }
  }
  return result;
};
