/**
 * 2390. 从字符串中移除星号
 * 
 * 给你一个包含若干星号 * 的字符串 s 。
 * 在一步操作中，你可以：
 *  * 选中 s 中的一个星号。
 *  * 移除星号 左侧 最近的那个 非星号 字符，并移除该星号自身。
 * 返回移除 所有 星号之后的字符串。
 * 注意：
 *  * 生成的输入保证总是可以执行题面中描述的操作。
 *  * 可以证明结果字符串是唯一的。
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};
/**
 * 栈使用的还是不熟
 * 执行用时 :116 ms, 在所有 JavaScript 提交中击败了11.04%的用户
 * 内存消耗 :63.11 MB, 在所有 JavaScript 提交中击败了34.36%的用户
 */