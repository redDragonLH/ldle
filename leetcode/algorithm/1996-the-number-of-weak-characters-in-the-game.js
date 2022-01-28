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

/**
 * 官方题解: 单调栈
 *
 *  使用单调递增栈的解法,单调递增栈中保证栈内所有的元素从小到大排列.按照角色攻击值的大小从低到高依次遍历每个元素,使用单调
 * 递增栈保存所有角色的防御值,遍历时如果发现栈顶的角色p的防御值小于当前的角色q的防御值,则可以认为找到攻击值和防御值都严格
 * 大于p的角色q
 *  如果所有角色的攻击值都不相同,则上述的单调递增栈解法比较简单,难点在于如何处理攻击值相同但防御值不同的角色比较问题.按照攻击值
 * 相同的防御值从大到小排列,这样即可以保证攻击值相同但防御值不同时的角色在进行比较时不会产生计数
 */
var numberOfWeakCharacters = function (properties) {
  //按照攻击值相同的防御值从大到小排列
  properties.sort((o1, o2) => {
    return o1[0] === o2[0] ? o2[1] - o1[1] : o1[0] - o2[0];
  });
  let ans = 0;
  const st = [];
  for (const p of properties) {
    while (st.length && st[st.length - 1] < p[1]) {
      st.pop();
      ans++;
    }
    st.push(p[1]);
  }
  return ans;
};
