/**
 * 2731. 移动机器人
 * 
 * 有一些机器人分布在一条无限长的数轴上，他们初始坐标用一个下标从 0 开始的整数数组 nums 表示。当你给机器人下达命令时，它们以每秒钟一单位的速度开始移动。
 * 给你一个字符串 s ，每个字符按顺序分别表示每个机器人移动的方向。'L' 表示机器人往左或者数轴的负方向移动，'R' 表示机器人往右或者数轴的正方向移动。
 * 当两个机器人相撞时，它们开始沿着原本相反的方向移动。
 * 请你返回指令重复执行 d 秒后，所有机器人之间两两距离之和。由于答案可能很大，请你将答案对 109 + 7 取余后返回。
 * 
 * 注意：

 *  * 对于坐标在 i 和 j 的两个机器人，(i,j) 和 (j,i) 视为相同的坐标对。也就是说，机器人视为无差别的。
 *  * 当机器人相撞时，它们 立即改变 它们的前进方向，这个过程不消耗任何时间。
 *  * 当两个机器人在同一时刻占据相同的位置时，就会相撞。
 *  *  * 例如，如果一个机器人位于位置 0 并往右移动，另一个机器人位于位置 2 并往左移动，下一秒，它们都将占据位置 1，并改变方向。再下一秒钟后，第一个机器人位于位置 0 并往左移动，而另一个机器人位于位置 2 并往右移动。
 *  *  * 例如，如果一个机器人位于位置 0 并往右移动，另一个机器人位于位置 1 并往左移动，下一秒，第一个机器人位于位置 0 并往左行驶，而另一个机器人位于位置 1 并往右移动。
 */

/**
 * 直观思路比较简单,先按时间计算位置,然后计算和,但是一个点可能存在两个元素,这些条件加剧复杂度,方向也会改变,
 * 这个思路就很好,撞了等于穿过去,方向不变,交换元素,这样 nums就要交换元素了吧,不需要而且直接单独计算就可以,不用一步一步计算
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function (nums, s, d) {
  const mod = 1e9 + 7;
  let len = s.length;

  for (let i = 0; i < len; i++) {
    if (s[i] === "L") {
      nums[i] = nums[i] - d;
    } else {
      nums[i] += d;
    }
  }
  nums.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      result = (result + nums[i] - nums[j]) % mod;
    }
  }
  return result;
};
/**
 * 超出时间限制
 */

var sumDistance = function(nums, s, d) {
    const mod = 1e9 + 7;
    n = nums.length;
    pos = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        pos[i] = s[i] === 'L' ? nums[i] - d : nums[i] + d;
    }
    pos.sort((a, b) => a - b);
    let res = 0;
    // 单层循环就够吗?
    // 有向图之中有累加规则
    for (let i = 1; i < n; i++) {
        res += (pos[i] - pos[i - 1]) * i % mod * (n - i) % mod;
        res %= mod;
    }
    return res;
};
