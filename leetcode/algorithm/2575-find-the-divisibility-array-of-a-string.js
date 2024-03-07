/**
 * 2575. 找出字符串的可整除数组
 *
 * 给你一个下标从 0 开始的字符串 word ，长度为 n ，由从 0 到 9 的数字组成。另给你一个正整数 m 。
 * word 的 可整除数组 div  是一个长度为 n 的整数数组，并满足：
 *  * 如果 word[0,...,i] 所表示的 数值 能被 m 整除，div[i] = 1
 *  * 否则，div[i] = 0
 * 返回 word 的可整除数组。
 */

/**
 * @param {string} word
 * @param {number} m
 * @return {number[]}
 */
var divisibilityArray = function (word, m) {
  let len = word.length;
  let result = new Array(len).fill(0);
  let current = "";
  m = BigInt(m);
  for (let i = 0; i < len; i++) {
    current += word[i];
    let num = BigInt(current);
    if (!(num % m)) {
      result[i] = 1;
    }
  }
  return result;
};
/**
 * 超时,这就不知道怎么优化了
 * 果然优化不了
 */

/**
 * 官方题解
 * 模运算
 * @param {*} word
 * @param {*} m
 * @returns
 */
var divisibilityArray = function (word, m) {
  const res = [];
  let cur = 0;
  for (const c of word) {
    // 每次都拆成比m小的数字判断,这也是有后效性的吗?多段数字连起来的数字也是可以被整除的吗
    // 因为前一段数字已经被整除,所有就算这段数字与后面的数字相加,前段数字也是只是商的前面的整数,不会对余数造成任何影响
    cur = (cur * 10 + (c.charCodeAt(0) - "0".charCodeAt(0))) % m;
    res.push(cur === 0 ? 1 : 0);
  }
  return res;
};
/**
 * 数字也可以用后效性思路处理,这样就可以分段,不分段超时
 */