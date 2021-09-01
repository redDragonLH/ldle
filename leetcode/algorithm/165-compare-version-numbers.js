/**
 * 165. 比较版本号
 *
 * 给你两个版本号 version1 和 version2 ，请你比较它们。
 *
 * 版本号由一个或多个修订号组成，各修订号由一个 '.' 连接。每个修订号由 多位数字 组成，可能包含 前导零 。每个版本号至少包含一个字符。
 * 修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如，2.5.33 和 0.1 都是有效的版本号。
 *
 * 比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较 忽略任何前导零后的整数值 。也就是说，修订号 1 和修订号 001 相等 。
 * 如果版本号没有指定某个下标处的修订号，则该修订号视为 0 。例如，版本 1.0 小于版本 1.1 ，因为它们下标为 0 的修订号相同，而下标为 1 的修订号分别为 0 和 1 ，0 < 1 。
 *
 * 返回规则如下：
 *  * 如果 version1 > version2 返回 1，
 *  * 如果 version1 < version2 返回 -1，
 *  * 除此之外返回 0。
 */
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  version1 = version1.split(".");
  version2 = version2.split(".");
  console.log(version1, version2);
  let i = 0,
    len1 = version1.length,
    len2 = version2.length;
  let len = len1 > len2 ? len2 : len1;
  for (i = 0; i < len; i++) {
    let int1 = parseInt(version1[i]),
      int2 = parseInt(version2[i]);
    if (int1 > int2) {
      return 1;
    } else if (int1 < int2) {
      return -1;
    }
  }
  // 没有解决 1.0 和1.0.0的问题
  if (len1 === len2) {
    return 0;
  } else if (len1 === len) {
    return 1;
  } else {
    return -1;
  }
};

/**
 * 把所有数字相加然后对比可不可以,这样的话就得考虑小数点位置了
 *
 * 依据小数点从左往右数字权重依次递减
 */
var compareVersion = function (version1, version2) {
  let count1 = 0,
    count2 = 0;
  let pos = 0.1;
  version1.split(".").map((e) => {
    pos *= 10;
    count1 += parseFloat(e) / pos;
  });
  pos = 0.1;
  version2.split(".").map((e) => {
    pos *= 10;
    count2 += parseFloat(e) / pos;
  });
  if (count1 === count2) {
    return 0;
  } else if (count1 > count2) {
    return 1;
  } else {
    return -1;
  }
};

/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了89.97%的用户
 * 内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了36.44%的用户
 */

/**
 * 官方题解双指针法
 * 
 * 官方题解的目标是不全部处理,只要处理到数值不同,立即返回
 */
var compareVersion = function (version1, version2) {
  const n = version1.length,
    m = version2.length;
  let i = 0,
    j = 0;
  while (i < n || j < m) {
    let x = 0;
    for (; i < n && version1[i] !== "."; ++i) {
      x = x * 10 + version1[i].charCodeAt() - "0".charCodeAt();
    }
    ++i; // 跳过点号
    let y = 0;
    for (; j < m && version2.charAt(j) !== "."; ++j) {
      y = y * 10 + version2[j].charCodeAt() - "0".charCodeAt();
    }
    ++j; // 跳过点号
    if (x !== y) {
      return x > y ? 1 : -1;
    }
  }
  return 0;
};
