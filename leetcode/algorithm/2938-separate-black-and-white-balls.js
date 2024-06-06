/**
 * 2938. 区分黑球与白球
 *
 * 桌子上有 n 个球，每个球的颜色不是黑色，就是白色。
 * 给你一个长度为 n 、下标从 0 开始的二进制字符串 s，其中 1 和 0 分别代表黑色和白色的球。
 * 在每一步中，你可以选择两个相邻的球并交换它们。
 * 返回「将所有黑色球都移到右侧，所有白色球都移到左侧所需的 最小步数」。
 */
/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
  let len = s.length;
  let result = 0;
  let left = 0;
  let right = s.length;
  while (len--) {
    // 我的思路是从两边遍历,找到位置不对的就对比正确的位置,然后计算错误位置到正确位置的步数,
    // 加到结果上,但是有个问题,这是交换行为,所以白球正确的位置,黑球不一定正确,而且一次交换黑球和白球都动了,这样计算就是错误的
  }
};

/**
 * 官方题解
 * @param {*} s 
 * @returns 
 */
var minimumSteps = function(s) {
    var ans = 0;
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            sum++;
        } else {
            ans += sum;
        }
    }
    return ans;
};
/**
 * 官方题解就考虑到了这个问题,黑动,白也动,所以只要计算白球的位置,然后计算白球到正确位置的步数,就是结果了
 * 如此简单~
 */