/**
 * 56. 合并区间
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];

  for (const iter of intervals) {
    if (!result.length) {
      result.push(iter);
      continue;
    }

    if (
      result[result.length - 1][1] >= iter[0] &&
      result[result.length - 1][1] <= iter[1]
    ) {
      result[result.length - 1][1] = iter[1];
    } else {
      if (result[result.length - 1][1] >= iter[1]) {
        continue;
      }
      result.push(iter);
    }
  }
  return result;
};
/**
 * result 的index还可以优化，然后其他的应该就没啥了，排序改成遍历时对比感觉消耗也差不多，毕竟每次都要遍历结果
 * 
 * 执行用时：112 ms, 在所有 JavaScript 提交中击败了25.23%的用户
 * 内存消耗：46.18 MB, 在所有 JavaScript 提交中击败了67.30%的用户
 */