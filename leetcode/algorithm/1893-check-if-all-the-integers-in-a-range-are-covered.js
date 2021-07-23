/**
 * 1893. 检查是否区域内所有整数都被覆盖
 *
 * 给你一个二维整数数组 ranges 和两个整数 left 和 right 。每个 ranges[i] = [starti, endi] 表示一个从 starti 到 endi 的 闭区间 。
 *
 * 如果闭区间 [left, right] 内每个整数都被 ranges 中 至少一个 区间覆盖，那么请你返回 true ，否则返回 false 。
 *
 * 已知区间 ranges[i] = [starti, endi] ，如果整数 x 满足 starti <= x <= endi ，那么我们称整数x 被覆盖了。
 */

/**
 * 失败,题意理解有问题
 *
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  ranges.sort((a, b) => a[0] - b[0]);
  let len = ranges.length;
  if (ranges[0][1] < left) return false;
  if (ranges[len-1][0] < right) return false;
  return true;
};

/**
 * 官方题解: 差分数组
 * 
 * 朴素解法: 为了判断某个区域内所有整数都被覆盖,需要对每个整数x计算覆盖该整数的区间数量,记作 cnt.
 *          遍历 ranges 中的所有区间[l,r],将区间内每个整数的 cnt 值加上 1.遍历结束后,检查[left,right] 内的每个整数的cnt 值是否均大于0
 * 
 * 差分数组解法: 复杂度O(n + l),用差分数组 diff 维护相邻两个整数的被覆盖区间数量变化量,其中 diff[i] 对应覆盖整数 i 的区间数量相对于覆盖 i -1 的区间数量变化量.
 *          当遍历到闭区间 [l,r] 时,l 相对于 l - 1 被覆盖区间数量多1,r + 1 相对于 r 被覆盖区间数量少 1.对应搭配差分数组上,需要将 diff[l] 加上1,并将 diff[r + 1] 减去 1.
 *             维护完差分数组后,遍历 diff 求前缀和得出覆盖每个整数的区间数量.下标 i 对应的被覆盖区间数量即为初始数量 0 加上 [1,i] 闭区间的变化量之和.在计算被覆盖区间数量的同时,
 *          可以一并判断[left, right] 闭区间内的所有整数是否都被覆盖
 */
 var isCovered = function(ranges, left, right) {
    const diff = new Array(52).fill(0); // 差分数组
    for (const [l, r] of ranges) {
        diff[l]++;
        diff[r + 1]--;
    }
    // 前缀和
    let curr = 0;
    for (let i = 1; i < 51; i++) {
        curr += diff[i];
        if (left <= i && i <= right && curr <= 0) {
            return false;
        }
    }
    return true;
};