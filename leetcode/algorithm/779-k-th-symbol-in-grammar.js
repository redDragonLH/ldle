/**
 * 779. 第K个语法符号
 *
 * 我们构建了一个包含 n 行( 索引从 1  开始 )的表。首先在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。
 *  * 例如，对于 n = 3 ，第 1 行是 0 ，第 2 行是 01 ，第3行是 0110 。
 *
 * 给定行数 n 和序数 k，返回第 n 行中第 k 个字符。（ k 从索引 1 开始）
 */

/**
 * 理论上要先构建出第n行,循环呗
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  let kArr = [null, "0"];
  for (let i = 2; i <= n; i++) {
    let str = "";
    for (let s = 0; s < kArr[i - 1].length; s++) {
      if (kArr[i - 1][s] === "0") {
        str += "01";
      } else {
        str += "10";
      }
    }
    kArr.push(str);
  }
  return kArr[n][k - 1];
};
/**
 * 此逻辑会造成内存溢出
 */