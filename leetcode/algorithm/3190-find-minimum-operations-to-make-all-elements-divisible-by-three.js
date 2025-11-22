/**
 * 3190. 使所有元素都可以被 3 整除的最少操作数
 * 
 * 给你一个整数数组 nums 。一次操作中，你可以将 nums 中的 任意 一个元素增加或者减少 1 。
 * 请你返回将 nums 中所有元素都可以被 3 整除的 最少 操作次数。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let operations = 0;
    nums.forEach((num) => {
        let operation = num % 3;
        if(operation) {
            operations += 1;
        } 
    });
    return operations;
};
/**
 * 执行用时：0 ms, 在所有 JavaScript 提交中击败了 100.00% 的用户
 * 内存消耗：56.01 MB, 在所有 JavaScript 提交中击败了 27.78% 的用户
 */