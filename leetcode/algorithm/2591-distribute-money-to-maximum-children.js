/**
 * 2591. 将钱分给最多的儿童
 *
 * 给你一个整数 money ，表示你总共有的钱数（单位为美元）和另一个整数 children ，表示你要将钱分配给多少个儿童。
 * 你需要按照如下规则分配：
 *  * 所有的钱都必须被分配。
 *  * 每个儿童至少获得 1 美元。
 *  * 没有人获得 4 美元。
 * 请你按照上述规则分配金钱，并返回 最多 有多少个儿童获得 恰好 8 美元。如果没有任何分配方案，返回 -1 。
 */

/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
    // 一人一个都分配不到就没办法了
  if (money < children) {
    return -1;
  }
  // 一人一个之后剩余的
  money -= children;
  // 是分成8份的钱最少还是 人最少
  let cnt = Math.min(Math.floor(money / 7), children);
  // 减去这些钱
  money -= cnt * 7;
  // 减去获得8元的人数
  children -= cnt;
  if ((children == 0 && money > 0) || (children == 1 && money == 3)) {
    cnt -= 1;
  }
  return cnt;
};
