/**
 * 229. 求众数 II
 *
 * 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 */
/**
 * 思路是先计算每个元素有多少个,然后循环检查是否超出三分之一
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let result = [];
  let len = nums.length;
  let Standard = len / 3;
  nums.forEach((e) => {
    map.set(e, (map.get(e) || 0) + 1);
  });
  console.log(map);
  for (let [key, value] of map) {
    if (value > Standard) {
      result.push(key);
    }
  }
  return result;
};
/**
 * 遍历多次,效率不高
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了22.10%的用户
 * 内存消耗：40.3 MB, 在所有 JavaScript 提交中击败了81.77%的用户
 */