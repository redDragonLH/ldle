/**
 * 1550. 存在连续三个奇数的数组
 * 
 * 给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    // 1. 遍历数组，判断当前元素是否为奇数，如果是，则判断下一个元素和下下个元素是否为奇数
    // 2. 如果是，则返回 true，否则返回 false
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
            return true;
        }
    }
    return false;
};
/**
 * 执行用时 : 2 ms, 在所有 JavaScript 提交中击败了 36.36% 的用户
 * 内存消耗 : 55.96 MB, 在所有 JavaScript 提交中击败了 31.82% 的用户
 */