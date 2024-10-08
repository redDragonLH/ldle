/**
 * 2582. 递枕头
 *
 * n 个人站成一排，按从 1 到 n 编号。
 * 最初，排在队首的第一个人拿着一个枕头。每秒钟，拿着枕头的人会将枕头传递给队伍中的下一个人。一旦枕头到达队首或队尾，传递方向就会改变，队伍会继续沿相反方向传递枕头。
 *  * 例如，当枕头到达第 n 个人时，TA 会将枕头传递给第 n - 1 个人，然后传递给第 n - 2 个人，依此类推。
 * 给你两个正整数 n 和 time ，返回 time 秒后拿着枕头的人的编号。
 */

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let index = 1;
  let dirct = 1;
  while (time) {
    time--;
    if (dirct) {
      index++;
    } else {
      index--;
    }
    if (index === n) {
      dirct = 0;
    } else if (index === 1) {
      dirct = 1;
    }
  }
  return index;
};
/**
 * 速度很慢
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了74.47%的用户
 * 内存消耗：39.81 MB, 在所有 JavaScript 提交中击败了61.70%的用户
 */