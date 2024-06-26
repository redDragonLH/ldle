/**
 * 1774. 最接近目标价格的甜点成本
 *
 * 你打算做甜点，现在需要购买配料。目前共有 n 种冰激凌基料和 m 种配料可供选购。而制作甜点需要遵循以下几条规则：
 *  * 必须选择 一种 冰激凌基料。
 *  * 可以添加 一种或多种 配料，也可以不添加任何配料。
 *  * 每种类型的配料 最多两份 。
 *
 * 给你以下三个输入：
 *  * baseCosts ，一个长度为 n 的整数数组，其中每个 baseCosts[i] 表示第 i 种冰激凌基料的价格。
 *  * toppingCosts，一个长度为 m 的整数数组，其中每个 toppingCosts[i] 表示 一份 第 i 种冰激凌配料的价格。
 *  * target ，一个整数，表示你制作甜点的目标价格。
 * 你希望自己做的甜点总成本尽可能接近目标价格 target 。
 *
 * 返回最接近 target 的甜点成本。如果有多种方案，返回 成本相对较低 的一种。
 *
 */

/**
 * 返回的是一个价格，成本相对较低这个条件有个蛋用，
 * 双重循环？遍历查找所有可能的结果，如果是等于直接返回就行~
 *
 * 最接近~~可以不到，可以超过，看的是绝对值
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  let res = _.min(baseCosts);
  const dfs = (toppingCosts, p, curCost, target) => {
    if (Math.abs(res - target) < curCost - target) {
      return;
    } else if (Math.abs(res - target) >= Math.abs(curCost - target)) {
      if (Math.abs(res - target) > Math.abs(curCost - target)) {
        res = curCost;
      } else {
        res = Math.min(res, curCost);
      }
    }
    if (p === toppingCosts.length) {
      return;
    }
    dfs(toppingCosts, p + 1, curCost + toppingCosts[p] * 2, target);
    dfs(toppingCosts, p + 1, curCost + toppingCosts[p], target);
    dfs(toppingCosts, p + 1, curCost, target);
  };
  for (const b of baseCosts) {
    dfs(toppingCosts, 0, b, target);
  }
  return res;
};
