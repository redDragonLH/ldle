/**
 * 2315. 统计星号
 *
 * 给你一个字符串 s ，每 两个 连续竖线 '|' 为 一对 。换言之，第一个和第二个 '|' 为一对，第三个和第四个 '|' 为一对，以此类推。
 *
 * 请你返回 不在 竖线对之间，s 中 '*' 的数目。
 *
 * 注意，每个竖线 '|' 都会 恰好 属于一个对。
 */

/**
 * 如何找到一对竖线~
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let count = 0;
  let len = s.length;
  let result = 0;
  let current = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === "*") current++;
    if (s[i] === "|") {
      count++;
      if (count & (1 === 1)) {
        result += current;
      }
      current = 0;
    }
  }
  result += current;
  return result;
};
/**
 * 通过 & 操作获取当前竖线奇偶性,因为都是成对的所以先奇后偶之内的 * 为需要丢弃的,这样判断条件就出来了
 * 
 * 注意边界条件,字符串最后时不管奇偶只要有没有被竖线包围起来的就是 不在竖线对之中的
 *
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了87.69%的用户
 * 内存消耗：41.3 MB, 在所有 JavaScript 提交中击败了64.61%的用户
 */
