/**
 * 2325. 解密消息
 * 
 * 给你字符串 key 和 message ，分别表示一个加密密钥和一段加密消息。解密 message 的步骤如下：

 * 使用 key 中 26 个英文小写字母第一次出现的顺序作为替换表中的字母 顺序 。
 * 将替换表与普通英文字母表对齐，形成对照表。
 * 按照对照表 替换 message 中的每个字母。
 * 空格 ' ' 保持不变。
 *  * 例如，key = "happy boy"（实际的加密密钥会包含字母表中每个字母 至少一次），据此，可以得到部分对照表（'h' -> 'a'、'a' -> 'b'、'p' -> 'c'、'y' -> 'd'、'b' -> 'e'、'o' -> 'f'）。
 * 返回解密后的消息。
 */

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let mapping = new Array();
  let kenLen = key.length;
  for (let i = 0; i < kenLen; i++) {
    if (key[i] !== " " && !mapping.includes(key[i])) {
      mapping.push(key[i]);
    }
  }
  let result = "";
  let mLen = message.length;
  for (let i = 0; i < mLen; i++) {
    if (message[i] == " ") {
      result += " ";
    } else {
      result += String.fromCharCode(mapping.indexOf(message[i]) + 97);
    }
  }
  return result;
};
/**
 * hash 映射
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了13.33%的用户
 * 内存消耗：43.7 MB, 在所有 JavaScript 提交中击败了37.78%的用户
 */

/**
 * 最高效率代码
 */
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    // Uint8Array : 一个 8 位无符号整型数组
    const n = key.length, hashMap = new Uint8Array(26)
    for (let i = 0, charCode = 97; i < n; i++) {
      if (hashMap[key.charCodeAt(i) - 97] === 32 || hashMap[key.charCodeAt(i) - 97] !== 0) continue
      hashMap[key.charCodeAt(i) - 97] = charCode++
    }
    const m = message.length, r = []
    for (let i = 0; i < m; i++) {
      r.push(message.charCodeAt(i) === 32 ? 32 : hashMap[message.charCodeAt(i) - 97])
    }
    return String.fromCharCode(...r)
  };