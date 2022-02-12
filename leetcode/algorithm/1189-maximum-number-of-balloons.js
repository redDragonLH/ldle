/**
 * 1189. “气球” 的最大数量
 * 
 * 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
 * 
 * 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。
 */

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let mapping = new Map([
        ['b', 0],
        ['a', 0],
        ['l', 0],
        ['o', 0],
        ['n', 0]
    ]);
    for (const t of text) {
        if (mapping.has(t)) {
            mapping.set(t, mapping.get(t) + 1);
        }
    }
    let result = Number.MAX_SAFE_INTEGER;
    for (let [key, value] of mapping) {
        if (key === 'o' || key === 'l') {
            result = Math.min(result, parseInt(value / 2));
        } else {
            result = Math.min(result, value);
        }
    }
    return result;
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了95.77%的用户
 * 内存消耗：43.7 MB, 在所有 JavaScript 提交中击败了5.64%的用户
 */