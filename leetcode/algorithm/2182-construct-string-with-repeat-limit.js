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
