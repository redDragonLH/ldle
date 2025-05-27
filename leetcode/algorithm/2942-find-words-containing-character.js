/**
 * 2942. 查找包含给定字符的单词
 * 
 * 给你一个下标从 0 开始的字符串数组 words 和一个字符 x 。
 * 请你返回一个 下标数组 ，表示下标在数组中对应的单词包含字符 x 。
 * 注意 ，返回的数组可以是 任意 顺序。
 */
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
        result.push(i);
        }
    }
    return result;
};
/**
 * 执行用时 : 1 ms, 在所有 JavaScript 提交中击败了 83.33% 的用户
 * 内存消耗 : 57.52 MB, 在所有 JavaScript 提交中击败了 46.67% 的用户
 */