/**
 * 3211. 生成不含相邻零的二进制字符串
 *
 * 给你一个正整数 n。
 * 如果一个二进制字符串 x 的所有长度为 2 的子字符串中包含 至少 一个 "1"，则称 x 是一个 有效 字符串。
 * 返回所有长度为 n 的 有效 字符串，可以以任意顺序排列。
 */

/**
 * 一的间隔不能多于一个零,也就是从开头要么是1要么是0,然后1后面只能是0,查看有多少个1,剩余的0可以随意排列,因为都不会有两个0相邻
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
  const res = [];
  function dfs(arr) {
    if (arr.length === n) {
      res.push(arr.join(""));
      return;
    }
    if (arr.length === 0 || arr[arr.length - 1] === "1") {
      arr.push("0");
      dfs(arr);
      arr.pop();
    }
    arr.push("1");
    dfs(arr);
    arr.pop();
  }
  dfs([]);
  return res;
};
