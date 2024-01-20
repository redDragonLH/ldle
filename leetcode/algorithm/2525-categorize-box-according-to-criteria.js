/**
 * 2525. 根据规则将箱子分类
 *
 * 给你四个整数 length ，width ，height 和 mass ，分别表示一个箱子的三个维度和质量，请你返回一个表示箱子 类别 的字符串。
 *  * 如果满足以下条件，那么箱子是 "Bulky" 的：
 *  *  * 箱子 至少有一个 维度大于等于 10^4 。
 *  *  * 或者箱子的 体积 大于等于 10^9 。
 *  * 如果箱子的质量大于等于 100 ，那么箱子是 "Heavy" 的。
 *  * 如果箱子同时是 "Bulky" 和 "Heavy" ，那么返回类别为 "Both" 。
 *  * 如果箱子既不是 "Bulky" ，也不是 "Heavy" ，那么返回类别为 "Neither" 。
 *  * 如果箱子是 "Bulky" 但不是 "Heavy" ，那么返回类别为 "Bulky" 。
 *  * 如果箱子是 "Heavy" 但不是 "Bulky" ，那么返回类别为 "Heavy" 。
 * 注意，箱子的体积等于箱子的长度、宽度和高度的乘积。
 */

/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  let MAX_Dimension = 1e4;
  let MAX_Bulk = 1e9;
  let bulk = length * width * height;
  let isBulky = false;
  let isHeavy = false;
  if (
    length >= MAX_Dimension ||
    width >= MAX_Dimension ||
    height >= MAX_Dimension ||
    bulk >= MAX_Bulk
  ) {
    isBulky = true;
  }
  if (mass >= 100) {
    isHeavy = ture;
  }
  if (isBulky && isHeavy) {
    return "Both";
  } else if (!isBulky && !isHeavy) {
    return "Neither";
  } else if (isBulky) {
    return "Bulky";
  } else {
    return "Heavy";
  }
};
/**
 * 执行用时 :60 ms, 在所有 JavaScript 提交中击败了44.44%的用户
 * 内存消耗 :39.90 MB, 在所有 JavaScript 提交中击败16.67%的用户
 */
