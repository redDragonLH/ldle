/**
 * 1491. 去掉最低工资和最高工资后的工资平均值
 *
 * 给你一个整数数组 salary ，数组里每个数都是 唯一 的，其中 salary[i] 是第 i 个员工的工资。
 * 请你返回去掉最低工资和最高工资以后，剩下员工工资的平均值。
 */

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b);
  let len = salary.length;
  let count = 0;
  for (let i = 1; i < len - 1; i++) {
    count += salary[i];
  }
  return count / (len - 2);
};
/**
 * 执行用时：47 ms, 在所有 JavaScript 提交中击败了93.81%的用户
 * 内存消耗：49.09 MB, 在所有 JavaScript 提交中击败了26.55%的用户
 */