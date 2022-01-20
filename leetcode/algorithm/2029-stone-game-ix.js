/**
 * 2029. 石子游戏 IX
 *
 * Alice 和 Bob 再次设计了一款新的石子游戏。现有一行 n 个石子，每个石子都有一个关联的数字表示它的价值。给你一个整数数组 stones ，其中 stones[i] 是第 i 个石子的价值。
 *
 * Alice 和 Bob 轮流进行自己的回合，Alice 先手。每一回合，玩家需要从 stones 中移除任一石子。
 *  * 如果玩家移除石子后，导致 所有已移除石子 的价值 总和 可以被 3 整除，那么该玩家就 输掉游戏 。
 *  * 如果不满足上一条，且移除后没有任何剩余的石子，那么 Bob 将会直接获胜（即便是在 Alice 的回合）。
 *
 * 假设两位玩家均采用 最佳 决策。如果 Alice 获胜，返回 true ；如果 Bob 获胜，返回 false 。
 */
/**
 * 也就是查找一种顺序使之部分元素之和不能被3整除,但是顺序不一样,最后结果是一样的吧,当然,可能结果不符合条件,但是中间结果符合
 *
 * 比较直观的方案就是交替获取元素,使用两个贪心逻辑
 * 
 * 不对,应该是同一个贪心逻辑,都在查找能被3整除的数,现在问题是怎么算最佳决策
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  let user = 0;
  let len = stones.length;
  let count = 0;
  while (len--) {
    if (user) {
      for (const item of stones) {
        if (item > 0 && !(count + item) % 3) return false;
      }
      for (let i = 0; i < stones.length; i++) {
        if (stones[i] > 0) {
          count += stones[i];
          stones[i] = 0;
          break;
        }
      }
    } else {
      let oldCount = count;
      for (let i = 0; i < stones.length; i++) {
        if (stones[i] > 0&& (count + stones[i]) % 3) {
          count += stones[i];
          stones[i] = 0;
          break;
        }
      }
      if (oldCount == count) return false;
    }
    user = (user + 1) % 2;
  }
  return true;
};
