/**
 * 2274. 不含特殊楼层的最大连续楼层数
 *
 * Alice 管理着一家公司，并租用大楼的部分楼层作为办公空间。Alice 决定将一些楼层作为 特殊楼层 ，仅用于放松。
 * 给你两个整数 bottom 和 top ，表示 Alice 租用了从 bottom 到 top（含 bottom 和 top 在内）的所有楼层。另给你一个整数数组 special ，其中 special[i] 表示  Alice 指定用于放松的特殊楼层。
 * 返回不含特殊楼层的 最大 连续楼层数。
 */

/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function (bottom, top, special) {
  let max = 0;
  let cur = 0;
  let specialArr = new Array(bottom + 1).fill(false);
  for (const s of special) {
    specialArr[s] = true;
  }
  for (let i = bottom; i <= top; i++) {
    if (specialArr[i]) {
      max = Math.max(max, cur);
      cur = 0;
    } else {
      cur++;
    }
  }
  return Math.max(max, cur);
};
/**
 * 超时 , 10^9的楼层还是有点超纲了
 */