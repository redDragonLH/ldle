/**
 * 769. 最多能完成排序的块
 *
 * 给定一个长度为 n 的整数数组 arr ，它表示在 [0, n - 1] 范围内的整数的排列。
 *
 * 我们将 arr 分割成若干 块 (即分区)，并对每个块单独排序。将它们连接起来后，使得连接的结果和按升序排序后的原数组相同。
 *
 * 返回数组能分成的最多块数量。
 */

/**
 * 也就是在[n,j]段内这个里面包含的整数为 也只有[n,j]所包含的整数
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  // 从头到尾遍历,查看当前段最大与最小值是否在此段内,这就得考虑前后两个点,双指针么,
  // 不对,如果前边不能被分割,中间被分割也没啥意义吧,所以还是要一段一段遍历
  // 顶多是从前和后双向遍历一下
  let len = arr.length;
  if (!len) return 1;
  let result = 1;
  let segmentMaxElement = -1;
  let segmentMaxIndex = -1;

  let segmentMinElement = Number.MIN_SAFE_INTEGER;
  let segmentMinIndex = -1;

  for (let i = 0; i < len; i++) {
    if (arr[i] < i) {
      if (segmentMaxElement === i && segmentMinElement === segmentMinIndex) {
        result++;
        segmentMaxElement = segmentMinElement = i + 1;
        segmentMaxIndex = segmentMinIndex = i + 1;
      }
    } else {
      if (segmentMaxElement < arr[i]) {
        segmentMaxElement = arr[i];
        segmentMaxIndex = i;
      }

      if (segmentMinElement > arr[i]) {
        segmentMinElement = arr[i];
        segmentMinIndex = i;
      }
    }
  }
  return result;
};

/**
 * 官方题解
 */
var maxChunksToSorted = function (arr) {
  let m = 0,
    res = 0;
  for (let i = 0; i < arr.length; i++) {
    m = Math.max(m, arr[i]);
    // 也就是其实对应位置元素直接算一个块得到的块是最多的
    // 如果m的位置不是 i 也可以么
    // 或者说此段的最大值找到后已经确定是一段了么
    if (m === i) {
      res++;
    }
  }
  return res;
};
