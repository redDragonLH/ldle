/**
 * 2520. 统计能整除数字的位数
 *
 * 给你一个整数 num ，返回 num 中能整除 num 的数位的数目。
 * 如果满足 nums % val == 0 ，则认为整数 val 可以整除 nums 。
 */

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let result = 0
  let numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    let data = parseInt(numStr[i])
    if(!(num/data)){
        result++
    }
    
  }
  return result
};
/**
 * 执行用时 :56 ms, 在所有 JavaScript 提交中击败了91.67%的用户
 * 内存消耗 :40.09 MB, 在所有 JavaScript 提交中击败27.78%的用户
 */
