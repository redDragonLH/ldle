/**
 * 38. 外观数列
 *
 * 给定一个正整数 n ，输出外观数列的第 n 项。
 *
 * 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。
 *
 * 你可以将其视作是由递归公式定义的数字字符串序列：
 *  * countAndSay(1) = "1"
 *  * countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。
 */
/**
 * 描述上一个字符串有什么数字,且完全用数字表示
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let str = "1";
  while (--n) {
    // 还得把相同数字合并
    let curr = "";
    let currLen = 0;
    let temp = "";
    // 重点是 <= 判断,因为如果按照常规的单 < 判断,会导致最后一个字符串无法正常处理而导致需要额外的逻辑,但是这额外逻辑会较为复杂,应尽量消掉
    // 而使用 <= 就可以把最后一个数字也进行处理且无需增加单独逻辑,而且并不会引发错误
    for (let i = 0; i <= str.length; i++) {
      if (curr === str[i]) {
        currLen++;
      } else {
        currLen && (temp += currLen + curr);

        //
        curr = str[i];
        currLen = 1;
      }
    }
    str = temp;
  }

  return str;
};

/**
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了89.26%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了20.72%的用户
 */