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