/**
 * 1352. 最后 K 个数的乘积
 * 
 * 设计一个算法，该算法接受一个整数流并检索该流中最后 k 个整数的乘积。
 * 实现 ProductOfNumbers 类：
 *  * ProductOfNumbers() 用一个空的流初始化对象。
 *  * void add(int num) 将数字 num 添加到当前数字列表的最后面。
 *  * int getProduct(int k) 返回当前数字列表中，最后 k 个数字的乘积。你可以假设当前列表中始终 至少 包含 k 个数字。
 * 题目数据保证：任何时候，任一连续数字序列的乘积都在 32 位整数范围内，不会溢出。
 */

var ProductOfNumbers = function() {
    this.prefixProduct = [1];
};

ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) {
        this.prefixProduct = [1];
    } else {
        const last = this.prefixProduct[this.prefixProduct.length - 1];
        this.prefixProduct.push(num * last);
    }
};

ProductOfNumbers.prototype.getProduct = function(k) {
    const n = this.prefixProduct.length;
    if (n <= k) {
        return 0;
    }
    return this.prefixProduct[n - 1] / this.prefixProduct[n - 1 - k];
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */