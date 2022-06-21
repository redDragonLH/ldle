/**
 * 1108. IP 地址无效化
 *
 * 给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。
 *
 * 所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。
 */
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};
/**
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了60.61%的用户
 * 内存消耗：40.5 MB, 在所有 JavaScript 提交中击败了96.21%的用户
 */
var defangIPaddr = function (address) {
  let result = "";
  let len = address.length;
  for (let i = 0; i < len; i++) {
    if (address[i] !== ".") {
      result += address[i];
    } else {
      result += "[.]";
    }
  }
  return result;
};

/**
 * 执行用时：60 ms, 在所有 JavaScript 提交中击败了60.61%的用户
 * 内存消耗：41 MB, 在所有 JavaScript 提交中击败了28.79%的用户
 */

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  const address1 = address.split(".");
  return address1.join("[.]");
};
