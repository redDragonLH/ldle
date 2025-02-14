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
