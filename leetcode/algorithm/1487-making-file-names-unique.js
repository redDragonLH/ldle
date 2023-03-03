/**
 * 1487. 保证文件名唯一
 *
 * 给你一个长度为 n 的字符串数组 names 。你将会在文件系统中创建 n 个文件夹：在第 i 分钟，新建名为 names[i] 的文件夹。
 *
 * 由于两个文件 不能 共享相同的文件名，因此如果新建文件夹使用的文件名已经被占用，系统会以 (k) 的形式为新文件夹的文件名添加后缀，其中 k 是能保证文件名唯一的 最小正整数 。
 *
 * 返回长度为 n 的字符串数组，其中 ans[i] 是创建第 i 个文件夹时系统分配给该文件夹的实际名称。
 */
/**
 * 简单,但是格式比较坑,但是可以不判断
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  let result = [];
  let mapping = new Set();
  for (const name of names) {
    if (mapping.has(name)) {
      let i = 0;
      while (mapping.has(`${name}(${++i})`)) {}

      result.push(`${name}(${i})`);
      mapping.add(`${name}(${i})`);
    } else {
      result.push(name);
      mapping.add(name);
    }
  }
  return result;
};
/**
 * 字符串可以优化,整个逻辑比较直观,但是要遍历,但是由于已存在的文件夹数字可能从任何位置开始,所以保存当前相对字符串的后缀比较麻烦,而且在数据量小的情况下不必要
 * 执行用时：4360 ms, 在所有 JavaScript 提交中击败了21.05%的用户
 * 内存消耗：61.4 MB, 在所有 JavaScript 提交中击败了60.53%的用户
 */