/**
 * 641. 设计循环双端队列
 *
 * 设计实现双端队列。
 *
 * 实现 MyCircularDeque 类:
 *  * MyCircularDeque(int k) ：构造函数,双端队列最大为 k 。
 *  * boolean insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false 。
 *  * boolean insertLast() ：将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false 。
 *  * boolean deleteFront() ：从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false 。
 *  * boolean deleteLast() ：从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false 。
 *  * int getFront() )：从双端队列头部获得一个元素。如果双端队列为空，返回 -1 。
 *  * int getRear() ：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 。
 *  * boolean isEmpty() ：若双端队列为空，则返回 true ，否则返回 false  。
 *  * boolean isFull() ：若双端队列满了，则返回 true ，否则返回 false 。
 */

/**
 * 核心是两端位置的定位以及交叉的判定,还有到达数组最后的时候的转回到开头
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.sequence = new Array(k);
    // start 往右
    this.start = 0;
    // end 往左
    this.end = 0;
};

/**
 * 边界条件好多~~
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if(this.start===0 &&this.end ===this.start){
        this.sequence[0] = value;
    }else {

    }
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
