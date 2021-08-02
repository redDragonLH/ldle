/**
 * 1337. 矩阵中战斗力最弱的 K 行
 * 
 * 给你一个大小为 m * n 的矩阵 mat，矩阵由若干军人和平民组成，分别用 1 和 0 表示。
 * 
 * 请你返回矩阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。
 * 
 * 如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。
 * 
 * 军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。
*/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let arr = [];
    let len = mat.length
    for (let i = 0; i < len; i++) {
        let index = 0
        while (mat[i][index]) {
            index++
        }
        arr.push([index, i])

    }
    arr.sort((a, b) => a[0] - b[0]);
    let result = []
    while (k--) {
        result.push(arr.shift()[1])
    }
    return result;
};
/**
 * 平铺直叙
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了73.20%的用户
 * 内存消耗：40.2 MB, 在所有 JavaScript 提交中击败了13.40%的用户
 */

/**
 * 在数据过大情况下需要使用二分查找
 * 
 * 小顶堆也是排序的良好替代品
 */