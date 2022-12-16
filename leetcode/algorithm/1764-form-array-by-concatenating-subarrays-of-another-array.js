/**
 * 1764. 通过连接另一个数组的子数组得到一个数组
 *
 * 给你一个长度为 n 的二维整数数组 groups ，同时给你一个整数数组 nums 。
 *
 * 你是否可以从 nums 中选出 n 个 不相交 的子数组，使得第 i 个子数组与 groups[i] （下标从 0 开始）完全相同，且如果 i > 0 ，
 * 那么第 (i-1) 个子数组在 nums 中出现的位置在第 i 个子数组前面。（也就是说，这些子数组在 nums 中出现的顺序需要与 groups 顺序相同）
 *
 * 如果你可以找出这样的 n 个子数组，请你返回 true ，否则返回 false 。
 *
 * 如果不存在下标为 k 的元素 nums[k] 属于不止一个子数组，就称这些子数组是 不相交 的。子数组指的是原数组中连续元素组成的一个序列。
 */

/**
 * 顺序相同就无所谓了~~如果按照逻辑构建肯定可以得到一个同顺序的
 *
 * 不能相交就是不能重复
 *
 * 可以上来就直接遍历构建。那估计时间复杂度就是O^2啥的
 *
 * 话说可以用map 映射吧，遍历groups 有多少种元素，每种元素有多少个，
 * 然后遍历nums 减去相同的元素，最后检查map是否所有元素value 都等于0
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
  let map = new Map();

  let groupsLen = groups.length;
  if (!groupsLen) return true;
  for (const item of groups) {
    for (const subItem of item) {
      map.has(subItem)
        ? map.set(subItem, map.get(subItem) + 1)
        : map.set(subItem, 1);
    }
  }
  for (const element of nums) {
    if (!map.has(element)) return false;
    map.set(element, map.get(element) - 1);
    // if (map.get(element) < 0) return false;
  }
  for (const [k, v] of map) {
    if (v > 0) return false;
  }
  return true;
};
/**
 * 失败
 * 人家要的是子数组,不是子串
 */