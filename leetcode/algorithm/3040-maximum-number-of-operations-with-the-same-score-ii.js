/**
 * 3040. 相同分数的最大操作数目 II
 * 
 * 给你一个整数数组 nums ，如果 nums 至少 包含 2 个元素，你可以执行以下操作中的 任意 一个：
 *  * 选择 nums 中最前面两个元素并且删除它们。
 *  * 选择 nums 中最后两个元素并且删除它们。
 *  * 选择 nums 中第一个和最后一个元素并且删除它们。
 * 
 * 一次操作的 分数 是被删除元素的和。
 * 在确保 所有操作分数相同 的前提下，请你求出 最多 能进行多少次操作。
 * 请你返回按照上述要求 最多 可以进行的操作次数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    const n = nums.length;
    const helper = (i, j, target) => {
        const memo = Array.from({ length: n }, () => Array(n).fill(-1));
        const dfs = (i, j) => {
            if (i >= j) {
                return 0;
            }
            if (memo[i][j] != -1) {
                return memo[i][j];
            }
            let ans = 0;
            if (nums[i] + nums[i + 1] == target) {
                ans = Math.max(ans, 1 + dfs(i + 2, j));
            }
            if (nums[j - 1] + nums[j] == target) {
                ans = Math.max(ans, 1 + dfs(i, j - 2));
            }
            if (nums[i] + nums[j] == target) {
                ans = Math.max(ans, 1 + dfs(i + 1, j - 1));
            }
            memo[i][j] = ans;
            return ans;
        }
        return dfs(i, j);
    }

    let res = 0;
    res = Math.max(res, helper(0, n - 1, nums[0] + nums[n - 1]));
    res = Math.max(res, helper(0, n - 1, nums[0] + nums[1]));
    res = Math.max(res, helper(0, n - 1, nums[n - 2] + nums[n - 1]));
    return res;
};
/**
 * 累死递归，但是逻辑种类有限，所以可以使用固定逻辑对数据进行遍历
 */