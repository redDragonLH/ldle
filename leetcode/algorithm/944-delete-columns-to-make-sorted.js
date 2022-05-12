/**
 * 944. 删列造序
 * 
 * 给你由 n 个小写字母字符串组成的数组 strs，其中每个字符串长度相等。
 * 这些字符串可以每个一行，排成一个网格。例如，strs = ["abc", "bce", "cae"] 可以排列为：
 * abc
 * bce
 * cae
 * 
 * 你需要找出并删除 不是按字典序升序排列的 列。在上面的例子（下标从 0 开始）中，列 0（'a', 'b', 'c'）和列 2（'c', 'e', 'e'）都是按升序排列的，而列 1（'b', 'c', 'a'）不是，所以要删除列 1 。
 * 
 * 返回你需要删除的列数。
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let result = 0;
    if (!strs.length) return result;
    let len = strs[0].length;
    let strsLen = strs.length;
    for (let i = 0; i < len; i++) {
        let isIncrease = true
        for (let j = 1; j < strsLen; j++) {
            if (strs[j][i].charCodeAt() < strs[j - 1][i].charCodeAt()) {
                result++
                break;
            }

        }
    }
    return result
};
/**
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了82.88%的用户
 * 内存消耗：45.1 MB, 在所有 JavaScript 提交中击败了44.14%的用户
 */