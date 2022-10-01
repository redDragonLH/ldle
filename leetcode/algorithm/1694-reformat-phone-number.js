/**
 * 1694. 重新格式化电话号码
 *
 * 给你一个字符串形式的电话号码 number 。number 由数字、空格 ' '、和破折号 '-' 组成。
 *
 * 请你按下述方式重新格式化电话号码。
 *  * 首先，删除 所有的空格和破折号。
 *  * 其次，将数组从左到右 每 3 个一组 分块，直到 剩下 4 个或更少数字。剩下的数字将按下述规定再分块：
 *  *  * 2 个数字：单个含 2 个数字的块。
 *  *  * 3 个数字：单个含 3 个数字的块。
 *  *  * 4 个数字：两个分别含 2 个数字的块。
 *
 * 最后用破折号将这些块连接起来。注意，重新格式化过程中 不应该 生成仅含 1 个数字的块，并且 最多 生成两个含 2 个数字的块。
 *
 * 返回格式化后的电话号码。
 */

/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  let numberArray = number.split("");
  let result = [];
  let str = "";
  let lowCode = "0".charCodeAt();
  let topCode = "9".charCodeAt();
  for (const item of numberArray) {
    if (item.charCodeAt() >= lowCode && item.charCodeAt() <= topCode) {
      str += item;
      if (str.length === 3) {
        result.push(str);
        str = "";
      }
    }
  }
  // 剩的要么是0，要么是1，2就不用处理，因为支持最后是2
  if (str.length === 2) {
    result.push(str);
  }
  if (str.length === 1) {
    str = result.pop() + str;
    result.push(str[0] + str[1], str[2] + str[3]);
  }
  return result.join("-");
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了45.71%
 * 的用户内存消耗：42.4 MB, 在所有 JavaScript 提交中击败了7.14%的用户
 */