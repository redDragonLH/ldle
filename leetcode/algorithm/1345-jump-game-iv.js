/**
 * 1345. 跳跃游戏 IV
 *
 * 给你一个整数数组 arr ，你一开始在数组的第一个元素处（下标为 0）。
 *
 * 每一步，你可以从下标 i 跳到下标：
 *
 * i + 1 满足：i + 1 < arr.length
 * i - 1 满足：i - 1 >= 0
 * j 满足：arr[i] == arr[j] 且 i != j
 * 请你返回到达数组最后一个元素的下标处所需的 最少操作次数 。
 *
 * 注意：任何时候你都不能跳到数组外面。
 */

/**
 * 广度优先搜索可以解决这个问题
 *
 * 而且还是要剪枝
 *
 * 有点麻烦,可以跳到数个位置,不仅是前后,还有相等数据位置,广度优先肯定超时
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  let arrLen = arr.length;
  if (arrLen < 2) return 0;
  if (arrLen === 2) return 1;

  let queue = [[arr[0], 0]];
  // 就算完全排斥已经处理过的元素,循环量级也还是太大
  let traversed = new Set();
  traversed.add(0);
  let depth = 0;
  while (queue.length) {
    let len = queue.length;
    while (len--) {
      let item = queue.shift();
      if (item[1] === arrLen - 1) return depth;
      if (!traversed.has(item[1] - 1) && item[1] - 1 > -1) {
        queue.push([arr[item[1] - 1], item[1] - 1]);
        traversed.add(item[1] - 1);
      }
      if (!traversed.has(item[1] + 1) && item[1] - 1 < arrLen) {
        queue.push([arr[item[1] + 1], item[1] + 1]);
        traversed.add(item[1] + 1);
      }
      for (let i = 0; i < arrLen; i++) {
        if (arr[i] === item[0] && !traversed.has(i)) {
          queue.push([arr[i], i]);
          traversed.add(i);
        }
      }
    }
    depth++;
  }
};
/**
 * 果然还是超时了,这种程度的剪枝不太够
 */