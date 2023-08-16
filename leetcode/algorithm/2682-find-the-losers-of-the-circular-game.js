/**
 * 2682. 找出转圈游戏输家
 *
 * n 个朋友在玩游戏。这些朋友坐成一个圈，按 顺时针方向 从 1 到 n 编号。从第 i 个朋友的位置开始顺时针移动 1 步会到达第 (i + 1) 个朋友的位置（1 <= i < n），而从第 n 个朋友的位置开始顺时针移动 1 步会回到第 1 个朋友的位置。
 * 游戏规则如下：
 * 第 1 个朋友接球。
 *  * 接着，第 1 个朋友将球传给距离他顺时针方向 k 步的朋友。
 *  * 然后，接球的朋友应该把球传给距离他顺时针方向 2 * k 步的朋友。
 *  * 接着，接球的朋友应该把球传给距离他顺时针方向 3 * k 步的朋友，以此类推。
 *
 * 换句话说，在第 i 轮中持有球的那位朋友需要将球传递给距离他顺时针方向 i * k 步的朋友。
 * 当某个朋友第 2 次接到球时，游戏结束。
 * 在整场游戏中没有接到过球的朋友是 输家 。
 * 给你参与游戏的朋友数量 n 和一个整数 k ，请按升序排列返回包含所有输家编号的数组 answer 作为答案。
 */

/**
 * 处理的边界条件太多,不够健壮
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  let catched = [];
  let current = 1;
  let result = [];
  let index = 1;
  while (!catched.includes(current)) {
    catched.push(current);
    current += index * k;
    index++;
    if (current > n) {
      current = current % n ? current % n : n;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (!catched.includes(i)) {
      result.push(i);
    }
  }
  return result;
};
/**
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了55.28%的用户
 * 内存消耗：43.47 MB, 在所有 JavaScript 提交中击败了38.19%的用户
 */


/**
 *最快题解
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    let visit = new Array(n).fill(false);
    // 判断条件 
    // 用+ 换 *,减少计算,好逻辑
    for(let i=k, j=0;!visit[j];i+=k) {
        // 走过的路都标上
        visit[j] = true;
        // 肯定要 余
        j = (j+i)%n;
    }
    let res = [];
    // 这里思路就一样了
    for(let i=0;i<n;i++) {
        if(!visit[i]) {
            res.push(i+1);
        }
    }
    return res;
};