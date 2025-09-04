/**
 * 3516. 找到最近的人
 *
 * 给你三个整数 x、y 和 z，表示数轴上三个人的位置：
 *  * x 是第 1 个人的位置。
 *  * y 是第 2 个人的位置。
 *  * z 是第 3 个人的位置，第 3 个人 不会移动 。
 * 第 1 个人和第 2 个人以 相同 的速度向第 3 个人移动。
 * 判断谁会 先 到达第 3 个人的位置：
 *  * 如果第 1 个人先到达，返回 1 。
 *  * 如果第 2 个人先到达，返回 2 。
 *  * 如果两个人同时到达，返回 0 。
 *  * 根据上述规则返回结果。
 */
/**
 * 查距离绝对值
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  let distX = Math.abs(x - z);
  let distY = Math.abs(y - z);
  if (distX < distY) {
    return 1;
  } else if (distX > distY) {
    return 2;
  } else {
    return 0;
  }
};
/**
 * 执行用时：1 ms, 在所有 JavaScript 提交中击败了66.07%的用户
 * 内存消耗：55.65 MB, 在所有 JavaScript 提交中击败了39.29%的用户
 */