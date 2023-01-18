/**
 * 1825. 求出 MK 平均值
 *
 * 给你两个整数 m 和 k ，以及数据流形式的若干整数。你需要实现一个数据结构，计算这个数据流的 MK 平均值 。
 *
 * MK 平均值 按照如下步骤计算：
 *
 * 如果数据流中的整数少于 m 个，MK 平均值 为 -1 ，否则将数据流中最后 m 个元素拷贝到一个独立的容器中。
 * 从这个容器中删除最小的 k 个数和最大的 k 个数。
 * 计算剩余元素的平均值，并 向下取整到最近的整数 。
 * 请你实现 MKAverage 类：
 *  * MKAverage(int m, int k) 用一个空的数据流和两个整数 m 和 k 初始化 MKAverage 对象。
 *  * void addElement(int num) 往数据流中插入一个新的元素 num 。
 *  * int calculateMKAverage() 对当前的数据流计算并返回 MK 平均数 ，结果需 向下取整到最近的整数 。
 */

/**
 * 核心应该是最大k个数和最小k个数的计算
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function (m, k) {
    this.m = m;
    this.k = k;
    this.num = []
};

/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
    // 不知道排序性能行不行,不行就得复习最大堆最小堆了,还是java方便
    // 应该不行~~
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {};

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
