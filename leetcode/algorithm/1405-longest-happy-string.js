/**
 * 1405. 最长快乐字符串
 *
 * 如果字符串中不含有任何 'aaa'，'bbb' 或 'ccc' 这样的字符串作为子串，那么该字符串就是一个「快乐字符串」。
 *
 * 给你三个整数 a，b ，c，请你返回 任意一个 满足下列全部条件的字符串 s：
 *  * s 是一个尽可能长的快乐字符串。
 *  * s 中 最多 有a 个字母 'a'、b 个字母 'b'、c 个字母 'c' 。
 *  * s 中只含有 'a'、'b' 、'c' 三种字母。
 *
 * 如果不存在这样的字符串 s ，请返回一个空字符串 ""。
 */
/**
 * 少隔多,如果两个少的比最大的少三个那就没得救,也不对,尽可能长~~~
 *
 * 如果可以的话那怎么确保返回一个符号条件的字符串
 *
 * 就是怎么能知道隔一个还是隔两个
 * 也就是用贪心,先隔多的,后隔少的
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  const res = [];
  const arr = [
    [a, "a"],
    [b, "b"],
    [c, "c"],
  ];

  while (true) {
    // 每次排序
    arr.sort((a, b) => b[0] - a[0]);
    let hasNext = false;
    for (const [i, [c, ch]] of arr.entries()) {
      // 没有数量直接跳出循环
      if (c <= 0) {
        break;
      }
      // 这里判断结果数据干啥,
      const m = res.length;
      // 哦,就是看看是不是能放这个数据,不能直接跳过
      // 已经是两个了
      // 按照当前逻辑一直循环,先是单独,后是重复,和先重复后单独理论上长度一样吧
      // 并且并没考虑到前后的情况,也就是没啥分别吧
      if (m >= 2 && res[m - 2] === ch && res[m - 1] === ch) {
        continue;
      }
      hasNext = true;
      res.push(ch);
      arr[i][0]--;
      break;
    }
    // 直接跳出整个循环
    if (!hasNext) {
      break;
    }
  }

  return res.join("");
};
