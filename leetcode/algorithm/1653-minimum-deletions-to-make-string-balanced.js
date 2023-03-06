/**
 * 1653. 使字符串平衡的最少删除次数
 *
 * 给你一个字符串 s ，它仅包含字符 'a' 和 'b'​​​​ 。
 *
 * 你可以删除 s 中任意数目的字符，使得 s 平衡 。当不存在下标对 (i,j) 满足 i < j ，且 s[i] = 'b' 的同时 s[j]= 'a' ，此时认为 s 是 平衡 的。
 *
 * 请你返回使 s 平衡 的 最少 删除次数。
 * */

/**
 * 就是让a都在左边,b都在右边
 *
 * leftb 表示间隔左侧的“b”的数目,righta表示间隔右侧的“a"的数目,leftb + righta 即为当前划分的间隔下最少需要删除的字符数
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  let leftb = 0,
    righta = 0;
  // a的总数
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      righta++;
    }
  }
  let res = righta;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "a") {
      // 当前划分下有多少个a需要删掉
      righta--;
    } else {
      // 当前划分下有多少个b需要删掉
      leftb++;
    }
    // 遍历一遍就可以,获得最小的数值
    res = Math.min(res, leftb + righta);
  }
  return res;
};
/**
 * 代码非常精妙,
 */