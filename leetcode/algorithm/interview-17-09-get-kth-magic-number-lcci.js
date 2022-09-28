/**
 * 面试题 17.09. 第 k 个数
 *
 * 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。
 */
/**
 * 核心就是设计只有3,5,7素因子的数的方法,但是我不会
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  const factors = [3, 5, 7];
  const seen = new Set();
  const heap = new MinHeap();
  seen.add(1);
  heap.insert(1);
  let ugly = 0;
  for (let i = 0; i < k; i++) {
    ugly = heap.pop();
    for (const factor of factors) {
      const next = ugly * factor;
      if (!seen.has(next)) {
        seen.add(next);
        heap.insert(next);
      }
    }
  }
  return ugly;
};

// 最小堆
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return (i - 1) >> 1;
  }

  getLeftIndex(i) {
    return i * 2 + 1;
  }

  getRightIndex(i) {
    return i * 2 + 2;
  }

  shiftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return this.heap[0];
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}
