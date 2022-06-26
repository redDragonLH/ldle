/**
 * 710. 黑名单中的随机数
 *
 * 给定一个整数 n 和一个 无重复 黑名单整数数组 blacklist 。设计一种算法，从 [0, n - 1] 范围内的任意整数中选取一个 未加入 黑名单 blacklist 的整数。任何在上述范围内且不在黑名单 blacklist 中的整数都应该有 同等的可能性 被返回。
 *
 * 优化你的算法，使它最小化调用语言 内置 随机函数的次数
 *
 * 实现 Solution 类:
 *  * Solution(int n, int[] blacklist) 初始化整数 n 和被加入黑名单 blacklist 的整数
 *  * int pick() 返回一个范围为 [0, n - 1] 且不在黑名单 blacklist 中的随机整数
 */

/**
 * 逻辑不复杂，但是要知道怎样不让选择到黑名单之后不再继续随机数据
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
  this.mapping = {};
  this.n = n;
  this.blacklist = blacklist;
  let bLen = blacklist.length;
  this.area = n - bLen;
  let allWhite = n - bLen;
  let range = allWhite;
  for (let i = 0; i < bLen; i++) {
    if (blacklist[i] < range) {
      for (let j = allWhite; j < n; j++) {
        if (!blacklist.includes(j)) {
          this.mapping[blacklist[i]] = j;
          allWhite = j + 1;
          break;
        }
      }
    }
  }
  console.log(this.mapping);
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
    let random= Math.floor(Math.random() * area);
    return this.blacklist[random] || random;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */

/**
 * 好慢
 * 执行用时：780 ms, 在所有 JavaScript 提交中击败了10.37%的用户
 * 内存消耗：67.4 MB, 在所有 JavaScript 提交中击败了33.34%的用户
 */
