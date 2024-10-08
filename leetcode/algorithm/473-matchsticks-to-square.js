/**
 * 473. 火柴拼正方形
 *
 * 你将得到一个整数数组 matchsticks ，其中 matchsticks[i] 是第 i 个火柴棒的长度。你要用 所有的火柴棍 拼成一个正方形。你 不能折断 任何一根火柴棒，但你可以把它们连在一起，而且每根火柴棒必须 使用一次 。
 *
 * 如果你能使这个正方形，则返回 true ，否则返回 false 。
 */

/**
 * 首先要确定能否被四整除,以及所有火柴能组成四个长度一样的边
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  let count = matchsticks.reduce((per, curr) => per + curr, 0);
  if (count % 4) return false;
  let sideHeight = count / 4;
  // 核心代码:怎样把所有火柴拼接: 动态规划?,感觉不适用
  // 每个边理论上有多种组合,那怎样的组合是可以四边相等,且不会影响其他边
  // 四边同时处理,到最后看那边少那边多,再挪?有点复杂
  matchsticks.sort((a, b) => a - b);
  let matchsticksLen = matchsticks.length;
  let square = [0, 0, 0, 0];
  let matchsticksIndex = 0;
  for (let i = 0; i < square.length; i++) {
    while (square[i] + matchsticks[matchsticksIndex] <= sideHeight) {
      square[i] += matchsticks[matchsticksIndex];
      matchsticksIndex++;
    }
  }
  if (matchsticksLen === matchsticksIndex) return true;
  while (matchsticksIndex < matchsticksLen) {
    for (let i = 0; i < square.length; i++) {
      if (square[i] + matchsticks[matchsticksIndex] <= sideHeight) {
        square[i] += matchsticks[matchsticksIndex];
        matchsticksIndex++;
      } else if (i === square.length - 1) return false;
    }
  }
  return true;
};

/**
 * 核心代码逻辑还是不对
 */

/**
 * 官方题解: 回溯
 * @param {*} matchsticks 
 * @returns 
 */
 var makesquare = function(matchsticks) {
    const totalLen = _.sum(matchsticks);
    if (totalLen % 4 !== 0) {
        return false;
    }
    matchsticks.sort((a, b) => a - b);
    // 为什么要从头到尾交换,你这不就又反过来了么
    for (let i = 0, j = matchsticks.length - 1; i < j; i++, j--) {
        const temp = matchsticks[i];
        matchsticks[i] = matchsticks[j];
        matchsticks[j] = temp;
    }

    const edges = new Array(4).fill(0);
    return dfs(0, matchsticks, edges, Math.floor(totalLen / 4));
}

const dfs = (index, matchsticks, edges, len) => {
    // 已经处理完了
    if (index === matchsticks.length) {
        return true;
    }
    // 回溯处理,一个一个试,每个进行遍历,
    for (let i = 0; i < edges.length; i++) {
        edges[i] += matchsticks[index];
        if (edges[i] <= len && dfs(index + 1, matchsticks, edges, len)) {
            return true;
        }
        edges[i] -= matchsticks[index];
    }
    return false;
};
/**
 * 回溯: 就是在处理完一条记录时把这条记录会退,在用这会退的记录加新条件进行计算获取新纪录,再次进行计算,适用于在数组中查找合适的排列等应用
 */