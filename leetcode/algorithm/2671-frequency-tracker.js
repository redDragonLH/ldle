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

/**
 * 官方题解
 */
var FrequencyTracker = function() {
    this.freq = new Map();
    this.freq_cnt = new Map();
};

FrequencyTracker.prototype.add = function(number) {
    if (!this.freq.has(number)) {
        this.freq.set(number, 0);
        // 只留存数量不留存元素,还是要简便太多
        // 数字留存的话删除增加都是麻烦事
        this.freq_cnt.set(0, (this.freq_cnt.get(0) || 0) + 1);
    }
    const prev = this.freq.get(number);
    this.freq_cnt.set(prev, (this.freq_cnt.get(prev) || 0) - 1);
    this.freq.set(number, prev + 1);
    this.freq_cnt.set(prev + 1, (this.freq_cnt.get(prev + 1) || 0) + 1);
};

FrequencyTracker.prototype.deleteOne = function(number) {
    if (!this.freq.has(number) || this.freq.get(number) === 0) {
        return;
    }
    let prev = this.freq.get(number);
    this.freq_cnt.set(prev, (this.freq_cnt.get(prev) || 0) - 1);
    this.freq.set(number, prev - 1);
    this.freq_cnt.set(prev - 1, (this.freq_cnt.get(prev - 1) || 0) + 1);
};

FrequencyTracker.prototype.hasFrequency = function(frequency) {
    return this.freq_cnt.get(frequency) > 0;
};