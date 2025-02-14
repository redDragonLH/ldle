/**
 * 1552. 两球之间的磁力
 *
 * 在代号为 C-137 的地球上，Rick 发现如果他将两个球放在他新发明的篮子里，它们之间会形成特殊形式的磁力。Rick 有 n 个空的篮子，第 i 个篮子的位置在 position[i] ，Morty 想把 m 个球放到这些篮子里，使得任意两球间 最小磁力 最大。
 * 已知两个球如果分别位于 x 和 y ，那么它们之间的磁力为 |x - y| 。
 * 给你一个整数数组 position 和一个整数 m ，请你返回最大化的最小磁力。
 */

/**
 * 起手就是阅读理解.
 * 意思应该是两个球之间的距离最小值最大.
 * 绕口令啊~~
 *
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  position.sort((a, b) => a - b);
  let left = 1;
  let right = position[position.length - 1] - position[0];
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (check(position, m, mid)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left - 1;
};
var check = function (position, m, mid) {
  let count = 1;
  let last = position[0];
  for (let i = 1; i < position.length; i++) {
    if (position[i] - last >= mid) {
      last = position[i];
      count++;
    }
  }
  return count >= m;
};
/**
 * AI解法,失败,也不是很行啊
 */

/**
 * 那就得是平均分,二分法怎么平均分呢,按照篮子?
 * 两头先放,然后怎么办?
 *
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    position.sort((x, y) => x - y);
    // 初始化左右边界和结果
    let left = 1, right = position[position.length - 1] - position[0], ans = -1;
    // 二分查找
    while (left <= right) {
        // 中间值
        const mid = Math.floor((left + right) / 2); 
        // 判断是否满足条件
        if (check(mid, position, m)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};
/**
 * 
 * @param {*} x 起点
 * @param {*} position 篮子
 * @param {*} m 球数
 * @returns 
 */
const check = (x, position, m) => {
    let pre = position[0], cnt = 1;
    // 遍历篮子
    for (let i = 1; i < position.length; ++i) {
        // 如果当前位置减去上一个位置大于等于x
        // 查找的是整个篮子数组是否能分割m个距离
        if (position[i] - pre >= x) {
            pre = position[i];
            cnt += 1;
        }
    }
    // 大于m说明能分割的下
    return cnt >= m;
}
/**
 * 有一个核心逻辑和问题,就是均分,而均分的分割就是小球数,小球间隔必须是大于小球数的,否则间隔就是0了,
 * 这样二分的起步和步进就有了,就是小球数
 * 
 * 还是有点没有理解这个逻辑,二分查找的到底是什么,满足的条件意义是什么,
 */