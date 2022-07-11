/**
 * 676. 实现一个魔法字典
 *
 * 设计一个使用单词列表进行初始化的数据结构，单词列表中的单词 互不相同 。 如果给出一个单词，请判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于你构建的字典中。
 *
 * 实现 MagicDictionary 类：
 *  * MagicDictionary() 初始化对象
 *  * void buildDict(String[] dictionary) 使用字符串数组 dictionary 设定该数据结构，dictionary 中的字符串互不相同
 *  * bool search(String searchWord) 给定一个字符串 searchWord ，判定能否只将字符串中 一个 字母换成另一个字母，使得所形成的新字符串能够与字典中的任一字符串匹配。如果可以，返回 true ；否则，返回 false 。
 */

/**
 * 遍历可以解决,按照要求说明(只能/必须)改动一个字母,那么长度必须相等,且只能有一个字母对应不上,
 * 只要遍历searchWord 和每个字典Word并且把上方的要求代入进去就可以,
 * 但是效率很低,因为理论上每个元素都要遍历一遍
 */
var MagicDictionary = function () {};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

/**
 * 优化算法
 *
 */
var MagicDictionary = function () {
  this.root = new Trie();
};
/**
 * 构建很简单
 * @param {string[]} dictionary 
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  for (const word of dictionary) {
    let cur = this.root;
    for (let i = 0; i < word.length; ++i) {
      const ch = word[i];
      // 转成数字这样多转一遍是否有意义
      const idx = ch.charCodeAt() - "a".charCodeAt();
      if (!cur.child[idx]) {
        cur.child[idx] = new Trie();
      }
      cur = cur.child[idx];
    }
    cur.isFinished = true;
  }
};

/**
 * 如果保存结构是字典树的话,搜索算法就有点复杂,不过也没有那么负责,按层查呗,也是对不上的层就拿一个变量标记+1,有第二个对不上的就直接跳过,
 * 结束也直接查最后一个字典树对应的字母是不是终结字符
 * @param {string} searchWord 
 * @returns 
 */
MagicDictionary.prototype.search = function (searchWord) {
  return dfs(searchWord, this.root, 0, false);
};
/**
 * 
 * @param {*} searchWord 
 * @param {*} node 
 * @param {*} pos 
 * @param {*} modified 
 * @returns 
 */
const dfs = (searchWord, node, pos, modified) => {
  if (pos === searchWord.length) {
    return modified && node.isFinished;
  }
  let idx = searchWord[pos].charCodeAt() - "a".charCodeAt();
  if (node.child[idx]) {
    if (dfs(searchWord, node.child[idx], pos + 1, modified)) {
      return true;
    }
  }
  if (!modified) {
    for (let i = 0; i < 26; ++i) {
      if (i !== idx && node.child[i]) {
        if (dfs(searchWord, node.child[i], pos + 1, true)) {
          return true;
        }
      }
    }
  }
  return false;
};

class Trie {
  constructor() {
    // 是一个单词的结尾就把这个变量转为true,但是不影响继续往下遍历
    this.isFinished = false;
    this.child = new Array(26).fill(0);
  }
}
/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
