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
    // 最后一个是1直接返回 false
    if (bits[len]) return false;
    for (let i = len - 1; i > -1; i--) {
        // 如从后数两个元素都是0，那么肯定可以以0结尾，因为就算这两个前边有多少个1，最后都可以被0消掉，奇数个1就是10，偶数个1就剩单个0，因为1都两两消掉
        if (!one && !bits[i] && i <= len - 2) return true
        // 当前元素是0，而且已经计算过1的个数，那就看是奇偶了
        if (!bits[i] && one) {
            return !(one % 2);
        }
        // 从后数的 0 不进入计算
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