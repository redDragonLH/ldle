/**
 * 3789. 采购的最小花费
 *
 * 给你五个整数 cost1, cost2, costBoth, need1 和 need2。
 * 有三种类型的物品可以购买：
 *  * 类型 1 的物品花费 cost1，并仅满足类型 1 的需求 1 个单位。
 *  * 类型 2 的物品花费 cost2，并仅满足类型 2 的需求 1 个单位。
 *  * 类型 3 的物品花费 costBoth，同时满足类型 1 和类型 2 的需求各 1 个单位。
 * 你需要购买足够的物品，使得：
 *  * 满足类型 1 的总需求 至少 为 need1。
 *  * 满足类型 2 的总需求 至少 为 need2。
 * 返回满足这些需求的 最小 可能总花费。
 */
/**
 * 感觉有点像脑筋急转弯,如果costboth 比 cost1 + cost2 便宜,优先买类型 3 的物品,直到nee1或need2 满足为止。
 * 然后再根据剩余的需求购买类型 1 或类型 2 的物品。
 *
 * 可以超出购买需求,不要求正好满足,这就得对比两三种情况的花费。
 *  首先的情况是全买类型3,按need1和need2的最大值购买。超出也无所谓
 *  其次的情况是先买类型1和类型2,再用类型3补齐剩余需求。
 *  还可以考虑按nee1和need2的最小值购买类型3,再补齐剩余需求。
 *
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function (cost1, cost2, costBoth, need1, need2) {
  let totalCost = 0;
  // 情况 1: 先买类型3的物品,再买类型1和类型2的物品
  const bothCount = Math.max(need1, need2);
  totalCost += bothCount * costBoth;

  // 情况 2: 先买类型1和类型2的物品,再用类型3补齐剩余需求
  const totalCost2 =
    need1 * cost1 + need2 * cost2 + Math.max(need1, need2) * costBoth;
  totalCost = Math.min(totalCost, totalCost2);
  // 情况 3: 先买类型3的物品按最小值,再补齐剩余需求
  const bothCount3 = Math.min(need1, need2);
  const totalCost3 =
    bothCount3 * costBoth +
    (need1 - bothCount3) * cost1 +
    (need2 - bothCount3) * cost2;
  totalCost = Math.min(totalCost, totalCost3);
  return totalCost;
};
/**
 * 还有失败,应该是这个思路要考虑的边界条件太多,
 */