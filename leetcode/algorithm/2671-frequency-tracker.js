/**
 * 2671. 频率跟踪器
 *
 * 请你设计并实现一个能够对其中的值进行跟踪的数据结构，并支持对频率相关查询进行应答。
 * 实现 FrequencyTracker 类：
 *  * FrequencyTracker()：使用一个空数组初始化 FrequencyTracker 对象。
 *  * void add(int number)：添加一个 number 到数据结构中。
 *  * void deleteOne(int number)：从数据结构中删除一个 number 。数据结构 可能不包含 number ，在这种情况下不删除任何内容。
 *  * bool hasFrequency(int frequency): 如果数据结构中存在出现 frequency 次的数字，则返回 true，否则返回 false。
 */

/**
 * 那就整个最简单的
 */
var FrequencyTracker = function () {
  this.number = new Map();
  this.frequency = new Map();
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function (number) {
  if (this.number.has(number)) {
    let frequency =this.number.get(number).length
    let location = this.frequency.get(frequency).findIndex(number)
    this.frequency.set(frequency,this.frequency.get(frequency).splice(location,1))
    this.number.set(number, frequency + 1);
  } else {
    this.number.set(number, 1);
  }
  this.frequency.set(frequency+1,[...this.frequency.get(this.frequency+1),number])
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function (number) {
  if (this.number.has(number) && this.number.get(number) > 0) {
    let location = this.frequency.get(this.number.get(number).length).findIndex(number)

    this.frequency.set(this.number.get(number).length,this.frequency.get(this.number.get(number).length).splice(location,1))

    this.number.set(number, this.number.get(number) - 1);

  this.frequency.set(this.number.get(number).length,[...this.frequency.get(this.number.get(number).length),number])

  }

};

/**
 * 这里是耗能核心
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function (frequency) {
  return this.frequency.has(frequency);
};

/**
 * 逻辑太绕.失败
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
