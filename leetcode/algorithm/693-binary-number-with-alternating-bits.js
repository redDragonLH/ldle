/**
 * 693. 交替位二进制数
 *
 * 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。
 */

/**
 * 菜一点的方案就是右移二进制,但是得确认只有多少位,要不然后边都是0,会出错
 *
 * 转为二进制然后字符串化也行吧
 *
 * 或者数字应该是有规律的吧
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let str = dec2bin(n);
  let len = str.length;
  let start = 1;
  let flag = str[0];
  while (start < len) {
    if (str[start] !== flag) {
      flag = str[start++];
    } else {
      return false;
    }
  }
  return true;
};

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
/**
 * 执行用时：48 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：41.3 MB, 在所有 JavaScript 提交中击败了13.61%的用户
 */

/**
 * 位运算
 * @param {*} n 
 * @returns 
 */
 var hasAlternatingBits = function(n) {
    const a = n ^ (n >> 1);
    return (a & (a + 1)) === 0;
};