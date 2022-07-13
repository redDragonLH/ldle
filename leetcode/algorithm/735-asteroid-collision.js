/**
 * 735. 行星碰撞
 *
 * 给定一个整数数组 asteroids，表示在同一行的行星。
 *
 * 对于数组中的每一个元素，其绝对值表示行星的大小，正负表示行星的移动方向（正表示向右移动，负表示向左移动）。每一颗行星以相同的速度移动。
 *
 * 找出碰撞后剩下的所有行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。
 */

/**
 * 按顺序计算可以么,贪心会造成略过某些条件吧,而且循环条件也有些复杂
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {};

/**
 * 栈模拟
 *
 * 使用 栈 模拟行星碰撞,从左往右遍历行星数组asteroids,当遍历到行星 aster 时,使用变量 alive 记录行星 aster 是否还存在(即未爆炸)
 *
 * 当行星 aster 存在且 aster < 0,栈顶元素非空且大于0时,说明两个行星相互向对方移动:如果栈顶元素大于等于 -aster,则行星 aster 发生爆炸,将alive置为 false;
 * 如果栈顶元素小雨等于-aster,则栈顶元素表示的行星发生爆炸,执行出栈操作.重复以上判断直到不满足条件,如果最后 alive为真,说明行星 aster 不会爆炸,则将aster 入栈
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (const aster of asteroids) {
    let alive = true;
    while (
      alive &&
      aster < 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0
    ) {
      alive = stack[stack.length - 1] < -aster; // aster 是否存在
      if (stack[stack.length - 1] <= -aster) {
        // 栈顶行星爆炸
        stack.pop();
      }
    }
    if (alive) {
      stack.push(aster);
    }
  }
  const size = stack.length;
  const ans = new Array(size).fill(0);
  for (let i = size - 1; i >= 0; i--) {
    ans[i] = stack.pop();
  }
  return ans;
};
