/**
 * 895. 最大频率栈
 *
 * 设计一个类似堆栈的数据结构，将元素推入堆栈，并从堆栈中弹出出现频率最高的元素。
 *
 * 实现 FreqStack 类:
 *  * FreqStack() 构造一个空的堆栈。
 *  * void push(int val) 将一个整数 val 压入栈顶。
 *  * int pop() 删除并返回堆栈中出现频率最高的元素。
 *  * 如果出现频率最高的元素不只一个，则移除并返回最接近栈顶的元素。
 */

var FreqStack = function () {
  this.freq = new Map();
  this.group = new Map();
  this.maxFreq = 0;
};

FreqStack.prototype.push = function (val) {
  this.freq.set(val, (this.freq.get(val) || 0) + 1);
  if (!this.group.has(this.freq.get(val))) {
    this.group.set(this.freq.get(val), []);
  }
  this.group.get(this.freq.get(val)).push(val);
  this.maxFreq = Math.max(this.maxFreq, this.freq.get(val));
};

FreqStack.prototype.pop = function () {
  const val = this.group.get(this.maxFreq)[
    this.group.get(this.maxFreq).length - 1
  ];
  this.freq.set(val, this.freq.get(val) - 1);
  this.group.get(this.maxFreq).pop();

  if (this.group.get(this.maxFreq).length === 0) {
    this.maxFreq--;
  }
  return val;
};
