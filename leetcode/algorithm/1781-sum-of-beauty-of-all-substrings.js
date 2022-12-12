/**
 * 1781. 所有子字符串美丽值之和
 *
 * 一个字符串的 美丽值 定义为：出现频率最高字符与出现频率最低字符的出现次数之差。
 * *比方说，"abaacc" 的美丽值为 3 - 1 = 2 。
 *
 *给你一个字符串 s ，请你返回它所有子字符串的 美丽值 之和。
 */

/**
 * 得先获得所有的子串,获得子串的算法,用回溯么,回溯或动态规划,必须要保证是连续的
 *
 * 子串: 一个字符串中任意l个连续字符组成的子序列称为该串的子串
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {};

/**
 * 官方题解
 */

var beautySum = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const cnt = new Array(26).fill(0);
    let maxFreq = 0;
    // 双层循环获得所有子串,也是~~,一个在前边走,一个在后边跟
    for (let j = i; j < s.length; j++) {
        // 计算的是总的串的总量吧
        // 不是,上层还有一个循环,在循环之内的作用域初始化的
      cnt[s[j].charCodeAt() - "a".charCodeAt()]++;
      // 获取的是总的串的当前字符的总量
      // 不是总的串
      maxFreq = Math.max(maxFreq, cnt[s[j].charCodeAt() - "a".charCodeAt()]);
      let minFreq = s.length;
      for (let k = 0; k < 26; k++) {
        if (cnt[k] > 0) {
          minFreq = Math.min(minFreq, cnt[k]);
        }
      }
      res += maxFreq - minFreq;
    }
  }
  return res;
};


/**
 * 获取子串 用双层循环
 * 
 * 获取子序列用 回溯 
 * 
 * 子序列:原序列中可以不连续的一段
 */