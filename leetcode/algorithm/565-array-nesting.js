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
 * 这应该没啥优化的空间了
 */

/**
 * 以图论作为解题原理
 * 遍历数组，从i向nums[i]连边，可以得到一张有向图
 * 由于题目保证 nums 中不含有重复的元素，因此有向图中每个点的出度和入度均为1.在这种情况下，有向图必然由一个或多个环组成。
 *
 * 核心理论就是： 一个元素只会是一个环的其中一点，不会是多个最大环的公共部分，那么这种情况下，一个元素被遍历一遍就可以知道他是属于哪个图
 */
var arrayNesting = function (nums) {
  let ans = 0,
    n = nums.length;
  const vis = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    let cnt = 0;
    while (!vis[i]) {
      vis[i] = true;
      i = nums[i];
      ++cnt;
    }
    ans = Math.max(ans, cnt);
  }
  return ans;
};
