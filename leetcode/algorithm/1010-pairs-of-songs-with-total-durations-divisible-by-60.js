/**
 * 1010. 总持续时间可被 60 整除的歌曲
 *
 * 在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。
 *
 * 返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望下标数字 i 和 j 满足  i < j 且有 (time[i] + time[j]) % 60 == 0。
 */

/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let len = time.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
        if((time[i]+time[j]) % 60 === 0) result++;
    }
  }
  return result;
};
/**
 * 执行用时：6616 ms, 在所有 JavaScript 提交中击败了26.92%的用户
 * 内存消耗：43.6 MB, 在所有 JavaScript 提交中击败了80.77%的用户
 */