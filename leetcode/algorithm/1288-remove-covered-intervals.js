/**
 * 1288. 删除被覆盖区间
 * 给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。
 * 只有当 c <= a 且 b <= d 时，我们才认为区间 [a,b) 被区间 [c,d) 覆盖。
 * 在完成所有删除操作后，请你返回列表中剩余区间的数目。
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });
    let count = 0; // 记录不被覆盖的区间个数
    let maxRight = 0; // 记录当前不被覆盖的区间的右端点
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] > maxRight) { // 如果当前区间的右端点大于 maxRight，说明当前区间不被覆盖
            count++;
            maxRight = intervals[i][1]; // 更新 maxRight 为当前区间的右端点
        }
    }
    return count;
};
/**
 * 执行用时 :2 ms, 在所有 JavaScript 提交中击败了93.33%的用户
 * 内存消耗 :58.34 MB, 在所有 JavaScript 提交中击败了53.33%的用户
 */