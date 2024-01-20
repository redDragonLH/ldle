/**
 * 2171. 拿出最少数目的魔法豆
 *
 * 给定一个 正整数 数组 beans ，其中每个整数表示一个袋子里装的魔法豆的数目。
 * 请你从每个袋子中 拿出 一些豆子（也可以 不拿出），使得剩下的 非空 袋子中（即 至少还有一颗 魔法豆的袋子）魔法豆的数目 相等。一旦把魔法豆从袋子中取出，你不能再将它放到任何袋子中。
 * 请返回你需要拿出魔法豆的 最少数目。
 */

/**
 * 这题有什么解法?
 * 一个数一个数从底下算?
 * @param {number[]} beans
 * @return {number}
 */
var minimumRemoval = function (beans) {
  let max = Math.max(...beans);
  let result = Number.MAX_SAFE_INTEGER;
  while (max > -1) {
    result = Math.min(
      result,
      beans.reduce((p, c) => p + (c >= max ? c - max : c), 0)
    );
    max--;
  }
  return result;
};
/**
 * 超时~~还有能优化的点么
 */