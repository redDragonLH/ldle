/**
 * 211. 添加与搜索单词 - 数据结构设计
 *
 * 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。
 *
 * 实现词典类 WordDictionary ：
 *  * WordDictionary() 初始化词典对象
 *  * void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
 *  * bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。
 */
var WordDictionary = function () {
  this.word = new Set();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (!this.word.has(word)) this.word.add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (/\.+/.test(word)) {
    let reg = new RegExp("^" + word + "$");
    let isHave = false;
    let wordLen = word.length;
    for (let item of this.word.values()) {
      if (item.length === wordLen && reg.test(item)) {
        return true;
      }
    }
    return isHave;
  } else {
    return this.word.has(word);
  }
};
/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/**
 * 超出时间限制
 */

/**
 * 官方题解 字典树
 *
 * 字典树(前缀树)是一种树形数据结构,用于高效的存储和检索字符串数据集中的键.前缀树可用O(|S|)的时间完成
 *  *   向字典树中插入字符串 word
 *  *   查询字符串word是否已经插入到字典树中
 * 其中|S|是插入字符串或查询前缀的长度
 *
 */

var WordDictionary = function () {
  this.trieRoot = new TrieNode();
};

WordDictionary.prototype.addWord = function (word) {
  this.trieRoot.insert(word);
};

WordDictionary.prototype.search = function (word) {
  const dfs = (index, node) => {
    if (index === word.length) {
      return node.isEnd;
    }
    const ch = word[index];
    if (ch !== ".") {
      const child = node.children[ch.charCodeAt() - "a".charCodeAt()];
      if (child && dfs(index + 1, child)) {
        return true;
      }
    } else {
      for (const child of node.children) {
        if (child && dfs(index + 1, child)) {
          return true;
        }
      }
    }
    return false;
  };

  return dfs(0, this.trieRoot);
};

class TrieNode {
  constructor() {
    this.children = new Array(26).fill(0);
    this.isEnd = false;
  }

  insert(word) {
    let node = this;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      const index = ch.charCodeAt() - "a".charCodeAt();
      if (node.children[index] === 0) {
        node.children[index] = new TrieNode();
      }
      node = node.children[index];
    }
    node.isEnd = true;
  }

  getChildren() {
    return this.children;
  }

  isEnd() {
    return this.isEnd;
  }
}
