/**
 * 2024. 考试的最大困扰度
 *
 * 一位老师正在出一场由 n 道判断题构成的考试，每道题的答案为 true （用 'T' 表示）或者 false （用 'F' 表示）。老师想增加学生对自己做出答案的不确定性，方法是 最大化 有 连续相同 结果的题数。（也就是连续出现 true 或者连续出现 false）。
 * 给你一个字符串 answerKey ，其中 answerKey[i] 是第 i 个问题的正确结果。除此以外，还给你一个整数 k ，表示你能进行以下操作的最多次数：
 *
 * 每次操作中，将问题的正确答案改为 'T' 或者 'F' （也就是将 answerKey[i] 改为 'T' 或者 'F' ）。
 * 请你返回在不超过 k 次操作的情况下，最大 连续 'T' 或者 'F' 的数目。
 */
/**
 * 如果说要在k次操作中找到最大长度,那么T或者F肯定是要连续的
 *
 * 可以使用滑动窗口,循环两次,一次T,一次F
 *
 * 代码失败
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  let len = answerKey.length;
  let start = 0,
    end = k;
  let maxT = k;
  for (; start < len - k; start++) {
    let wigth = 0,
      Flen = 0;
    while (Flen < k && start + wigth < len) {
      if (answerKey[start + wigth] === "F") Flen++;
      wigth++;
    }
    maxT = Math.max(maxT, wigth);
  }
  let maxF = k;
  start = 0;
  for (; start < len - k; start++) {
    let wigth = 0,
      Flen = 0;
    while (Flen < k && start + wigth < len) {
      if (answerKey[start + wigth] === "T") Flen++;
      wigth++;
    }
    maxF = Math.max(maxF, wigth);
  }
  console.log(maxT, maxF);
  return Math.max(maxF, maxT);
};

/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  // 问题是找到初始窗口的长度
  //   let Tstart = 0,
  //     Tend = getPosi(answerKey, 0, "F", k);
  //   let Fstart = 0,
  //     Fend = getPosi(answerKey, 0, "T", k);
  let max = 0;
  for (let i = 0; i < answerKey.length; i++) {
    max = Math.max(
      max,
      getPosi(answerKey, i, "T", k),
      getPosi(answerKey, i, "F", k)
    );
  }

  return max;
};
const getPosi = (arr, start, target, len) => {
  let wigth = 0;
  for (let index = start; index < arr.length; index++) {
    if (arr[index] === target && !len) return wigth;

    if (arr[index] === target) {
      len--;
    }
    wigth++;
  }
  return wigth;
};

var maxConsecutiveAnswers = function (answerKey, k) {
  // 问题是找到初始窗口的长度
  let Tstart = 0,
    Tend = getPosi(answerKey, 0, "F", k);
  let Fstart = 0,
    Fend = getPosi(answerKey, 0, "T", k);
  let len = answerKey.length - k;
  let max = Math.max(Tend - Tstart, Fend - Fstart);
  for (let i = 1; i < len; i++) {
    // 余出一个转换量,则重新计算end
    if (answerKey[Tstart] === "F") {
      Tend += getPosi(answerKey, Tend, "F", 1);
    }
    Tstart = i;

    if (answerKey[Fstart] === "T") {
      Fend += getPosi(answerKey, Fend, "T", 1);
    }
    Fstart = i;

    max = Math.max(max, Tend - Tstart, Fend - Fstart);
  }

  return max;
};
/**
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了25.00%的用户
 * 内存消耗：46 MB, 在所有 JavaScript 提交中击败了6.25%的用户
 */