/**
 * 面试题 05.02. 二进制数转字符串
 *
 * 二进制数转字符串。给定一个介于0和1之间的实数（如0.72），类型为double，打印它的二进制表达式。如果该数字无法精确地用32位以内的二进制表示，则打印“ERROR”。
 */

/**
 * 将实数的十进制表示转换成二进制表示的方法是:每次将实数乘以2,将此时的整数部分添加到二进制的末尾,然后将整数部分置为0,重复上述操作
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  let sb = "0.";
  while (sb.length <= 32 && num !== 0) {
    num *= 2;
    const digit = Math.floor(num);
    sb += digit;
    num -= digit;
  }
  // 超过32位必定有循环,不管是循环还是超出都是error
  return sb.length <= 32 ? sb : "ERROR";
};
