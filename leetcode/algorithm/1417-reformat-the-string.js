/**
 * 1417. 重新格式化字符串
 *
 * 给你一个混合了数字和字母的字符串 s，其中的字母均为小写英文字母。
 *
 * 请你将该字符串重新格式化，使得任意两个相邻字符的类型都不同。也就是说，字母后面应该跟着数字，而数字后面应该跟着字母。
 *
 * 请你返回 重新格式化后 的字符串；如果无法按要求重新格式化，则返回一个 空字符串 。
 */

/**
 * 比较暴力的办法是分割成数组,然后排列
 * 有些边界条件需要处理:
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let result = "";
  // 得先确认数字和字母数据是否对等
  let isEqual = 0;

  let sArr = s.split("");
  sArr.forEach((e) => {
    isNumber(e) ? isEqual++ : isEqual--;
  });
  if (Math.abs(isEqual) > 1) return result;
  // isEqual: 1,0,-1三种情况,0就数字字母哪个在前面都行了数字多一个,那第一个就得是数字
  if (isEqual) {
  }
};

const isNumber = (str) => {
  return "0123456789".includes(str);
};

/**
 * 双指针
 */
var reformat = function (s) {
  let sumDigit = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (isDigit(c)) {
      sumDigit++;
    }
  }
  let sumAlpha = s.length - sumDigit;
  if (Math.abs(sumDigit - sumAlpha) > 1) {
    return "";
  }
  
  let flag = sumDigit > sumAlpha;
  // 这之前的逻辑差不多
  const arr = [...s];
  for (let i = 0, j = 1; i < s.length; i += 2) {
    if (isDigit(arr[i]) !== flag) {
      while (isDigit(arr[j]) !== flag) {
        j += 2;
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr.join("");
};

const isDigit = (ch) => {
  return parseFloat(ch).toString() === "NaN" ? false : true;
};
