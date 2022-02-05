/**
 * 1748. 唯一元素的和
 * 
 * 给你一个整数数组 nums 。数组中唯一元素是那些只出现 恰好一次 的元素。
 * 请你返回 nums 中唯一元素的 和 。
 * 
 * 提示：
 *  * 1 <= nums.length <= 100
 *  * 1 <= nums[i] <= 100
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let result = 0;
    let arr = new Array(101).fill(0);
    for (const item of nums) {
        arr[item]++;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) result += i;
    }
    return result;
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了87.92%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了8.73%的用户
 */