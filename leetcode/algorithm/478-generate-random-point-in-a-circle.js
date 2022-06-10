/**
 * 478. 在圆内随机生成点
 *
 * 给定圆的半径和圆心的位置，实现函数 randPoint ，在圆中产生均匀随机点。
 *
 * 实现 Solution 类:
 */

/**
 * 怎样计算范围，以及在范围内随机，原生是不支持圆这个概念的，那么要怎样才能在一个弧形平面内随机
 *
 * 拒绝采样算法，倒是能实现，就是有点low
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
  this.xc = x_center;
  this.yc = y_center;
  this.r = radius;
};

Solution.prototype.randPoint = function () {
  while (true) {
    const x = Math.random() * (2 * this.r) - this.r;
    const y = Math.random() * (2 * this.r) - this.r;
    if (x * x + y * y <= this.r * this.r) {
      return [this.xc + x, this.yc + y];
    }
  }
};
