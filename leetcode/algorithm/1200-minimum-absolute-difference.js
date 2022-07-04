/**
 * 1200. 最小绝对差
 *
 * 给你个整数数组 arr，其中每个元素都 不相同。
 * 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。
 */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  let result = [];
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let difference = arr[i] - arr[i - 1];
    if (min > difference) {
      min = difference;
      result = [[arr[i - 1], arr[i]]];
    } else if (min === difference) {
      result.push([arr[i - 1], arr[i]]);
    }
  }
  return result;
};
/**
 * 执行用时：156 ms, 在所有 JavaScript 提交中击败了28.46%的用户
 * 内存消耗：52.4 MB, 在所有 JavaScript 提交中击败了59.35%的用户
 */