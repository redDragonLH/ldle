/**
 * 1652. 拆炸弹
 *
 * 你有一个炸弹需要拆除，时间紧迫！你的情报员会给你一个长度为 n 的 循环 数组 code 以及一个密钥 k 。
 *
 * 为了获得正确的密码，你需要替换掉每一个数字。所有数字会 同时 被替换。
 *  * 如果 k > 0 ，将第 i 个数字用 接下来 k 个数字之和替换。
 *  * 如果 k < 0 ，将第 i 个数字用 之前 k 个数字之和替换。
 *  * 如果 k == 0 ，将第 i 个数字用 0 替换。
 *  * 由于 code 是循环的， code[n-1] 下一个元素是 code[0] ，且 code[0] 前一个元素是 code[n-1] 。
 *
 * 给你 循环 数组 code 和整数密钥 k ，请你返回解密后的结果来拆除炸弹！
 */

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  let len = code.length;
  let result = new Array(len).fill(0); // k===0
  if (k > 0) {
    for (let i = 0; i < len; i++) {
      result[i] = getKsElementSum(code, len, i + 1, k);
    }
  } else if (k < 0) {
    let absK = Math.abs(k);
    for (let i = 0; i < len; i++) {
      result[i] = getprevKsElementSum(code, len, i - 1, k);
    }
  }

  return result;
};

const getKsElementSum = (arr, len, i, k) => {
  let result = 0;
  while (k--) {
    if (i >= len) {
      i = 0;
    }
    result += arr[i++];
  }
  return result;
};

const getprevKsElementSum = (arr, len, i, k) => {
  let result = 0;
  while (k++) {
    if (i < 0) {
      i = len - 1;
    }
    result += arr[i--];
  }
  return result;
};
