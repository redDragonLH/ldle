/**
 * 1590. 使数组和能被 P 整除
 *
 * 给你一个正整数数组 nums，请你移除 最短 子数组（可以为 空），使得剩余元素的 和 能被 p 整除。 不允许 将整个数组都移除。
 *
 * 请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 -1 。
 *
 * 子数组 定义为原数组中连续的一组元素。
 */
/**
 *
 * 找到最小子数组长度，使得移除它后剩余元素和能被p整除
 * 核心思路：利用前缀和 + 哈希表，通过模运算找到目标子数组
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  // 计算整个数组的和对p取模，得到需要"消除"的余数
  // 如果总和 % p = need，移除某个子数组后，剩余和才能被p整除
  let need = nums.reduce((a, b) => a + b, 0) % p;

  // 如果need为0，说明数组和已经能被p整除，无需移除任何元素
  if (need === 0) return 0;

  // 哈希表：存储每个前缀和(mod p)最后出现的位置
  // 这样可以快速查找是否存在满足条件的子数组
  let map = new Map();
  map.set(0, -1); // 初始化：前缀和为0的位置设为-1

  let prefix = 0; // 前缀和累加器
  let res = nums.length; // 初始化结果为数组长度（最坏情况）

  for (let i = 0; i < nums.length; i++) {
    // 累加当前元素，并对p取模（保持数值在可控范围）
    prefix = (prefix + nums[i]) % p;

    // 记录当前前缀和最后出现的位置
    map.set(prefix, i);

    // 计算目标前缀和：我们需要找到一个子数组，其和 % p = need
    // 如果 prefix - target ≡ need (mod p)，则 target = (prefix - need + p) % p
    // 加上p是为了处理负数情况，确保结果为正
    let target = (prefix - need + p) % p;

    // 如果目标前缀和存在过，说明找到了一个有效的子数组
    // 子数组长度 = 当前位置 - 目标位置
    if (map.has(target)) {
      res = Math.min(res, i - map.get(target));
    }
  }

  // 如果res仍为数组长度，说明没找到有效子数组，返回-1
  // 否则返回找到的最小子数组长度
  return res === nums.length ? -1 : res;
};
