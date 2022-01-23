/**
 * 2034. 股票价格波动
 * 
 * 给你一支股票价格的数据流。数据流中每一条记录包含一个 时间戳 和该时间点股票对应的 价格 。
 * 
 * 不巧的是，由于股票市场内在的波动性，股票价格记录可能不是按时间顺序到来的。某些情况下，有的记录可能是错的。如果两个有相同时间戳的记录出现在数据流中，前一条记录视为错误记录，后出现的记录 更正 前一条错误的记录。
 * 
 * 请你设计一个算法，实现：
 *  * 更新 股票在某一时间戳的股票价格，如果有之前同一时间戳的价格，这一操作将 更正 之前的错误价格。
 *  * 找到当前记录里 最新股票价格 。最新股票价格 定义为时间戳最晚的股票价格。
 *  * 找到当前记录里股票的 最高价格 。
 *  * 找到当前记录里股票的 最低价格 。
 * 
 * 请你实现 StockPrice 类：
 *  * StockPrice() 初始化对象，当前无股票价格记录。
 *  * void update(int timestamp, int price) 在时间点 timestamp 更新股票价格为 price 。
 *  * int current() 返回股票 最新价格 。
 *  * int maximum() 返回股票 最高价格 。
 *  * int minimum() 返回股票 最低价格 。
 */


var StockPrice = function () {
    this.prices = new Map()
    this.highestPrice = 0;
    this.lowestPrice = Number.MAX_SAFE_INTEGER;
    this.newestPrice = [0, 0]
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function (timestamp, price) {
    if (this.newestPrice[0] <= timestamp) {
        this.newestPrice = [timestamp, price];
    }

    this.prices.set(timestamp, price)
    // 两个情况：已经有了key，还没有key
    if (this.prices.has(timestamp)) {
        this.highestPrice = 0;
        this.lowestPrice = Number.MAX_SAFE_INTEGER;
        for (let val of this.prices.values()) {
            if (this.highestPrice < val) this.highestPrice = val;
            if (this.lowestPrice > val) this.lowestPrice = val;
        }
    } else {
        // 没有key.更新
        if (this.highestPrice < price) this.highestPrice = price;
        if (this.lowestPrice > price) this.lowestPrice = price;
    }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function () {
    return this.newestPrice[1]
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function () {
    return this.highestPrice
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function () {
    return this.lowestPrice
};


/**
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */

/**
 * 在更新之后无法得知其他数的大小，必须重新全部更新，除非有大小顶堆，好麻烦
 * 
 * 执行用时：7076 ms, 在所有 JavaScript 提交中击败了11.54%的用户
 * 内存消耗：78 MB, 在所有 JavaScript 提交中击败了73.08%的用户
 */