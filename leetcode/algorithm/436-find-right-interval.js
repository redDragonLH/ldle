/**
 * 436. 寻找右区间
 *
 * 给你一个区间数组 intervals ，其中 intervals[i] = [starti, endi] ，且每个 starti 都 不同 。
 *
 * 区间 i 的 右侧区间 可以记作区间 j ，并满足 startj >= endi ，且 startj 最小化 。
 *
 * 返回一个由每个区间 i 的 右侧区间 的最小起始位置组成的数组。如果某个区间 i 不存在对应的 右侧区间 ，则下标 i 处的值设为 -1 。
 */
/**
 * 题目都没理解
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
    // 数组长度
  const n = intervals.length;
  // 构建和intervals一样的二维数组,保存start
  const startIntervals = new Array(n).fill(0).map(() => new Array(2).fill(0));
  // 保存end
  // 这两个数组用来保存当前位置元素的区间么?
  const endIntervals = new Array(n).fill(0).map(() => new Array(2).fill(0));
  // 数组第二个元素保存的是这个start 的原始位置
  // 把当前数据分开之后有什么意义
  for (let i = 0; i < n; i++) {
    startIntervals[i][0] = intervals[i][0];
    startIntervals[i][1] = i;
    endIntervals[i][0] = intervals[i][1];
    endIntervals[i][1] = i;
  }
  // 降序排序
  // 我还以为不能改变顺序
  startIntervals.sort((o1, o2) => o1[0] - o2[0]);
  endIntervals.sort((o1, o2) => o1[0] - o2[0]);

  const ans = new Array(n).fill(0);
  for (let i = 0, j = 0; i < n; i++) {
    while (j < n && endIntervals[i][0] > startIntervals[j][0]) {
      j++;
    }
    if (j < n) {
      ans[endIntervals[i][1]] = startIntervals[j][1];
    } else {
      ans[endIntervals[i][1]] = -1;
    }
  }
  return ans;
};
