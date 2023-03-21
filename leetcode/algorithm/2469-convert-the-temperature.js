/**
 * 2469. 温度转换
 *
 * 给你一个四舍五入到两位小数的非负浮点数 celsius 来表示温度，以 摄氏度（Celsius）为单位。
 * 你需要将摄氏度转换为 开氏度（Kelvin）和 华氏度（Fahrenheit），并以数组 ans = [kelvin, fahrenheit] 的形式返回结果。
 * 返回数组 ans 。与实际答案误差不超过 10-5 的会视为正确答案。
 * 注意：
 *  * 开氏度 = 摄氏度 + 273.15
 *  * 华氏度 = 摄氏度 * 1.80 + 32.00
 */

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  return [celsius + 273.15, celsius * 1.8 + 32];
};
/**
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了82.52%的用户
 * 内存消耗：41.2 MB, 在所有 JavaScript 提交中击败了20.86%的用户
 */