/**
 * 2080. 区间内查询数字的频率
 *
 * 请你设计一个数据结构，它能求出给定子数组内一个给定值的 频率 。
 * 子数组中一个值的 频率 指的是这个子数组中这个值的出现次数。
 * 请你实现 RangeFreqQuery 类：
 *  * RangeFreqQuery(int[] arr) 用下标从 0 开始的整数数组 arr 构造一个类的实例。
 *  * int query(int left, int right, int value) 返回子数组 arr[left...right] 中 value 的 频率 。
 * 一个 子数组 指的是数组中一段连续的元素。arr[left...right] 指的是 nums 中包含下标 left 和 right 在内 的中间一段连续元素。
 */

/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
    this.arr = arr;
    this.map = new Map();
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
    let count = 0;
    if (this.map.has(`${left}-${right}-${value}`)) {
        return this.map.get(`${left}-${right}-${value}`);
    }
    for (let i = left; i <= right; i++) {
        if (this.arr[i] === value) {
            count++;
        }
    }
    this.map.set(`${left}-${right}-${value}`, count);
    return count;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
/**
 * 缓存查询结果
 * 执行用时：1447 ms, 在所有 JavaScript 提交中击败了5.13%的用户
 * 内存消耗：100.81 MB, 在所有 JavaScript 提交中击败了5.13%的用户
 */