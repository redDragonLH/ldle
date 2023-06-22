/**
 * 2496. 数组中字符串的最大值
 *
 * 一个由字母和数字组成的字符串的 值 定义如下：
 *  * 如果字符串 只 包含数字，那么值为该字符串在 10 进制下的所表示的数字。
 *  * 否则，值为字符串的 长度 。
 * 给你一个字符串数组 strs ，每个字符串都只由字母和数字组成，请你返回 strs 中字符串的 最大值 。
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let max = 0;
  for (const str of strs) {
    if(isNaN(str)){
        max = Math.max(max,str.length)
    }else{
        max = Math.max(max,new Number(str) )
    }
  }
  return max
};
/**
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了64.21%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了48.42%的用户
 */

/**
 * 最快题解
 * 
 * 逻辑一样，不过用的新语法
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    return Math.max(...strs.map(i=>{
        if(isNaN(i)){
            return i.length
        }else{
            return parseInt(i, 10)
        }
    }))
};