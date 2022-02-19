/**
 * 717. 1比特与2比特字符
 * 
 * 有两种特殊字符：
 *  * 第一种字符可以用一个比特 0 来表示
 *  * 第二种字符可以用两个比特(10 或 11)来表示、
 * 
 * 给定一个以 0 结尾的二进制数组 bits ，如果最后一个字符必须是一位字符，则返回 true 。
 */
/**
 * 只与最后一个元素0的前面的连续1的个数有关系。
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let len = bits.length;
    let one = 0
    if (bits[len]) return false;
    for (let i = len - 1; i > -1; i--) {
        if (!one && !bits[i] && i <= len - 2) return true
        if (!bits[i] && one) {
            return !(one % 2);
        }
        if (!bits[i] && !one) {
            continue;
        } else {
            one++;
        }
    }
    return !(one % 2);
};
/**
 * 执行用时：52 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：40.8 MB, 在所有 JavaScript 提交中击败了25.23%的用户
 */