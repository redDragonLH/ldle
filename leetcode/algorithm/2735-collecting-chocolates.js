/**
 * 2735. 收集巧克力
 *
 * 给你一个长度为 n 、下标从 0 开始的整数数组 nums ，表示收集不同巧克力的成本。每个巧克力都对应一个不同的类型，最初，位于下标 i 的巧克力就对应第 i 个类型。
 * 在一步操作中，你可以用成本 x 执行下述行为：
 *  * 同时修改所有巧克力的类型，将巧克力的类型 ith 修改为类型 ((i + 1) mod n)th。
 * 假设你可以执行任意次操作，请返回收集所有类型巧克力所需的最小成本。
 */

/**
 * 简单来说就是花钱买下来,或者花钱转一个位置再花钱买下来
 * 可以先把小于转圈成本的位置买下来,然后要怎么处理,每转一次就判断一下?比成本小就买下来?
 * 
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minCost = function (nums, x) {

};

/**
 * 官方题解
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minCost = function(nums, x) {
    let n = nums.length;
    const f = [...nums];
    // 把当前总和得出来
    let ans = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    for (let k = 1; k < n; k++) {
        for (let i = 0; i < n; i++) {
            // 转一次,小于成本的不用动
            // 对于转圈的处理还是挺好的
            f[i] = Math.min(f[i], nums[(i + k) % n])
        }
        // 把改完的重新加起来
        sum = f.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        ans = Math.min(ans, k * x + sum);
    }    
    return ans;
};
/**
 * 三层遍历了吧
 * 比我想的low一点
 */