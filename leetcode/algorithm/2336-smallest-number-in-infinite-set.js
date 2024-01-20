/**
 * 2336. 无限集中的最小数字
 *
 * 现有一个包含所有正整数的集合 [1, 2, 3, 4, 5, ...] 。
 * 实现 SmallestInfiniteSet 类：
 *  * SmallestInfiniteSet() 初始化 SmallestInfiniteSet 对象以包含 所有 正整数。
 *  * int popSmallest() 移除 并返回该无限集中的最小整数。
 *  * void addBack(int num) 如果正整数 num 不 存在于无限集中，则将一个 num 添加 到该无限集中。
 */

var SmallestInfiniteSet = function () {
  this.arr = [];
  for (let i = 1; i < 1001; i++) {
    this.arr.push(i);
  }
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  return this.arr.shift();
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.arr.includes(num)) return null;
  this.arr.splice(binarySearch(this.arr, num), 0, num);
  return num;
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // 找到中间位置
    const mid = Math.floor((left + right) / 2);

    // 检查中间元素是否是目标值
    if (arr[mid] === target) {
      return mid; // 找到目标值，返回索引
    } else if (arr[mid] < target) {
      // 如果目标值在右半部分，缩小搜索范围到右半部分
      left = mid + 1;
    } else {
      // 如果目标值在左半部分，缩小搜索范围到左半部分
      right = mid - 1;
    }
  }

  // 如果循环结束仍未找到目标值，那就返回最后停止的位置,那就是这个元素应该在的位置
  return right + 1;
}
/**
 * 执行用时：148 ms, 在所有 JavaScript 提交中击败了70.00%的用户
 * 内存消耗：48.21 MB, 在所有 JavaScript 提交中击败了81.43%的用户
 */
