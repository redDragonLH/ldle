/**
 * 365. 水壶问题
 *
 * 有两个水壶，容量分别为 jug1Capacity 和 jug2Capacity 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 targetCapacity 升。
 * 如果可以得到 targetCapacity 升水，最后请用以上水壶中的一或两个来盛放取得的 targetCapacity 升水。
 * 你可以：
 *  * 装满任意一个水壶
 *  * 清空任意一个水壶
 *  * 从一个水壶向另外一个水壶倒水，直到装满或者倒空
 */
/**
 * 判断能不能得到指定水量，那得先知道怎么能得到指定水量，或者这是有有规律的算法的么
 * 感觉是数学问题
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  if (x + y < z) {
    return false;
  }
  if (x == 0 || y == 0) {
    return z == 0 || x + y == z;
  }
  return z % gcd(x, y) == 0;
};

let gcd = (x, y) => {
  let remainder = x % y;
  while (remainder != 0) {
    x = y;
    y = remainder;
    remainder = x % y;
  }
  return y;
};
/**
 * 果然数学可以解决
 * 
 * 需要知道贝祖定理
 */