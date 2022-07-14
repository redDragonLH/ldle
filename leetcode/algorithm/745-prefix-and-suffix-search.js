/**
 * 745. 前缀和后缀搜索
 *
 * 设计一个包含一些单词的特殊词典，并能够通过前缀和后缀来检索单词。
 *
 * 实现 WordFilter 类：
 *  * WordFilter(string[] words) 使用词典中的单词 words 初始化对象。
 *  * f(string pref, string suff) 返回词典中具有前缀 prefix 和后缀 suff 的单词的下标。如果存在不止一个满足要求的下标，返回其中 最大的下标 。如果不存在这样的单词，返回 -1 。
 */

/**
 * 这个的话就是把前缀和后缀都计算出来然后遍历两次就可以吧
 * 失败,条件处理不完善
 * @param {string[]} words
 */
/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  this.words = words;
  this.pref = [];
  this.suff = [];
  words.forEach((e) => {
    let pref = "";
    let suff = "";
    for (let i = 0; i < e.length; i++) {
      let posi = e.length - 1 - i;
      pref += e[i];

      if (this.pref[i]) {
        this.pref[i][pref]
          ? this.pref[i][pref].push(e)
          : (this.pref[i][pref] = [e]);
      } else {
        this.pref[i] = [];
        this.pref[i][pref] = [e];
      }

      suff = e[posi] + suff;
      if (this.suff[i]) {
        this.suff[i][suff]
          ? this.suff[i][suff].push(e)
          : (this.suff[i][suff] = [e]);
      } else {
        this.suff[i] = [];
        this.suff[i][suff] = [e];
      }
    }
  });
};

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  let locaPref = this.pref[pref.length];
  let loacSuff = this.suff[suff.length];
  let index = -1;
  for (const key in locaPref) {
    for (const suffKey in loacSuff) {
      let prefWords = locaPref[key];
      let suffWords = loacSuff[suffKey];
      for (const item of prefWords) {
        for (const suffItem of suffWords) {
          if (item === suffItem) {
            index = this.words.indexOf(item);
          }
        }
      }
    }
  }
  return index;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
