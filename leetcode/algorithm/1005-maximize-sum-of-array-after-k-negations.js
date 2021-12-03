/**
 * 1005. K 次取反后最大化的数组和
 *
 * 给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
 *  * 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
 *
 * 重复这个过程恰好 k 次。可以多次选择同一个下标 i 。
 *
 * 以这种方式修改数组后，返回数组 可能的最大和 。
 */

/**
 * 感觉像是找寻最小值
 *
 * 这种分支太多了,非常容易陷进分支陷阱,一直加特殊处理分支
 *
 * 超时~
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let index = 0;
  while (k) {
    if (nums[index] < 0) {
      nums[index] = -nums[index];
      index++;
      k--;
    } else if (nums[index] >= 0 && !(k % 2)) {
      return nums.reduce((p, c) => p + c, 0);
    } else if (nums[index] >= 0 && k % 2) {
      // 到这个阶段的时候由于必须要翻转一个,那么就得找到最小的数据,而由于前边得到元素已经翻转
      // 所以当前数据表示为图形是一个两侧高中间低的低谷,而最小值就是当前的元素和前一个已翻转元素的最小的一个
      if (index === 0 || nums[index - 1] > nums[index]) {
        nums[index] = -nums[index];
      } else {
        nums[index - 1] = -nums[index - 1];
      }
      return nums.reduce((p, c) => p + c, 0);
    }
  }

  return nums.reduce((p, c) => p + c, 0); //补全逻辑
};
