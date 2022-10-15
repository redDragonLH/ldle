/**
 * 811. 子域名访问计数
 *
 *  网站域名 "discuss.leetcode.com" 由多个子域名组成。顶级域名为 "com" ，二级域名为 "leetcode.com" ，最低一级为 "discuss.leetcode.com" 。
 * 当访问域名 "discuss.leetcode.com" 时，同时也会隐式访问其父域名 "leetcode.com" 以及 "com" 。
 *
 * 计数配对域名 是遵循 "rep d1.d2.d3" 或 "rep d1.d2" 格式的一个域名表示，其中 rep 表示访问域名的次数，d1.d2.d3 为域名本身。
 *  * 例如，"9001 discuss.leetcode.com" 就是一个 计数配对域名 ，表示 discuss.leetcode.com 被访问了 9001 次。
 *
 * 给你一个 计数配对域名 组成的数组 cpdomains ，解析得到输入中每个子域名对应的 计数配对域名 ，并以数组形式返回。可以按 任意顺序 返回答案。
 */
/**
 * 数据结构明晰之后逻辑就简单， 应该用map来映射,最后再转为数组
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  if (!cpdomains.length) return [];
  let mapping = new Map();
  for (const item of cpdomains) {
    // 解析item获取次数与域名
    let [count, address] = item.split(" ");
    mapping.has(address)
      ? mapping.set(address, mapping.get(address) + parseInt(count))
      : mapping.set(address, parseInt(count));
    //获得数量和域名，然后拆分域名
    // 不应该拆分，这是递进的，不是分割的。而且还是从后往前数
    let len = address.length;
    let posi = address.indexOf(".", 0);
    while (posi > -1) {
      let subAddress = address.substring(posi + 1, len);
      mapping.has(subAddress)
        ? mapping.set(subAddress, mapping.get(subAddress) + parseInt(count))
        : mapping.set(subAddress, parseInt(count));
      posi = address.indexOf(".", posi + 1);
    }
  }
  let result = [];
  mapping.forEach((v, k) => {
    result.push(v + " " + k);
  });
  return result;
};

/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了40.82%的用户
 * 内存消耗：44.3 MB, 在所有 JavaScript 提交中击败了95.92%的用户
 */