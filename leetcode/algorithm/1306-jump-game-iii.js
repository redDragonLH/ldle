/**
 * 1306. 跳跃游戏 III
 *
 * 这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。
 * 请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。
 * 注意，不管是什么情况下，你都无法跳到数组之外。
 */
/**
 * 模拟应该是可以的，如果有重复访问的下标或者超过数组长度就停止，不过可以两边跳的话就得是广度优先搜素？
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  if (arr[start] === 0) {
    return true;
  }

  const n = arr.length;
  const used = new Array(n).fill(false);
  used[start] = true;
  const q = new Queue([start]);

  while (!q.isEmpty()) {
    const u = q.dequeue();
    for (const v of [u + arr[u], u - arr[u]]) {
      if (0 <= v && v < n && !used[v]) {
        if (arr[v] === 0) {
          return true;
        }
        q.enqueue(v);
        used[v] = true;
      }
    }
  }

  return false;
};
/**
 * 执行用时 :11 ms, 在所有 JavaScript 提交中击败了6.38%的用户
 * 内存消耗 :65.15 MB, 在所有 JavaScript 提交中击败了31.91%的用户
 */