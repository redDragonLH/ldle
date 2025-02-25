/**
 * 2502. 设计内存分配器
 *
 * 给你一个整数 n ，表示下标从 0 开始的内存数组的大小。所有内存单元开始都是空闲的。
 * 请你设计一个具备以下功能的内存分配器：
 * 1. 分配 一块大小为 size 的连续空闲内存单元并赋 id mID 。
 * 2. 释放 给定 id mID 对应的所有内存单元。
 * 注意：
 *  * 多个块可以被分配到同一个 mID 。
 *  * 你必须释放 mID 对应的所有内存单元，即便这些内存单元被分配在不同的块中。
 * 现 Allocator 类：
 *  * Allocator(int n) 使用一个大小为 n 的内存数组初始化 Allocator 对象。
 *  * int allocate(int size, int mID) 找出大小为 size 个连续空闲内存单元且位于  最左侧 的块，分配并赋 id mID 。返回块的第一个下标。如果不存在这样的块，返回 -1 。
 *  * int freeMemory(int mID) 释放 id mID 对应的所有内存单元。返回释放的内存单元数目。
 */
/**
 * @param {number} n
 */
var Allocator = function (n) {
  this.n = n;
  this.memory = new Array(n).fill(0);
};

/**
 * @param {number} size
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function (size, mID) {
  let count = 0;
  for (let i = 0; i < this.n; ++i) {
    if (this.memory[i] !== 0) {
      count = 0;
    } else {
      ++count;
      if (count === size) {
        for (let j = i - count + 1; j <= i; ++j) {
          this.memory[j] = mID;
        }
        return i - count + 1;
      }
    }
  }
  return -1;
};

/**
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.freeMemory = function (mID) {
  let count = 0;
  for (let i = 0; i < this.n; ++i) {
    if (this.memory[i] === mID) {
      ++count;
      this.memory[i] = 0;
    }
  }
  return count;
};

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.freeMemory(mID)
 */
