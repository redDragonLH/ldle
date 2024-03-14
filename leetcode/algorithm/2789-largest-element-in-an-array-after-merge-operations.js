/**
 * 2789. 合并后数组中的最大元素
 *
 * 给你一个下标从 0 开始、由正整数组成的数组 nums 。
 * 你可以在数组上执行下述操作 任意 次：
 *  * 选中一个同时满足 0 <= i < nums.length - 1 和 nums[i] <= nums[i + 1] 的整数 i 。将元素 nums[i + 1] 替换为 nums[i] + nums[i + 1] ，并从数组中删除元素 nums[i] 。
 * 返回你可以从最终数组中获得的 最大 元素的值。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
  let len = (remaining = nums.length);
  while (remaining !== 1) {
    let first = -1;
    let second = -1;
    //这样不仅要数字还要位置,很啰嗦
    for (let i = 0; i < len - 1; i++) {
      if (nums[i] > 0) {
        if (first === -1) {
          first = nums[i];
        } else {
          if (nums[i] < first) {
            first = -1;
          } else {
            second = nums[i];
          }
        }
      }
      if (first > -1 && second > -1) {
      }
    }
  }
};

/**
 * 官方题解
 * 比我想的要简单,我还以为最好要并无可并
 */
var maxArrayValue = function (nums) {
  let sum = nums[nums.length - 1];
  // 只进行了一次遍历
  for (let i = nums.length - 2; i >= 0; i--) {
    sum = nums[i] <= sum ? nums[i] + sum : nums[i];
  }
  return sum;
};
