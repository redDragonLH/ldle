/**
 * 1769. 移动所有球到每个盒子所需的最小操作数
 *
 * 有 n 个盒子。给你一个长度为 n 的二进制字符串 boxes ，其中 boxes[i] 的值为 '0' 表示第 i 个盒子是 空 的，而 boxes[i] 的值为 '1' 表示盒子里有 一个 小球。
 *
 * 在一步操作中，你可以将 一个 小球从某个盒子移动到一个与之相邻的盒子中。第 i 个盒子和第 j 个盒子相邻需满足 abs(i - j) == 1 。注意，操作执行后，某些盒子中可能会存在不止一个小球。
 *
 * 返回一个长度为 n 的数组 answer ，其中 answer[i] 是将所有小球移动到第 i 个盒子所需的 最小 操作数。
 *
 * 每个 answer[i] 都需要根据盒子的 初始状态 进行计算。
 */

/**
 *  这个二进制是字符串模拟二进制~
 * 以暴力方法来看就是个简单题
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const n = boxes.length;
  const res = [];
  for (let i = 0; i < n; i++) {
    let sm = 0;
    // 计算1 到这个位置的距离
    // 这个球肯定要走这么多距离
    for (let j = 0; j < n; j++) {
      if (boxes[j] === "1") {
        sm += Math.abs(j - i);
      }
    }
    res.push(sm);
  }
  return res;
};

/**
 * 还有一个方案就从两边往 i 位置滚雪球,这样一次遍历就可以
 * 不应该往i,而是应该从头到尾,这样相加起来的才是完整的数量
 */
var minOperations = function (boxes) {
  let left = boxes[0].charCodeAt() - "0".charCodeAt(),
    right = 0,
    operations = 0;
  const n = boxes.length;
  for (let i = 1; i < n; i++) {
    if (boxes[i] === "1") {
      right++;
      operations += i;
    }
  }
  const res = new Array(n).fill(0);
  res[0] = operations;
  for (let i = 1; i < n; i++) {
    operations += left - right;
    if (boxes[i] === "1") {
      left++;
      right--;
    }
    res[i] = operations;
  }
  return res;
};
