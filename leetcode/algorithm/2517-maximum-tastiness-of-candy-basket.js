/**
 * 2517. 礼盒的最大甜蜜度
 *
 * 给你一个正整数数组 price ，其中 price[i] 表示第 i 类糖果的价格，另给你一个正整数 k 。
 *
 * 商店组合 k 类 不同 糖果打包成礼盒出售。礼盒的 甜蜜度 是礼盒中任意两种糖果 价格 绝对差的最小值。
 *
 * 返回礼盒的 最大 甜蜜度。
 */

/**
 * 位置不重要,要的是差值,那可以排序,从两头拿?
 * 两头拿不行,得间隔拿,要不然最小甜蜜度就是1了
 * 二分拿是最大的了~
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
  price.sort((a, b) => a - b);
  let left = 0,
    right = price[price.length - 1] - price[0];
  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    if (check(price, k, mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

const check = (price, k, tastiness) => {
  let prev = -Number.MAX_VALUE / 2;
  let cnt = 0;
  for (const p of price) {
    if (p - prev >= tastiness) {
      cnt++;
      prev = p;
    }
  }
  return cnt >= k;
};
