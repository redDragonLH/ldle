/**
 * 1684. 统计一致字符串的数目
 *
 * 给你一个由不同字符组成的字符串 allowed 和一个字符串数组 words 。如果一个字符串的每一个字符都在 allowed 中，就称这个字符串是 一致字符串 。
 *
 * 请你返回 words 数组中 一致字符串 的数目。
 */
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let result = 0;
    words.forEach(e=>{
       for (let i = 0; i < e.length; i++) {
        if(!allowed.includes(e[i])) break;
        if(i === e.length-1){
            result++
        }
       }
    })
    return result;
};
/**
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了100%的用户
 * 内存消耗：50 MB, 在所有 JavaScript 提交中击败了63.57%的用户
 */