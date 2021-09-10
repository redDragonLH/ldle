/**
 * 1894. 找到需要补充粉笔的学生编号
 *
 * 一个班级里有 n 个学生，编号为 0 到 n - 1 。每个学生会依次回答问题，编号为 0 的学生先回答，然后是编号为 1 的学生，以此类推，
 * 直到编号为 n - 1 的学生，然后老师会重复这个过程，重新从编号为 0 的学生开始回答问题。
 *
 * 给你一个长度为 n 且下标从 0 开始的整数数组 chalk 和一个整数 k 。一开始粉笔盒里总共有 k 支粉笔。当编号为 i 的学生回答问题时，
 * 他会消耗 chalk[i] 支粉笔。如果剩余粉笔数量 严格小于 chalk[i] ，那么学生 i 需要 补充 粉笔。
 *
 * 请你返回需要 补充 粉笔的学生 编号 。
 */

/**
 * 传说中的模拟呗
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  let i = 0;
  let len = chalk.length;
  let curr = chalk[0];
  while (curr <= k) {
    k -= curr;
    i++;
    if (i >= len) i = 0;
    curr = chalk[i];
  }
  return i;
};
/**
 * 执行用时：3020 ms, 在所有 JavaScript 提交中击败了15.18%的用户
 * 内存消耗：48.2 MB, 在所有 JavaScript 提交中击败了92.86%的用户
 */

/**
 * 优化算法方案,把所有chalk加到一起,然后除以k,剩下的余数再进行模拟
 */
var chalkReplacer = function (chalk, k) {
  let count = chalk.reduce((a, b) => a + b);
  let remainder = k % count;
  let len = chalk.length;
  let i = 0;
  for (; i < len; i++) {
    if (remainder >= chalk[i]) {
      remainder -= chalk[i];
    } else {
      return i;
    }
  }
  return i;
};

/**
 * 
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了89.29%的用户
 * 内存消耗：48.2 MB, 在所有 JavaScript 提交中击败了92.86%的用户
 */