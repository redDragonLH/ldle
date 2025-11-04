/**
 * 3318. 计算子数组的 x-sum I
 *
 * 给你一个由 n 个整数组成的数组 nums，以及两个整数 k 和 x。
 * 数组的 x-sum 计算按照以下步骤进行：
 *  * 统计数组中所有元素的出现次数。
 *  * 仅保留出现次数最多的前 x 个元素的每次出现。如果两个元素的出现次数相同，则数值 较大 的元素被认为出现次数更多。
 *  * 计算结果数组的和。
 * 注意，如果数组中的不同元素少于 x 个，则其 x-sum 是数组的元素总和。
 * 返回一个长度为 n - k + 1 的整数数组 answer，其中 answer[i] 是 子数组 nums[i..i + k - 1] 的 x-sum。
 * 子数组 是数组内的一个连续 非空 的元素序列。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  let arr = [];
  for (let i = 0; i + k <= nums.length; i++) {
    const _map = [];
    const data = nums.slice(i, i + k).reduce((_map, cur) => {
      if (_map[cur]) {
        _map[cur]++;
      } else {
        _map[cur] = 1;
      }
      return _map;
    }, {});

    for (let item in data) {
      _map.push([item, data[item]]);
    }
    _map.sort((a, b) => b[0] - a[0]).sort((a, b) => b[1] - a[1]);
    const _data = _map
      .slice(0, x)
      .map((item) => Number(item[0]) * Number(item[1]));
    arr.push(_data.reduce((a, b) => a + b, 0));
  }
  return arr;
};
/**
 * 执行用时：26 ms, 在所有 JavaScript 提交中击败了25.53%的用户
 * 内存消耗：64.68 MB, 在所有 JavaScript 提交中击败了5.88%的用户
 */