/**
 * 565. 数组嵌套
 *
 * 索引从0开始长度为N的数组A，包含0到N - 1的所有整数。找到最大的集合S并返回其大小，其中 S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。
 *
 * 假设选择索引为i的元素A[i]为S的第一个元素，S的下一个元素应该是A[A[i]]，之后是A[A[A[i]]]... 以此类推，不断添加直到S出现重复的元素。
 */

/**
 * 最直观的方式就是遍历，以每个i为开头循环查找直到重复
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let max = 0;
  nums.forEach((e, i) => {
    let nest = [];
    let val = e;
    while (!nest.includes(val)) {
      nest.push(val);
      val = nums[val];
    }
    max = Math.max(max, nest.length);
  });
  return max;
};
/**
 * 但是有个问题就是超时~~
 */
