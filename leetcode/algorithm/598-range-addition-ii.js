/**
 * 598. 范围求和 II
 * 
 * 给定一个初始元素全部为 0，大小为 m*n 的矩阵 M 以及在 M 上的一系列更新操作。
 * 
 * 操作用二维数组表示，其中的每个操作用一个含有两个正整数 a 和 b 的数组表示，含义是将所有符合 0 <= i < a 以及 0 <= j < b 的元素 M[i][j] 的值都增加 1。
 * 
 * 在执行给定的一系列操作后，你需要返回矩阵中含有最大整数的元素个数。
 */

/**
 * 最笨的办法就是实际操作，~~~每个步骤映射到矩阵上，然后最后遍历所有数据获取最大值的数量
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {

};

/**
 * 
 * 其实所有的数据都是从左上角开始的，不管数是多少，那么这样子的话 （0，0）肯定是最大的，那么边界是哪里呢，
 * 理论上就是步骤里面 最小的a,和最小的b
 * 
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    if (!ops.length) return m * n;
    let min = [40000, 40000];
    ops.forEach(e => {
        min[0] = Math.min(min[0], e[0])
        min[1] = Math.min(min[1], e[1])
    })
    return min[0] * min[1]
};
/**
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了49.57%的用户
 * 内存消耗：39.3 MB, 在所有 JavaScript 提交中击败了87.18%的用户
 */