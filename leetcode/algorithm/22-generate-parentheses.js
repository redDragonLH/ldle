/**
 * 22. 括号生成
 * 
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const backtrack = (current, open, close) => {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    };
    backtrack('', 0, 0);
    return result;
};