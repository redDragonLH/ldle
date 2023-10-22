/**
 * 1402. 做菜顺序
 *
 * 一个厨师收集了他 n 道菜的满意程度 satisfaction ，这个厨师做出每道菜的时间都是 1 单位时间。
 *
 * 一道菜的 「 like-time 系数 」定义为烹饪这道菜结束的时间（包含之前每道菜所花费的时间）乘以这道菜的满意程度，也就是 time[i]*satisfaction[i] 。
 *
 * 返回厨师在准备了一定数量的菜肴后可以获得的最大 like-time 系数 总和。
 *
 * 你可以按 任意 顺序安排做菜的顺序，你也可以选择放弃做某些菜来获得更大的总和。
 */

/**
 *满意程度数值是一个问题，满意程度位置也是一个问题，最大的值应该尽可能往后排，但是有些小值会导致总值大打折扣

 可以优化，就是肯定会有个转折点从增多到减少的，现在逻辑顺序不对，需要从大到小计算才能用当前逻辑
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b);
  let result = 0;
  while (true) {
    if (satisfaction.length) {
      let count = 0;
      satisfaction.forEach((e, i) => {
        count += (i + 1) * e;
      });
      if(result > count) return result
      result = count;
      satisfaction.shift();
    } else {
      return result;
    }
  }
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了31.25%的用户
 * 内存消耗：42.17 MB, 在所有 JavaScript 提交中击败了25.00%的用户
 */