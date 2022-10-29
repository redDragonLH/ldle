/**
 * 784. 字母大小写全排列
 *
 * 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。
 *
 * 返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。
 */
/**
 * 回溯应该可以解决
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let sArr = s.split("");
  let len = sArr.length;
  let result = [];
  if (!len) return [];
  backtracking(sArr, 0, len, result);
  return result;
};

const backtracking = (sArr, start, len, result) => {
  result.push(sArr.join(""));
  let charCodeDistance = 32;
  for (let i = start; i < len; i++) {
    if (isLetter(sArr[i])) {
      let oldLetter = sArr[i];
      let letter = "";
      if (isUppercase(sArr[i])) {
        letter = String.fromCharCode(sArr[i].charCodeAt() + charCodeDistance);
      } else {
        letter = String.fromCharCode(sArr[i].charCodeAt() - charCodeDistance);
      }
      sArr[i] = letter;
      backtracking(sArr, i + 1, len, result);
      sArr[i] = oldLetter;
    }
  }
};
const isLetter = (str) => {
  if (isUppercase(str) || isLowercase(str)) return true;
  return false;
};

const isUppercase = (str) => {
  if (str.charCodeAt() >= 65 && str.charCodeAt() <= 90) return true;
  return false;
};

const isLowercase = (str) => {
  if (str.charCodeAt() >= 97 && str.charCodeAt() <= 122) return true;
  return false;
};

/**
 * 用时应该比较长啊，毕竟代码比较啰嗦
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了77.74%的用户
 * 内存消耗：45 MB, 在所有 JavaScript 提交中击败了31.32%的用户
 */