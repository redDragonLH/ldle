/**
 * 1996. 游戏中弱角色的数量
 *
 * 你正在参加一个多角色游戏，每个角色都有两个主要属性：攻击 和 防御 。给你一个二维整数数组 properties ，其中 properties[i] = [attacki, defensei] 表示游戏中第 i 个角色的属性。
 *
 * 如果存在一个其他角色的攻击和防御等级 都严格高于 该角色的攻击和防御等级，则认为该角色为 弱角色 。更正式地，如果认为角色 i 弱于 存在的另一个角色 j ，那么 attackj > attacki 且 defensej > defensei 。
 *
 * 返回 弱角色 的数量。
 */

/**
 * 阶乘遍历肯定可以处理,但是估计肯定得超时
 *
 * 如果按照攻击排序呢,然后一次遍历防御
 *
 * 有问题,要追溯到前边,不仅仅是只和前一个元素有关
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  let len = properties.length;
  if (!len) return 0;
  let result = 0;
  properties.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  // 那得有个数据结构保存比当前元素大的
  let maxDef = 0;
  for (const p of properties) {
      // 把 对比数字 返回到较小的情况,避免对比数字过大导致遗漏
    if (p[1] < maxDef) {
      result++;
    } else {
      maxDef = p[1];
    }
  }
  return result;
};
