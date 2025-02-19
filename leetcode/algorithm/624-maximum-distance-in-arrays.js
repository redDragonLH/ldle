/**
 * 624. 数组列表中的最大距离
 *
 * 给定 m 个数组，每个数组都已经按照升序排好序了。
 * 现在你需要从两个不同的数组中选择两个整数（每个数组选一个）并且计算它们的距离。两个整数 a 和 b 之间的距离定义为它们差的绝对值 |a-b| 。
 * 返回最大距离。
 */

/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let res = 0;
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];
  for (let i = 1; i < arrays.length; i++) {
    res = Math.max(
      res,
      Math.abs(arrays[i][arrays[i].length - 1] - min),
      Math.abs(max - arrays[i][0])
    );
    min = Math.min(min, arrays[i][0]);
    max = Math.max(max, arrays[i][arrays[i].length - 1]);
  }
  return res;
};
