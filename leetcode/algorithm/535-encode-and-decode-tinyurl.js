/**
 * 535. TinyURL 的加密与解密
 *
 * TinyURL 是一种 URL 简化服务， 比如：当你输入一个 URL https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk 。请你设计一个类来加密与解密 TinyURL 。
 *
 * 加密和解密算法如何设计和运作是没有限制的，你只需要保证一个 URL 可以被加密成一个 TinyURL ，并且这个 TinyURL 可以用解密方法恢复成原本的 URL 。
 *
 * 实现 Solution 类：
 *  * Solution() 初始化 TinyURL 系统对象。
 *  * String encode(String longUrl) 返回 longUrl 对应的 TinyURL 。
 *  * String decode(String shortUrl) 返回 shortUrl 原本的 URL 。题目数据保证给定的 shortUrl 是由同一个系统对象加密的。
 */

/**
 * 啊哈哈哈哈哈
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  return longUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return longUrl;
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

/**
 * 陷入误区, tiny url并不要求加密等,只是为了减少url长度,也没要求压缩之后必须同等逻辑解压
 * 那么我们就可以用映射表保存数据映射,而映射数据不管是数字id还是自定义hash结果都是一样的
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  const K1 = 1117;
  const K2 = 1000000007;
  this.dataBase = new Map();
  this.urlToKey = new Map();

  if (this.urlToKey.has(longUrl)) {
    return "http://tinyurl.com/" + this.urlToKey.get(longUrl);
  }
  let key = 0;
  let base = 1;
  // 生成hash
  for (let i = 0; i < longUrl.length; i++) {
    const c = longUrl[i];
    key = (key + c * base) % K2;
    base = (base * K1) % K2;
  }
  while (dataBase.has(key)) {
    key = (key + 1) % K2;
  }
  dataBase.set(key, longUrl);
  urlToKey.set(longUrl, key);
  return "http://tinyurl.com/" + key;
};

var decode = function (shortUrl) {
  const p = shortUrl.lastIndexOf("/") + 1;
  const key = parseInt(shortUrl.substring(p));
  return this.dataBase.get(key);
};
