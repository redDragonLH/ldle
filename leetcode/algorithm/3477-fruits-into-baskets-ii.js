/**
 * 3477. 水果成篮 II
 *
 * 给你两个长度为 n 的整数数组，fruits 和 baskets，其中 fruits[i] 表示第 i 种水果的 数量，baskets[j] 表示第 j 个篮子的 容量。
 * 你需要对 fruits 数组从左到右按照以下规则放置水果：
 *  * 每种水果必须放入第一个 容量大于等于 该水果数量的 最左侧可用篮子 中。
 *  * 每个篮子只能装 一种 水果。
 *  * 如果一种水果 无法放入 任何篮子，它将保持 未放置。
 * 返回所有可能分配完成后，剩余未放置的水果种类的数量。
 */
/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  let count = 0;
  const n = baskets.length;
  for (const fruit of fruits) {
    let unset = 1;
    for (let i = 0; i < n; i++) {
      if (fruit <= baskets[i]) {
        baskets[i] = 0;
        unset = 0;
        break;
      }
    }
    count += unset;
  }
  return count;
};
/**
 * 执行用时：4 ms, 在所有 JavaScript 提交中击败了34.78%的用户
 * 内存消耗：56.23 MB, 在所有 JavaScript 提交中击败了43.48%的用户
 */