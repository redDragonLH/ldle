/**
 * 3138. 同位字符串连接的最小长度
 *
 * 给你一个字符串 s ，它由某个字符串 t 和若干 t  的 同位字符串 连接而成。
 * 请你返回字符串 t 的 最小 可能长度。
 * 同位字符串 指的是重新排列一个单词得到的另外一个字符串，原来字符串中的每个字符在新字符串中都恰好只使用一次。
 */
/**
 * 计算有多少种字符和每种字符的数量
 * 然后用最小的字符数量除以每个字符的数量，得到最小长度
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function (s) {
  let map = new Map();
  let min = s.length;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
      min = Math.min(min, map.get(s[i]));
    } else {
      map.set(s[i], 1);
    }
  }

  return min;
};
/**
 * 理解错误,必须是字符串t拼接其他t的同位字符串,也就是t必须在最前面
 */

/**
 * 官方题解 枚举 -暴力
 * @param {*} s
 * @param {*} m
 * @returns
 */
var check = function (s, m) {
  let count0 = new Array(26).fill(0);
  for (let j = 0; j < s.length; j += m) {
    let count1 = new Array(26).fill(0);
    for (let k = j; k < j + m; k++) {
      count1[s.charCodeAt(k) - "a".charCodeAt(0)]++;
    }
    if (j > 0 && !count0.every((val, index) => val === count1[index])) {
      return false;
    }
    count0 = count1.slice();
  }
  return true;
};

var minAnagramLength = function (s) {
  let n = s.length;
  for (let i = 1; i < n; i++) {
    if (n % i !== 0) {
      continue;
    }
    if (check(s, i)) {
      return i;
    }
  }
  return n;
};
