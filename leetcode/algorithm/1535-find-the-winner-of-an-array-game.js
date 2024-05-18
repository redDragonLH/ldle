/**
 * 1535. 找出数组游戏的赢家
 *
 * 给你一个由 不同 整数组成的整数数组 arr 和一个整数 k 。
 * 每回合游戏都在数组的前两个元素（即 arr[0] 和 arr[1] ）之间进行。比较 arr[0] 与 arr[1] 的大小，较大的整数将会取得这一回合的胜利并保留在位置 0 ，较小的整数移至数组的末尾。当一个整数赢得 k 个连续回合时，游戏结束，该整数就是比赛的 赢家 。
 * 返回赢得比赛的整数。
 * 题目数据 保证 游戏存在赢家。
 */

/**
 * 感觉除了模拟没有其他方案能得到解，而且如果真地移动元素的话耗时就非常多了吧
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  let prev = Math.max(arr[0], arr[1]);
  if (k === 1) {
    return prev;
  }
  let consecutive = 1;
  let maxNum = prev;
  for (let i = 2; i < arr.length; i++) {
    // 完全不记录元素位置，也就是当前顺序如果查到赢家那么后边肯定更低
    // 如果没查到赢家，那么肯定是最大值赢，因为最大值肯定能连续赢k次，或者说能永远连续赢下去
    let curr = arr[i];
    if (prev > curr) {
      consecutive++;
      if (consecutive === k) {
        return prev;
      }
    } else {
      prev = curr;
      consecutive = 1;
    }
    maxNum = Math.max(maxNum, curr);
  }
  return maxNum;
};
