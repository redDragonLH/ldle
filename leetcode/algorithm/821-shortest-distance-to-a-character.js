/**
 * 821. 字符的最短距离
 *
 * 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
 *
 * 返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。
 *
 * 两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。
 */

/**
 * 先把c 找出来,然后对比前后两个c哪个比较近
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let sLen = s.length;
  let cIndex = [];
  let answer = new Array(sLen);
  for (let i = 0; i < sLen; i++) {
    if (s[i] === c) {
      cIndex.push(i);
    }
  }
  let index = 0;
  for (let i = 0; i < sLen; i++) {
    if (s[i] === c) {
      answer[i] = 0;
      if (i > cIndex[index]) index++;
    } else {
      if (i > cIndex[index]) index++;
      if (index >= cIndex.length) index = cIndex.length - 1;
      answer[i] = Math.min(
        Math.abs(cIndex[index] - i),
        Math.abs(cIndex[index - 1 < 0 ? 0 : index - 1] - i)
      );
    }
  }
  return answer;
};

/**
 * 字符位置映射表+ 遍历.注意边界条件
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了43.00%的用户
 * 内存消耗：42.6 MB, 在所有 JavaScript 提交中击败了74.36%的用户
 */