/**
 * 1317. 将整数转换为两个无零整数的和
 *
 * 「无零整数」是十进制表示中 不含任何 0 的正整数。
 * 给你一个整数 n，请你返回一个 由两个整数组成的列表 [a, b]，满足：
 *  * a 和 b 都是无零整数
 *  * a + b = n
 * 题目数据保证至少有一个有效的解决方案。
 * 如果存在多个有效解决方案，你可以返回其中任意一个。
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    for (let i = 1; i < n; i++) {
        let a = i;
        let b = n - i;
        if (isNoZero(a) && isNoZero(b)) {
            return [a, b];
        }
    }
};

function isNoZero(num) {
    while (num > 0) {
        if (num % 10 === 0) {
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
}
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：54.89 MB, 在所有 JavaScript 提交中击败了13.64%的用户
 */