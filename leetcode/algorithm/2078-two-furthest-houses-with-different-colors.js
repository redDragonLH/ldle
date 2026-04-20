/**
 * 2078. 两栋颜色不同且距离最远的房子
 *
 * 街上有 n 栋房子整齐地排成一列，每栋房子都粉刷上了漂亮的颜色。给你一个下标从 0 开始且长度为 n 的整数数组 colors ，其中 colors[i] 表示第  i 栋房子的颜色。
 * 返回 两栋 颜色 不同 房子之间的 最大 距离。
 * 第 i 栋房子和第 j 栋房子之间的距离是 abs(i - j) ，其中 abs(x) 是 x 的绝对值。
 */
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let max = 0;
  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[i] !== colors[j]) {
        max = Math.max(max, j - i);
      }
    }
  }
  return max;
};
/**
 * 暴力解法
 * 执行用时 : 3 ms, 在所有 JavaScript 提交中击败了 9.09% 的用户
 * 内存消耗 : 56.12 MB, 在所有 JavaScript 提交中击败了 9.09% 的用户
 */
/**
 * 双指针也可以解决吧
 * @param {*} colors
 */
var maxDistance = function (colors) {
  let left = 0;
  let right = colors.length - 1;
  let max = 0;
  while (left < right) {
    if (colors[left] !== colors[right]) {
      max = Math.max(max, right - left);
    }
    if (colors[left] === colors[right]) {
      right--;
    } else {
      left++;
    }
  }
  left = 0;
  right = colors.length - 1;
  while (left < right) {
    if (colors[left] !== colors[right]) {
      max = Math.max(max, right - left);
    }
    if (colors[left] === colors[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
/**
 * 双指针也得遍历两次才行
 * 执行用时 : 2 ms, 在所有 JavaScript 提交中击败了 18.18% 的用户
 * 内存消耗 : 54.30 MB, 在所有 JavaScript 提交中击败了 18.18% 的用户
 */
/**
 * https://leetcode.cn/problems/two-furthest-houses-with-different-colors/solutions/1113521/on-zuo-fa-by-endlesscheng-an8b/?envType=daily-question&envId=2026-03-16
 * 引入三四变量,只要两端是一样的那就从两边找不一样的颜色然后计算距离
 * @param {*} colors 
 * @returns 
 */
var maxDistance = function (colors) {
  const n = colors.length;
  const c = colors[0];
  if (c !== colors[n - 1]) {
    return n - 1;
  }

  // 找最右边的颜色不等于 c 的房子
  // 题目保证至少有两栋颜色不同的房子
  let r = n - 2;
  while (colors[r] === c) {
    r--;
  }

  // 找最左边的颜色不等于 c 的房子
  let l = 1;
  while (colors[l] === c) {
    l++;
  }

  return Math.max(r, n - 1 - l);
};
