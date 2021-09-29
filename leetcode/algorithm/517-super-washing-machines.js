/**
 * 517. 超级洗衣机
 *
 * 假设有 n 台超级洗衣机放在同一排上。开始的时候，每台洗衣机内可能有一定量的衣服，也可能是空的。
 *
 * 在每一步操作中，你可以选择任意 m (1 <= m <= n) 台洗衣机，与此同时将每台洗衣机的一件衣服送到相邻的一台洗衣机。
 *
 * 给定一个整数数组 machines 代表从左至右每台洗衣机中的衣物数量，请给出能让所有洗衣机中剩下的衣物的数量相等的 最少的操作步数 。如果不能使每台洗衣机中衣物的数量相等，则返回 -1 。
 */

/**
 * 第三方解题思路: 用衣服的总数除以洗衣机总数,获得每个洗衣机应平均分得的衣服数(有余数直接返回-1,因为无法平均分),然后用这个平均数减去每个洗衣机内的衣服,得到的负数
 * 是应的得到的,正数为当前洗衣机多余的衣服,下一步的目的是把所有差值数组的每一项变为0.从左到右处理数组,多余就把多的向右挪,少的话也吧少的数量付给我右边,直到数字相等
 * 但是操作步数无法得出,
 *  思路中以数组中出现的绝对值最大的数字为步数,无法理解
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (machines) {
  let len = machines.length;
  let differenceArr = new Array(len).fill(0);
  let count = machines.reduce((p, c) => p + c, 0);
  if (count % len) return -1;
  let result = 0;
  let average = count / len;
  machines.forEach((item, i) => {
    differenceArr[i] = item - average;
    // result = Math.max(result, Math.abs(differenceArr[i]))
  });
  // 计算步数理解有问题
  differenceArr.reduce((a, b) => {
    let c = a + b;
    result = Math.max(result, Math.abs(c));
    return c;
  }, 0);
  console.log(differenceArr, average);
  return result;
};
