/**
 * 464. 我能赢吗
 *
 * 在 "100 game" 这个游戏中，两名玩家轮流选择从 1 到 10 的任意整数，累计整数和，先使得累计整数和 达到或超过  100 的玩家，即为胜者。
 * 如果我们将游戏规则改为 “玩家 不能 重复使用整数” 呢？
 * 例如，两个玩家可以轮流从公共整数池中抽取从 1 到 15 的整数（不放回），直到累计整数和 >= 100。
 * 给定两个整数 maxChoosableInteger （整数池中可选择的最大数）和 desiredTotal（累计和），若先出手的玩家是否能稳赢则返回 true ，否则返回 false 。假设两位玩家游戏时都表现 最佳 。
 */

/**
 * 核心问题：什么是最佳
 * 要模拟最佳么
 *
 * 最佳是每个人都放最大的数么，不应该吧
 * 先手优势非常明显，
 * 那是有特殊情况才会输么，
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {};

/**
 * 官方题解：记忆化搜索+状态压缩
 * 边界情况
 *  1. 当所有数字选完仍无法到达desiredTotak 时，两人都无法获胜，返回 false.
 *  2. 当所有数字的和大于等于 desiredTotal时，其中一方能获得胜利，需要通过搜索来判断获胜方\
 *
 * 在游戏中途，假设已经被使用的数字的集合为 usedNumbers,这些数字的和为 currentTotal。当某方行动时，
 * 如果他能在未选择的数字中选出一个i,使得 i + currentTotal >= desiredTotal.则他获胜。否则要继续通过搜索来判断获胜方。
 * 在剩下二点数字中，如果他能选择一个i，使得对方在接下来的局面中无法获胜，则他获胜，否则失败
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  const memo = new Map();
  // 搜索方法
  const dfs = (
    maxChoosableInteger,
    usedNumbers,
    desiredTotal,
    currentTotal
  ) => {
      // 这个数字没用过才能继续
      // 数字以什么标准挑选呢
    if (!memo.has(usedNumbers)) {
      let res = false;
      // for循环里面套递归，可真是效率够高~~
      for (let i = 0; i < maxChoosableInteger; i++) {
          // 二进制保存使用的数 (题目要求可用数不超过20)
          // 右移后当前位的元素是0，才能使用，而这个对应位的数字是i

          // 从小到大对比元素，和最佳有关系么
        if (((usedNumbers >> i) & 1) === 0) {
            // i+1是因为题目从1开始，循环从0开始
          if (i + 1 + currentTotal >= desiredTotal) {
            res = true;
            break;
          }
          if (
            !dfs(
              maxChoosableInteger,
              usedNumbers | (1 << i), // 把当前使用的数 i，的位置置为1，表示使用过
              desiredTotal,
              currentTotal + i + 1 // 更新当前总数
            )
          ) {
            res = true;
            break;
          }
        }
      }
      memo.set(usedNumbers, res);
    }
    return memo.get(usedNumbers);
  };
  // 这个逻辑啥意思
  // 获得所有可使用数字的总和，总和没有超过要求，没人赢
  // 这个公式挺有意思
  // (1 + maxChoosableInteger) * maxChoosableInteger  / 2 => (首项 + 末项) * 项数 / 2
  // 
  if (((1 + maxChoosableInteger) * maxChoosableInteger) / 2 < desiredTotal) {
    return false;
  }
  return dfs(maxChoosableInteger, 0, desiredTotal, 0);
};
