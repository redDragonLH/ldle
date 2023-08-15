/**
 * 833. 字符串中的查找与替换
 * 
 * 你会得到一个字符串 s (索引从 0 开始)，你必须对它执行 k 个替换操作。替换操作以三个长度均为 k 的并行数组给出：indices, sources,  targets。
 * 

 * 1. 检查 子字符串  sources[i] 是否出现在 原字符串 s 的索引 indices[i] 处。
 * 2. 如果没有出现， 什么也不做 。
 * 3. 如果出现，则用 targets[i] 替换 该子字符串。
 * 
 * 例如，如果 s = "abcd" ， indices[i] = 0 , sources[i] = "ab"， targets[i] = "eee" ，那么替换的结果将是 "eeecd" 。
 * 所有替换操作必须 同时 发生，这意味着替换操作不应该影响彼此的索引。测试用例保证元素间不会重叠 。
 * 例如，一个 s = "abc" ，  indices = [0,1] ， sources = ["ab"，"bc"] 的测试用例将不会生成，因为 "ab" 和 "bc" 替换重叠。
 * 在对 s 执行所有替换操作后返回 结果字符串 。
 * 子字符串 是字符串中连续的字符序列。
 */

/**
 *  前后关联的,有点麻烦,需要保存数据
 * 要判断区域,不呢个冲突,其他就比较简单了,主要是判断替换位置
 *
 *
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  const n = s.length;
  const m = indices.length;

  const ops = new Array(m);
  for (let i = 0; i < m; i++) {
    ops[i] = i;
  }
  // 排序判断的是 indices 的位置
  // 这样ops 映射的indices 的位置,但是又不改变indices 的顺序
  ops.sort((i, j) => indices[i] - indices[j]);

  let ans = "";
  let pt = 0;
  for (let i = 0; i < n; ) {
    // 往右走,是增大,找到要替换的元素的位置
    while (pt < m && indices[ops[pt]] < i) {
      pt++;
    }
    let found = false;
    while (pt < m && indices[ops[pt]] == i) {
        // 找到要替换的位置
      if (s.substring(i, i + sources[ops[pt]].length) === sources[ops[pt]]) {
        found = true;
        break;
      }
      pt++;
    }
    if (found) {
      ans += targets[ops[pt]];
      i += sources[ops[pt]].length;
    } else {
      ans += s[i];
      i++;
    }
  }
  return ans;
};
