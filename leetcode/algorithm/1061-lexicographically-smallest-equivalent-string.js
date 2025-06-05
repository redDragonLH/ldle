/**
 * 1061. 按字典序排列最小的等效字符串
 * 
 * 给出长度相同的两个字符串s1 和 s2 ，还有一个字符串 baseStr 。

 * 其中  s1[i] 和 s2[i]  是一组等价字符。

 *  * 举个例子，如果 s1 = "abc" 且 s2 = "cde"，那么就有 'a' == 'c', 'b' == 'd', 'c' == 'e'。
 * 等价字符遵循任何等价关系的一般规则：

 *  *  自反性 ：'a' == 'a'
 *  * 对称性 ：'a' == 'b' 则必定有 'b' == 'a'
 *  *  传递性 ：'a' == 'b' 且 'b' == 'c' 就表明 'a' == 'c'
 * 例如， s1 = "abc" 和 s2 = "cde" 的等价信息和之前的例子一样，那么 baseStr = "eed" , "acd" 或 "aab"，这三个字符串都是等价的，而 "aab" 是 baseStr 的按字典序最小的等价字符串
 * 利用 s1 和 s2 的等价信息，找出并返回 baseStr 的按字典序排列最小的等价字符串。
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  // 初始化并查集，每个字符的父节点是自己
  const parent = Array(26)
    .fill(0)
    .map((_, i) => i);

  // 查找函数，带路径压缩
  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  // 合并函数，始终让较小的字符作为父节点
  function union(x, y) {
    const px = find(x);
    const py = find(y);
    if (px === py) return;
    if (px < py) {
      parent[py] = px;
    } else {
      parent[px] = py;
    }
  }

  // 合并所有等价字符
  for (let i = 0; i < s1.length; i++) {
    union(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
  }

  // 构造结果字符串
  let res = "";
  for (let c of baseStr) {
    res += String.fromCharCode(find(c.charCodeAt(0) - 97) + 97);
  }
  return res;
};
/**
 * 执行用时：7 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗：56.30 MB, 在所有 JavaScript 提交中击败了84.62%的用户
 */