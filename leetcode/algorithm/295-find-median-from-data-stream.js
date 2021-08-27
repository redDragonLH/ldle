/**
 * 295. 数据流的中位数
 *
 * 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
 *
 * 例如，
 *  * [2,3,4] 的中位数是 3
 *  * [2,3] 的中位数是 (2 + 3) / 2 = 2.5
 *
 * 设计一个支持以下两种操作的数据结构：
 *  * void addNum(int num) - 从数据流中添加一个整数到数据结构中。
 *  * double findMedian() - 返回目前所有元素的中位数。
 */

/**
 * initialize your data structure here.
 */
var MedianFinder = function (nums = []) {
  this.nums = nums;
};

/**
 *
 * 直接处理,循环找到元素位置,用 splice()  插入,然后计算中位数
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (!this.nums.length) this.nums.push(num);

  let insetPos = 0;
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] < num) {
      insetPos++;
    }
  }
  this.nums.splice(insetPos, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.nums.length % 2) {
    return this.nums[parseInt(this.nums.length / 2)];
  } else {
    let r = this.nums / 2;
    return (this.nums[r - 1] + this.nums[r]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
/**
 * 有点惨~~
 * 执行用时：4984 ms, 在所有 JavaScript 提交中击败了11.80%的用户
 * 内存消耗：70.4 MB, 在所有 JavaScript 提交中击败了25.84%的用户
 */