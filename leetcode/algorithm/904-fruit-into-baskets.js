/**
 * 904. 水果成篮
 *
 * 你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组 fruits 表示，其中 fruits[i] 是第 i 棵树上的水果 种类 。
 *
 * 你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：
 *  * 你只有 两个 篮子，并且每个篮子只能装 单一类型 的水果。每个篮子能够装的水果总量没有限制。
 *  * 你可以选择任意一棵树开始采摘，你必须从 每棵 树（包括开始采摘的树）上 恰好摘一个水果 。采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。
 *  * 一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。
 *
 * 给你一个整数数组 fruits ，返回你可以收集的水果的 最大 数目。
 */

/**
 * 可以理解为求只包含两种元素的最长连续子序列
 *
 * 滑动窗口(双指针?)
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let len = fruits.length;
  if (!len) return len;
  let left = 0,
    right = 0;
  let currentType = [];
  let result = 0;
  for (let i = 0; i < len; i++) {
    if (currentType.includes(fruits[i])) {
      right++;
      result = Math.max(result, right - left);
      continue;
    } else {
      if (currentType.length >= 2) {
        // 还要考虑 类型交杂的情况,不能单纯的返回最后一个
        let over = currentType.shift();
        for (let j = i; j >= 0; j--) {
          if (fruits[j] === over) {
            left = j + 1;
            currentType.push(fruits[i]);
            right++;
            result = Math.max(result, right - left);
            break;
          }
        }
      } else {
        currentType.push(fruits[i]);
        right++;
        result = Math.max(result, right - left);
      }
    }
  }
  return result;
};

/**
 * 官方题解  滑动窗口
 */
var totalFruit = function (fruits) {
  const n = fruits.length;
  const cnt = new Map();

  let left = 0,
    ans = 0;
  for (let right = 0; right < n; ++right) {
    // 塞
    cnt.set(fruits[right], (cnt.get(fruits[right]) || 0) + 1);
    while (cnt.size > 2) {
      // 左侧位置减一,和我的不也差不多么,也没考虑交杂问题吧,
      cnt.set(fruits[left], cnt.get(fruits[left]) - 1);
      if (cnt.get(fruits[left]) == 0) {
        cnt.delete(fruits[left]);
      }
      ++left;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
