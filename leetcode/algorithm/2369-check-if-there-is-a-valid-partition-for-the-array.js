/**
 * 2369. 检查数组是否存在有效划分
 *
 * 给你一个下标从 0 开始的整数数组 nums ，你必须将数组划分为一个或多个 连续 子数组。
 * 如果获得的这些子数组中每个都能满足下述条件 之一 ，则可以称其为数组的一种 有效 划分：
 *  * 子数组 恰 由 2 个相等元素组成，例如，子数组 [2,2] 。
 *  * 子数组 恰 由 3 个相等元素组成，例如，子数组 [4,4,4] 。
 *  * 子数组 恰 由 3 个连续递增元素组成，并且相邻元素之间的差值为 1 。例如，子数组 [3,4,5] ，但是子数组 [1,3,5] 不符合要求。
 *  * 如果数组 至少 存在一种有效划分，返回 true ，否则，返回 false 。
 */

/**
 *  子数组:需要在原数组里面连续 (和字串一样)
 *  子序列不要求连续
 *
 * 回溯算法吗
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function (nums) {
    let len = nums.length;
let subNum = [nums[0]]
    for (let i = 1; i < len; i++) {
      subNum.push(nums[i])
      if(subNum.length ===2 || subNum.length ===3){
        isVaild(subNum)
      }else {
        
      }
    }
};
const isVaild = (subNum) => {
  let len = subNum.length;
  if (len === 2) {
    return subNum[0] === subNum[1];
  } else if (len === 3) {
    if (subNum[0] === subNum[1] && subNum[1] === subNum[2]) {
      return subNum[0] === subNum[1] && subNum[1] === subNum[2];
    } else {
      return subNum[0] + 1 === subNum[1] && subNum[1] + 1 === subNum[2];
    }
  }
  return false;
};
