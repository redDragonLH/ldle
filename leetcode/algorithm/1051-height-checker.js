/**
 * 1051. 高度检查器
 *
 * 学校打算为全体学生拍一张年度纪念照。根据要求，学生需要按照 非递减 的高度顺序排成一行。
 *
 * 排序后的高度情况用整数数组 expected 表示，其中 expected[i] 是预计排在这一行中第 i 位的学生的高度（下标从 0 开始）。
 *
 * 给你一个整数数组 heights ，表示 当前学生站位 的高度情况。heights[i] 是这一行中第 i 位学生的高度（下标从 0 开始）。
 *
 * 返回满足 heights[i] != expected[i] 的 下标数量 。
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let expected = [...heights];
  expected.sort((a, b) => a - b);
  let result = 0;
  heights.forEach((e, i) => {
    if (e !== expected[i]) result++;
  });
  return result;
};

/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了48.69%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了72.77%的用户
 */