/**
 * 2615. 等值距离和
 *
 * 给你一个下标从 0 开始的整数数组 nums 。现有一个长度等于 nums.length 的数组 arr 。对于满足 nums[j] == nums[i] 且 j != i 的所有 j ，arr[i] 等于所有 |i - j| 之和。如果不存在这样的 j ，则令 arr[i] 等于 0 。
 * 返回数组 arr 。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
  let arr = new Array(nums.length).fill(0);
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let list = map.get(nums[i]);
      for (let j of list) {
        arr[i] += Math.abs(i - j);
        arr[j] += Math.abs(i - j);
      }
      list.push(i);
    } else {
      map.set(nums[i], [i]);
    }
  }

  return arr;
};
/**
 * 失败;超时
 */