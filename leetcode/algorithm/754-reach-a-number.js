/**
 * 754. 到达终点数字
 *
 * 在一根无限长的数轴上，你站在0的位置。终点在target的位置。
 *
 * 你可以做一些数量的移动 numMoves :
 *  * 每次你可以选择向左或向右移动。
 *  * 第 i 次移动（从  i == 1 开始，到 i == numMoves ），在选择的方向上走 i 步。
 *
 * 给定整数 target ，返回 到达目标所需的 最小 移动次数(即最小 numMoves ) 。
 */

/**
 * 简单来说就是步进,当前位置只有两个选择,向前 i 个位置,向后i个位置,
 * 如果target 是从零到i的累加,那么移动次数就是i,如果不是就要新增向后的一步
 *
 * 注意,这是内部是贪心的,尽量的靠近target
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  let index = 0;
  let step = 0;
  for (let i = 1; index <= target; i++) {
    console.log(i,index,step,target);
    if (index + i === target) {
      index = index + i;
      return ++step;
    } else if (index + i < target) {
      step++;
      index = index + i;
    }else {
        break
    }
  }
  return step + (target - index) * 2;
};
console.log(reachNumber(4));
/**
 * 失败,那这样贪心无法解决这个问题,这得动态规划
 */