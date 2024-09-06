/**
 * 3174. 清除数字
 *
 * 给你一个字符串 s 。
 * 你的任务是重复以下操作删除 所有 数字字符：
 *  * 删除 第一个数字字符 以及它左边 最近 的 非数字 字符。
 * 请你返回删除所有数字字符以后剩下的字符串。
 */

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
        stack.push(s[i]);
        } else {
        stack.pop();
        }
    }
    return stack.join("");
};
/**
 * 反方向的思路,直接思路是删,这个是存不应该删的
 * 执行用时 :68 ms, 在所有 JavaScript 提交中击败了52.94%的用户
 * 内存消耗 :52.00 MB, 在所有 JavaScript 提交中击败了21.85%的用户
 */