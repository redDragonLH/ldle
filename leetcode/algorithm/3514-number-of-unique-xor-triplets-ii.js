/**
 * 3514. 不同 XOR 三元组的数目 II
 *
 * 给你一个整数数组 nums 。
 * XOR 三元组 定义为三个元素的异或值 nums[i] XOR nums[j] XOR nums[k]，其中 i <= j <= k。
 * 返回所有可能三元组 (i, j, k) 中 不同 的 XOR 值的数量。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      for (let k = j; k < nums.length; k++) {
        set.add(nums[i] ^ nums[j] ^ nums[k]);
      }
    }
  }
  return set.size;
};
/**
 * 超时
 */

var uniqueXorTriplets = function (nums) {
  let m = 0;
  for (const v of nums) {
    m = Math.max(m, v);
  }
  let u = 1;
  while (u <= m) {
    u <<= 1;
  }
  const one = new Array(u).fill(false);
  const two = new Array(u).fill(false);
  const three = new Array(u).fill(false);
  for (const v of nums) {
    one[v] = true;
    for (let x = 0; x < u; x++) {
      if (one[x]) {
        two[x ^ v] = true;
      }
    }
  }
  for (const v of nums) {
    for (let x = 0; x < u; x++) {
      if (two[x]) {
        three[x ^ v] = true;
      }
    }
  }
  let ans = 0;
  for (const b of three) {
    if (b) {
      ans++;
    }
  }
  return ans;
};
/**
 * 官方题解
 */