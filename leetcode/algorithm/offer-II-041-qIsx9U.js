/**
 * 剑指 Offer II 041. 滑动窗口的平均值
 *
 * 给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。
 * 实现 MovingAverage 类：
 *  * MovingAverage(int size) 用窗口大小 size 初始化对象。
 *  * double next(int val) 成员函数 next 每次调用的时候都会往滑动窗口增加一个整数，请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。
 */

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.averageArray = new Array(size);
  this.maxSize = size;
  this.index = -1;
  this.average = 0;
  this.count = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.count++;
  this.index++;

  if (this.count <= this.maxSize) {
    this.averageArray[this.index] = val;
    this.average = (this.average * (this.count - 1) + val) / this.count;
    return this.average;
  } else {
    this.index = this.index % this.maxSize;
    let less = this.averageArray[this.index];
    this.averageArray[this.index] = val;
    this.average = (this.average * this.maxSize - less + val) / this.maxSize;

    return this.average;
  }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了99.16%的用户
 * 内存消耗：47.5 MB, 在所有 JavaScript 提交中击败了32.78%的用户
 */

/**
 * 应该可以优化，把数组去掉，因为这个数组的意义就是保存下一个要删除的元素,有一个变量替代就好了
 * Initialize your data structure here.
 * @param {number} size
 */
 var MovingAverage = function(size) {

};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {

};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */