/**
 * 822. 翻转卡片游戏
 *
 * 在桌子上有 N 张卡片，每张卡片的正面和背面都写着一个正数（正面与背面上的数有可能不一样）。
 *
 * 我们可以先翻转任意张卡片，然后选择其中一张卡片。
 *
 * 如果选中的那张卡片背面的数字 X 与任意一张卡片的正面的数字都不同，那么这个数字是我们想要的数字。
 *
 * 哪个数是这些想要的数字中最小的数（找到这些数中的最小值）呢？如果没有一个数字符合要求的，输出 0。
 *
 * 其中, fronts[i] 和 backs[i] 分别代表第 i 张卡片的正面和背面的数字。
 *
 * 如果我们通过翻转卡片来交换正面与背面上的数，那么当初在正面的数就变成背面的数，背面的数就变成正面的数。
 */

/**
 * 这破题~~~
 *
 * 哈希集
 *
 * 如果一张卡片正反两面有相同的数字,那么这张卡片无论怎么翻转,正面都是这个数字,这个数字即不能是最后所选的数字x
 *
 * 按照这个思路,首先遍历所有卡片,如果卡片上的两个数字相同,则加入哈希集合same 中,除此集合外的所有数字,都可以被选做 x,我们只需要再次遍历所有数字,找到最小值即可
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function (fronts, backs) {
  const same = new Set();
  for (let i = 0; i < fronts.length; i++) {
    if (fronts[i] === backs[i]) {
      same.add(fronts[i]);
    }
  }
  // 竟然不是默认的0,不好比较么
  let res = 3000;
  for (let x of fronts) {
    // 不能和排除组里的一样,那还不如排序找最小的不一样的
    if (x < res && !same.has(x)) {
      res = x;
    }
  }
  for (let x of backs) {
    if (x < res && !same.has(x)) {
      res = x;
    }
  }
  return res % 3000;
};
