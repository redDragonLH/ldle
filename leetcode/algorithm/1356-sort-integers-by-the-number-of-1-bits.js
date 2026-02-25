/**
 * 1356. 根据数字二进制下 1 的数目排序
 *
 * 给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。
 * 如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。
 * 请你返回排序后的数组。
 */
/**
 * 主要逻辑是获取1的个数
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let count = arr[i].toString(2).split("0").join("").length;
    map.set(arr[i], count);
  }
  return arr.sort((a, b) => {
    // 每次都计算很慢
    let countA = map.get(a);
    let countB = map.get(b);
    if (countA === countB) {
      return a - b;
    } else {
      return countA - countB;
    }
  });
};
/**
 * 简单优化,将每个数的1的个数计算一次，存储在map中，排序时直接获取
 * 执行用时 : 21 ms, 在所有 JavaScript 提交中击败了 31.58% 的用户
 * 内存消耗 : 58.64 MB, 在所有 JavaScript 提交中击败了 42.10% 的用户
 */
