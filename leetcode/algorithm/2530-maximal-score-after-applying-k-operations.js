/**
 * 2530. 执行 K 次操作后的最大分数
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。你的 起始分数 为 0 。
 *
 * 在一步 操作 中：
 *  * 选出一个满足 0 <= i < nums.length 的下标 i ，
 *  * 将你的 分数 增加 nums[i] ，并且
 *  * 将 nums[i] 替换为 ceil(nums[i] / 3) 。
 *
 * 返回在 恰好 执行 k 次操作后，你可能获得的最大分数。
 * 向上取整函数 ceil(val) 的结果是大于或等于 val 的最小整数。
 */
/**
 * 排序找最大值呗,但是随着步骤进行,顺序又被打乱了
 *
 * 大顶堆是最好的了
 * 这种排序方式还是太耗费时间了 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  let result = 0;
  while (k--) {
    nums.sort((a, b) => b - a);

    result += nums[0];
    nums[0] = Math.ceil(nums[0] / 3);
  }
  return result;
};
/**
 * 超时
 */