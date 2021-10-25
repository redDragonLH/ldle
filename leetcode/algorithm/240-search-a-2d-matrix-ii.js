/**
 * 240. 搜索二维矩阵 II
 *
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 *  * 每行的元素从左到右升序排列。
 *  * 每列的元素从上到下升序排列。
 */

/**
 * 预期就是双向二分
 *
 * 好像不太行~~,
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let mLen = matrix.length;
  let nLen = matrix[0].length;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
};

/**
 * 按行二分
 * @param {*} matrix
 * @param {*} target
 * @returns
 */
var searchMatrix = function (matrix, target) {
  for (const row of matrix) {
    const index = search(row, target);
    if (index >= 0) {
      return true;
    }
  }
  return false;
};

const search = (nums, target) => {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;
    const num = nums[mid];
    if (num === target) {
      return mid;
    } else if (num > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};
