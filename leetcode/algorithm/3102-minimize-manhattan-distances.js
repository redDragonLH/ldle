/**
 * 3102. 最小化曼哈顿距离
 *
 * 给你一个下标从 0 开始的数组 points ，它表示二维平面上一些点的整数坐标，其中 points[i] = [xi, yi] 。
 * 两点之间的距离定义为它们的 曼哈顿距离。
 * 请你恰好移除一个点，返回移除后任意两点之间的 最大 距离可能的 最小 值。
 */

/**
 * 遍历可以解决,不过对不起困难题,而且应该是超时的
 * 
 * 官方题解: 找到最远两点,检查去掉这两点之一的最大曼哈顿距离,答案就在其中
 * @param {number[][]} points
 * @return {number}
 */
var minimumDistance = function(points) {
    const n = points.length;
    const sx = [];
    const sy = [];
    
    for (let i = 0; i < n; i++) {
        const [x, y] = points[i];
        sx.push([x - y, i]);
        sy.push([x + y, i]);
    }
    sx.sort((a, b) => a[0] - b[0]);
    sy.sort((a, b) => a[0] - b[0]);
    const maxVal1 = sx[n - 1][0] - sx[0][0];
    const maxVal2 = sy[n - 1][0] - sy[0][0];
    let res = Infinity;
    if (maxVal1 >= maxVal2) {
        const i = sx[0][1], j = sx[n - 1][1];
        // 去掉 i 后的最大曼哈顿距离
        res = Math.min(res, Math.max(remove(sx, i), remove(sy, i)));
        // 去掉 j 后的最大曼哈顿距离
        res = Math.min(res, Math.max(remove(sx, j), remove(sy, j)));
    } else {
        const i = sy[0][1], j = sy[n - 1][1];
        // 去掉 i 后的最大曼哈顿距离
        res = Math.min(res, Math.max(remove(sx, i), remove(sy, i)));
        // 去掉 j 后的最大曼哈顿距离
        res = Math.min(res, Math.max(remove(sx, j), remove(sy, j)));
    }
    return res;
};

function remove(arr, i) {
    const n = arr.length;
    if (arr[0][1] === i) {
        return arr[n - 1][0] - arr[1][0];
    } else if (arr[n - 1][1] === i) {
        return arr[n - 2][0] - arr[0][0];
    } else {
        return arr[n - 1][0] - arr[0][0];
    }
}
