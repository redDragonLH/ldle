/**
 * 1625. 执行操作后字典序最小的字符串
 *
 * 给你一个字符串 s 以及两个整数 a 和 b 。其中，字符串 s 的长度为偶数，且仅由数字 0 到 9 组成。
 * 你可以在 s 上按任意顺序多次执行下面两个操作之一：
 *  * 累加：将  a 加到 s 中所有下标为奇数的元素上（下标从 0 开始）。数字一旦超过 9 就会变成 0，如此循环往复。例如，s = "3456" 且 a = 5，则执行此操作后 s 变成 "3951"。
 *  * 轮转：将 s 向右轮转 b 位。例如，s = "3456" 且 b = 1，则执行此操作后 s 变成 "6345"。
 * 请你返回在 s 上执行上述操作任意次后可以得到的 字典序最小 的字符串。
 * 如果两个字符串长度相同，那么字符串 a 字典序比字符串 b 小可以这样定义：在 a 和 b 出现不同的第一个位置上，字符串 a 中的字符出现在字母表中的时间早于 b 中的对应字符。例如，"0158” 字典序比 "0190" 小，因为不同的第一个位置是在第三个字符，显然 '5' 出现在 '9' 之前。
 */

/**
 *
 * 先用累加找到最小数据，再用轮转找到最小位置？
 * 累加必须得是大于等于5的才有意义？
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  let result = s;
  let accumulatedStr = s;
  for (let i = 0; i < 10 - a; i++) {
    accumulatedStr = accumulated(accumulatedStr, a);
    console.log(accumulatedStr);

    if (result > accumulatedStr) {
      result = accumulatedStr;
    }
  }
};
var accumulated = (s, a) => {
  const arr = s.split("");
  for (let i = 1; i < arr.length; i += 2) {
    arr[i] = ((parseInt(arr[i]) + a) % 9).toString();
  }
  return arr.join("");
};
/**
 * 累加思路有问题，a 是可变数据
 * 轮转和累加不一定那个在最前
 */

/**
 * 
 * 注意到条件中 s 的长度是偶数，因此如果 b 是偶数，那么无论轮转多少次，我们都只能给 s 中奇数位的元素做累加操作。但如果 b 是奇数的话，我们可以给 s 中奇数位和偶数位的元素都做加法，并且可以做不同的次数。
 * 
 * 从以上可以看出，做累加操作的次数和做轮转操作的次数是互相独立的，做轮转的次数并不会影响到能否对偶数位进行累加。因此我们可以先枚举做轮转的次数，然后再枚举做累加的次数，从而找到字典序最小的答案。
 *
 * 更具体的，我们按照如下步骤进行枚举：

 * 枚举做轮转的次数，然后令 t 为 s 轮转后的字符串。由于轮转最终会产生循环，且至多轮转 n 次（n 为 s 的长度），因此我们用一个数组 vis 来记录每个位置是否被轮转过。如果遇到之前轮转过的位置，则枚举结束。
 * 
 * 对于每个 t，枚举对 t 的奇数位做累加操作的次数 j，再枚举对 t 的偶数位做累加操作的次数 k。这里因为元素值范围是 [0,9]，因此我们做累加操作的次数上限是 9，再多势必会产生循环。特殊的，如果 b 是偶数，则 k 的上限是 0，否则是 9。
 **/

var findLexSmallestString = function (s, a, b) {
  const n = s.length;
  const vis = new Array(n).fill(false);
  let res = s;
  // 每次改数据结构不如重复一遍字符串
  // 将 s 延长一倍，方便截取轮转后的字符串 t
  s = s + s;
  for (let i = 0; !vis[i]; i = (i + b) % n) {
    vis[i] = true;
    for (let j = 0; j < 10; j++) {
      let kLimit = b % 2 === 0 ? 0 : 9;
      for (let k = 0; k <= kLimit; k++) {
        // 获取新字符串进行处理
        // 每次进行累加之前，重新截取 t
        const t = [...s.slice(i, i + n)];
        for (let p = 1; p < n; p += 2) {
          t[p] = String.fromCharCode(
            "0".charCodeAt() +
              ((t[p].charCodeAt() - "0".charCodeAt() + j * a) % 10)
          );
        }
        for (let p = 0; p < n; p += 2) {
          t[p] = String.fromCharCode(
            "0".charCodeAt() +
              ((t[p].charCodeAt() - "0".charCodeAt() + k * a) % 10)
          );
        }
        const tStr = t.join("");
        if (tStr < res) {
          res = tStr;
        }
      }
    }
  }
  return res;
};
/**
 * 执行用时：233 ms, 在所有 JavaScript 提交中击败了30.00%的用户
 * 内存消耗：60.80 MB, 在所有 JavaScript 提交中击败了30.00%的用户
 */