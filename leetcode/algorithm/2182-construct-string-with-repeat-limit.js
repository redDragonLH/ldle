/**
 * 2182. 构造限制重复的字符串
 *
 * 给你一个字符串 s 和一个整数 repeatLimit ，用 s 中的字符构造一个新字符串 repeatLimitedString ，使任何字母 连续 出现的次数都不超过 repeatLimit 次。你不必使用 s 中的全部字符。
 * 返回 字典序最大的 repeatLimitedString 。
 * 如果在字符串 a 和 b 不同的第一个位置，字符串 a 中的字母在字母表中出现时间比字符串 b 对应的字母晚，则认为字符串 a 比字符串 b 字典序更大 。如果字符串中前 min(a.length, b.length) 个字符都相同，那么较长的字符串字典序更大。
 */

/**
 * 使用给出的字符,然后连续上不超过3个
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  let sArr = s.split("").sort((a, b) => b.charCodeAt() - a.charCodeAt());
  if (sArr <= 3) {
    return sArr.join("");
  }
  console.log(sArr);
  let reusltArr = [];
  for (let i = 0; i < repeatLimit; i++) {
    reusltArr.push(sArr[i]);
  }
  let remainder = [];
  for (let i = repeatLimit; i < sArr.length; i++) {
    if (count(reusltArr, repeatLimit)) {
      reusltArr.push(sArr[i]);
    } else {
      remainder.push(sArr[i]);
    }
  }
  console.log(remainder);
  while (remainder.length) {
    let curr = remainder.shift();
    if (
      curr != reusltArr[reusltArr.length - 2] ||
      curr != reusltArr[reusltArr.length - 1]
    ) {
      reusltArr.push(curr);
    }
  }
  return reusltArr.join("");
};
let count = (arr, repeatLimit) => {
  let index = arr.length - 1;
  while (repeatLimit) {
    if (arr[index] != arr[index - 1]) return true;
    index--;
  }
  return false;
};


/**
 * 官方题解
 * @param {*} s 
 * @param {*} repeatLimit 
 * @returns 
 */
var repeatLimitedString = function(s, repeatLimit) {
    let N = 26;
    let count = new Array(N).fill(0);
    // 查看有多少元素,用数组i指示元素,数字元素指示数量
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
    }
    let ret = new Array();
    let m = 0;
    for (let i = N - 1, j = N - 2; i >= 0 && j >= 0;) {
        if (count[i] == 0) { // 当前字符已经填完，填入后面的字符，重置 m
            m = 0;
            i--;
        } else if (m < repeatLimit) { // 当前字符未超过限制
            count[i]--;
            ret.push(String.fromCharCode(97 + i));
            m++;
        } else if (j >= i || count[j] == 0) { // 当前字符已经超过限制，查找可填入的其他字符
            j--;
        } else { // 当前字符已经超过限制，填入其他字符，并且重置 m
            count[j]--;
            ret.push(String.fromCharCode(97 + j));
            m = 0;
        }
    }
    return ret.join('');
};
