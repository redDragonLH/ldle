/**
 * 1673. 找出最具竞争力的子序列
 *
 * 给你一个整数数组 nums 和一个正整数 k ，返回长度为 k 且最具 竞争力 的 nums 子序列。
 *
 * 数组的子序列是从数组中删除一些元素（可能不删除元素）得到的序列。
 *
 * 在子序列 a 和子序列 b 第一个不相同的位置上，如果 a 中的数字小于 b 中对应的数字，那么我们称子序列 a 比子序列 b（相同长度下）更具 竞争力 。 例如，[1,3,4] 比 [1,3,5] 更具竞争力，在第一个不相同的位置，也就是最后一个位置上， 4 小于 5 。
 */

/**
 * 核心是如何构建子序列,
 *
 * 不过有个问题挺有意思,隐约感觉这个题目不用遍历,感觉贪心就可以解决
 *  1. 如果是一位一位对比的话,那么第一位肯定是从0,到 len-k之中最小的一个,
 *  2. 以此类推,那就是个滑动窗口问题?
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
  //
  let len = nums.length;
  let result = [];
  let i = 0;
  while (k > 0) {
    let min = Math.min(...nums.slice(i, len - k + 1));

    i = nums.indexOf(min, i) + 1;
    result.push(min);
    k--;
  }
  return result;
};
/**
 *  这种方案看起来可以,但是超时了
 *  还是超时,截取的方法果然是更慢的
 */

/**
 * 官方题解 +单调栈
 * @param {*} nums
 * @param {*} k
 * @returns
 */
var mostCompetitive = function (nums, k) {
  const res = [];
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    // 最优上就遍历一遍
    // 这确实NB,先怼进去,不对就弄出来,思路很直白,但是什么情况下不合理的判断却是很不直观
    while (
      res.length > 0 &&
      n - i + res.length > k &&
      res[res.length - 1] > nums[i]
    ) {
      res.pop();
    }
    res.push(nums[i]);
  }
  res.length = k;
  return res;
};
/**
 *  这道题适合单调栈这个数据结构是因为要求的是一个子序列,是有顺序的,虽然中间可以去掉,
 * 而判断是最难的一个部分,必须要考虑长度,k的长度和当前遍历中子序列的长度
 */