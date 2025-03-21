/**
 * 2680. 最大或值
 *
 * 给你一个下标从 0 开始长度为 n 的整数数组 nums 和一个整数 k 。每一次操作中，你可以选择一个数并将它乘 2 。
 * 你最多可以进行 k 次操作，请你返回 nums[0] | nums[1] | ... | nums[n - 1] 的最大值。
 * a | b 表示两个整数 a 和 b 的 按位或 运算。
 */

/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumOr = function (nums, k) {
  let n = nums.length;
  let suf = new Array(n + 1).fill(0n);
  for (let i = n - 1; i >= 0; i--) {
    suf[i] = suf[i + 1] | BigInt(nums[i]);
  }

  let res = 0n,
    pre = 0n;
  for (let i = 0; i < n; i++) {
    res = Math.max(
      Number(res),
      Number(pre | (BigInt(nums[i]) << BigInt(k)) | suf[i + 1])
    );
    pre |= BigInt(nums[i]);
  }
  return Number(res);
};
