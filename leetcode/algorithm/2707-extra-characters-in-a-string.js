/**
 * 2707. 字符串中的额外字符
 * 给你一个下标从 0 开始的字符串 s 和一个单词字典 dictionary 。你需要将 s 分割成若干个 互不重叠 的子字符串，每个子字符串都在 dictionary 中出现过。s 中可能会有一些 额外的字符 不在任何子字符串中。
 * 请你采取最优策略分割 s ，使剩下的字符 最少 。
 */

/**
 * 回溯应该是可以处理这个问题的
 * 可以遍历,但是处理数据时不太简便
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary,index) {
  let sLen = s.length;
  for (let i = index+1; i < sLen; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      let LoIndex = s.indexOf(dictionary[j], i);
      if(LoIndex ===i){
        // 把新位置传到方法里,然后从这里处理
        let newPosition = i+dictionary[j].length
        minExtraChar(s,dictionary,newPosition)
      }
    }
  }
};
