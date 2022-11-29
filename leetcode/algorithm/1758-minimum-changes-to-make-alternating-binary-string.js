/**
 * 1758. 生成交替二进制字符串的最少操作数
 *
 * 给你一个仅由字符 '0' 和 '1' 组成的字符串 s 。一步操作中，你可以将任一 '0' 变成 '1' ，或者将 '1' 变成 '0' 。
 *
 * 交替字符串 定义为：如果字符串中不存在相邻两个字符相等的情况，那么该字符串就是交替字符串。例如，字符串 "010" 是交替字符串，而字符串 "0100" 不是。
 *
 * 返回使 s 变成 交替字符串 所需的 最少 操作数。
 */

/**
 * 情况考虑过少
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let prev = s[0];
  let len = s.length;
  let count = 0;
  for (let i = 1; i < len; i++) {
    if (s[i] === prev) {
      prev = prev === "0" ? "1" : "0";
      count++;
    } else {
      prev = s[i];
    }
  }
  return count;
};

/**
 * 只会有两个结果 101...,010...
 * 
 * 理论基础:变成这两种不同的交替二进制字符串所需要的最少操作数加起来等于 s 的长度，我们只需要计算出变为其中一种字符串的最少操作数，就可以推出另一个最少操作数，然后取最小值即可。
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    // 判断当前字符是否符合当前位置的逻辑 010101...
    if (c !== String.fromCharCode("0".charCodeAt() + (i % 2))) {
        //不等于就要改变,那么动作量+1
      cnt++;
    }
  }
  // 默认此次没有改变的下个模式一定会改变
  return Math.min(cnt, s.length - cnt);
};
