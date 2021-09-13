/**
 * 447. 回旋镖的数量
 *
 * 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
 * 返回平面上所有回旋镖的数量。
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    // 找到三个点 第一个到后两个点的距离是一样的
    let len = points.length;
    let result = 0;
    if(len <=2 ) return result;
    for (let i = 0; i < len; i++) {

    }
};

/**
 * 官方题解: 枚举 + 哈希表
 * 
 * 回旋镖可以视作一个V型的折线,枚举每个points[i],将其当作V型的拐点.设 points 中有m个点到 points[i] 的距离均相等,
 * 需要从这m点中选出2个点当作回旋镖的两个端点,由于题目要求考虑元素的顺序,因此方案数即为在m个元素中选出两个不同元素的排列数
 * 
 * 
 */