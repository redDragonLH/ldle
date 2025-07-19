/**
 * 1233. 删除子文件夹
 *
 * 你是一位系统管理员，手里有一份文件夹列表 folder，你的任务是要删除该列表中的所有 子文件夹，并以 任意顺序 返回剩下的文件夹。
 *
 * 如果文件夹 folder[i] 位于另一个文件夹 folder[j] 下，那么 folder[i] 就是 folder[j] 的 子文件夹 。
 *
 * 文件夹的「路径」是由一个或多个按以下格式串联形成的字符串：'/' 后跟一个或者多个小写英文字母。
 *  * 例如，"/leetcode" 和 "/leetcode/problems" 都是有效的路径，而空字符串和 "/" 不是。
 */

/**
 * 检查是否为相关联文件夹
 * 两次遍历估计得超时~
 * 但是不两次遍历又搞不定
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  let len = folder.length;
  for (let i = 0; i < len - 1; i++) {
    if (!folder[i]) continue;

    for (let j = i + 1; j < len; j++) {
      if (!folder[j]) continue;
      if (folder[i].indexOf(folder[j] + "/") === 0) {
        folder[i] = false;
        break;
      }
      if (folder[j].indexOf(folder[i] + "/") === 0) {
        folder[j] = false;
        continue;
      }
    }
  }
  return folder.filter((e) => e);
};
/**
 * 应该有只运行一遍的算法,用hash表保存记录,但是hash 表最后也要循环吧
 * 执行用时：3748 ms, 在所有 JavaScript 提交中击败了12.50%的用户
 * 内存消耗：57.1 MB, 在所有 JavaScript 提交中击败了46.88%的用户
 */

/**
 * 此题确实非常适合用字典树解答,主要问题是检查是否叶节点问题,需要删除的逻辑处理,
 * 字典树构建非常简单
 */
var removeSubfolders = function (folder) {
  const root = new Trie();
  for (let i = 0; i < folder.length; ++i) {
    const path = split(folder[i]);
    let cur = root;
    for (const name of path) {
      if (!cur.children.has(name)) {
        cur.children.set(name, new Trie());
      }
      cur = cur.children.get(name);
    }
    cur.ref = i;
  }

  const ans = [];

  const dfs = (folder, ans, cur) => {
    if (cur.ref !== -1) {
      ans.push(folder[cur.ref]);
      return;
    }
    for (const child of cur.children.values()) {
      dfs(folder, ans, child);
    }
  };

  dfs(folder, ans, root);
  return ans;
};

const split = (s) => {
  const ret = [];
  let cur = "";
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (ch === "/") {
      ret.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  ret.push(cur);
  return ret;
};

class Trie {
  constructor() {
    this.ref = -1;
    this.children = new Map();
  }
}
/**
 * 执行用时：152 ms, 在所有 JavaScript 提交中击败了10.00%的用户
 * 内存消耗：86.36 MB, 在所有 JavaScript 提交中击败了10.00%的用户
 */