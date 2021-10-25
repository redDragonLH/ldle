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

/**
 * 官方题解: Z字形查找
 * 可以从矩阵 matrix 的右上角(0,n-1)进行搜索.在每一步搜索过程中,如果我们位于位置(x,y),那么希望再以矩阵的左下角为左下角(n-1,0)、以(行,y)为右上角
 * 的矩阵中进行搜索,即行的范围为[x,m-1],列的范围为[0,y]:
 *      * 如果 matrix[x,y] = target,说明搜索完成
 *      * 如果 matrix[x,y] > target,由于每一列都是升序排列,那么在当前的搜索矩阵中,所有位于第y列的元素都是严格大于 target,因此
 *          可以将它们全部忽略,即将y减少1;
 *      * 如果 matrix[x,y] < target, 由于每一行的元素都是升序排列的,那么在当前的搜索矩阵中,所有位于第x行的元素都是严格小于taret的,
 * 因此可以将它们全部忽略,即将x增加1
 *
 * 如果搜索过程中超出了矩阵的边界,说明矩阵中不存在 target.
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length,
    n = matrix[0].length;
  let x = 0,
    y = n - 1;
  while (x < m && y >= 0) {
    if (matrix[x][y] === target) {
      return true;
    }
    if (matrix[x][y] > target) {
      --y;
    } else {
      ++x;
    }
  }
  return false;
};
