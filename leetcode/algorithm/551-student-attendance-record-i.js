/**
 * 551. 学生出勤记录 I
 *
 * 给你一个字符串 s 表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：
 *  * 'A'：Absent，缺勤
 *  * 'L'：Late，迟到
 *  * 'P'：Present，到场
 *
 * 如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：
 *  * 按 总出勤 计，学生缺勤（'A'）严格 少于两天。
 *  * 学生 不会 存在 连续 3 天或 3 天以上的迟到（'L'）记录。
 * 如果学生可以获得出勤奖励，返回 true ；否则，返回 false 。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absentCount = 0;
  let continuous = 0;
  for (const i of s) {
    console.log(i);
    if (i == "A") {
      absentCount++;
      if (absentCount === 2) return false;
    }
    if (i === "L") {
      continuous++;
      if (continuous === 3) return false;
    } else if (i !== "L" && continuous) {
      continuous = 0;
    }
  }
  return false;
};
/**
 * 平铺直叙
 * 执行用时：68 ms, 在所有 JavaScript 提交中击败了87.61%的用户
 * 内存消耗：38.9 MB, 在所有 JavaScript 提交中击败了12.39%的用户
 */
