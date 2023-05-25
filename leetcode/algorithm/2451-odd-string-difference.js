/**
 * 2451. 差值数组不同的字符串
 *
 * 给你一个字符串数组 words ，每一个字符串长度都相同，令所有字符串的长度都为 n 。
 *
 * 每个字符串 words[i] 可以被转化为一个长度为 n - 1 的 差值整数数组 difference[i] ，其中对于 0 <= j <= n - 2 有 difference[i][j] = words[i][j+1] - words[i][j] 。注意两个字母的差值定义为它们在字母表中 位置 之差，也就是说 'a' 的位置是 0 ，'b' 的位置是 1 ，'z' 的位置是 25 。
 *  * 比方说，字符串 "acb" 的差值整数数组是 [2 - 0, 1 - 2] = [2, -1] 。
 *
 * words 中所有字符串 除了一个字符串以外 ，其他字符串的差值整数数组都相同。你需要找到那个不同的字符串。
 *
 * 请你返回 words中 差值整数数组 不同的字符串。
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  const start_number = "a".charCodeAt();
  let difference = [];
  for (const word of words) {
    let different = [];
    for (let i = 0; i < word.length - 1; i++) {
      //计算差值数组
      different[i] =
        word[i + 1].charCodeAt() -
        start_number -
        (word[i].charCodeAt() - start_number);
    }
    // 大于2后说明可以找到不同的数组了,
    if (difference.length >= 2) {
      // 没有相等的说明是不同的,直接返回
      if (!difference.includes(different.join(","))) return word;
    }
    difference.push(different.join(","));
    // 改为 == 3 就只会计算内部一次
    // > 2 每次都要计算一下内部,比较亏
    if (difference.length === 3) {
      // 大于2后对比一下前两个与第三个是否有不一样的,有的话直接返回
      // 经过前面的对比,第三个肯定是基础差值
      if (difference[0] != difference[2]) return words[0];
      if (difference[1] != difference[2]) return words[1];
    }
  }
};
/**
 * 优化了最后判断的位置
 * 执行用时：56 ms, 在所有 JavaScript 提交中击败了93.88%的用户
 * 内存消耗：41.3 MB, 在所有 JavaScript 提交中击败了65.31%的用户
 */

/**
 * 最快题解
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    const check = []
    // 遍历
    for (let k = 0; k < words.length; k++) {
        // 从第二个字符开始遍历
        for (let i = 1; i < words[k].length; i++) {
            // 第一个字符串直接怼,但是直接怼到check数组里面
            if (k === 0) {
                check.push(words[k].charCodeAt(i) - words[k].charCodeAt(i - 1))
            }
            else {
                // 以后的字符串每个差值对比,失败的就是不同的,但是前两个由于没有确定哪个是基础差值,所以要特殊处理 
                if (words[k].charCodeAt(i) - words[k].charCodeAt(i - 1) !== check[i -1]) {
                    if (k === 1) {
                        // 和第三个对比~~~
                        if (words[2].charCodeAt(i) - words[2].charCodeAt(i - 1) !== check[i -1]) return words[0]
                        else return words[1]
                    } else return words[k]
                }
            }
        }
    }
};