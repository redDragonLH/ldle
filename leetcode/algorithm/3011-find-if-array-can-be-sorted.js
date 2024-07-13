/**
 * 3011. 判断一个数组是否可以变为有序
 *
 * 给你一个下标从 0 开始且全是 正 整数的数组 nums 。
 * 一次 操作 中，如果两个 相邻 元素在二进制下数位为 1 的数目 相同 ，那么你可以将这两个元素交换。你可以执行这个操作 任意次 （也可以 0 次）。
 * 如果你可以使数组变有序，请你返回 true ，否则返回 false 。
 */
/**
 * 首先是转数据为二进制
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  let binaryArr = nums.map((num) => {
    let str = num.toString(2);
    let count = 0;
    for (let i = 0; i < str; i++) {
      if (str[i] === "1") {
        count++;
      }
    }
    return count;
  });
  // 那就是还得找出区间中最大最小的数
  for (let i = 1; i < binaryArr.length; i++) {
    if (binaryArr[i] !== binaryArr[i - 1] && nums[i]<nums[i-1]) {
      return false;
    }
    
  }
  return true;
};
