/**
 * 1806. 还原排列的最少操作步数
 *
 * 给你一个偶数 n​​​​​​ ，已知存在一个长度为 n 的排列 perm ，其中 perm[i] == i​（下标 从 0 开始 计数）。
 * 一步操作中，你将创建一个新数组 arr ，对于每个 i ：
 *  * 如果 i % 2 == 0 ，那么 arr[i] = perm[i / 2]
 *  * 如果 i % 2 == 1 ，那么 arr[i] = perm[n / 2 + (i - 1) / 2]
 * 然后将 arr​​ 赋值​​给 perm 。
 * 要想使 perm 回到排列初始值，至少需要执行多少步操作？返回最小的 非零 操作步数。
 */

/**
 * 把顺序数组,打乱再回到递增的初始状态状态
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  let perm = new Array(n);
  for (let i = 0; i < n; i++) {
    perm[i] = i;
  }
  let arr = [];
  let result = 0;
  let condition = true;
  while (condition) {
    for (let i = 0; i < n; i++) {
      if (i % 2) {
        arr[i] = perm[Math.floor(n / 2) + Math.floor((i - 1) / 2)];
      } else {
        arr[i] = perm[Math.floor(i / 2)];
      }
    }
    perm = arr;
    result++;
    condition = isCorrent(perm, n);
    console.log(perm, condition);
  }
  return result;
};
let isCorrent = (arr, n) => {
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] > arr[i]) return true;
  }
  return false;
};
console.log(reinitializePermutation(2));
/**
 * while / do while leetcode 不运行
 */