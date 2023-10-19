/**
 * 1726. 同积元组
 *
 * 给你一个由 不同 正整数组成的数组 nums ，请你返回满足 a * b = c * d 的元组 (a, b, c, d) 的数量。其中 a、b、c 和 d 都是 nums 中的元素，且 a != b != c != d 。
 */
/**
 * 前缀和?但是要怎么保证元素不重复,毕竟顺序是乱的
 * 如果有一组是满足条件的,那么按照交换律,就能生成四组满足条件的
 *
 * @param {number[]} nums
 * @return {number}
 */
let reslultMapp = new Map();

var tupleSameProduct = function (nums) {
  let reslult = 0;
  let len = nums.length;
  let mapping = new Map();
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (i != j) {
        let current = mapping.get(nums[i] * nums[j]) || [];
        mapping.set(nums[i] * nums[j], [...current, [i, j]]);
      }
    }
  }
  // 统一计算消耗大.逻辑复杂
  mapping.forEach((value, k) => {
    if (reslultMapp.has(value.length)) {
      reslult += reslultMapp.get(value.length);
      return true;
    }

    if (value.length > 1) {
      let count = parseInt(
        (factorial(value.length) / (2 * factorial(value.length - 2))) * 8
      );
      reslult += count;
      reslultMapp.set(value.length, count);
    }
  });
  return reslult;
};
let fMapping = new Map();
function factorial(n) {
  if (fMapping.has(n)) return fMapping.get(n);
  if (0 === n) {
    return 1;
  }
  let res = 1;
  for (let i = 1; i <= n; ++i) {
    res *= i;
  }
  fMapping.set(n, res);
  return res;
}
/**
 * 前缀和maping
 * 给阶乘方法添加缓存并没有减少时间
 * 增加结果缓存也没有减少时间
 * 那耗时都在哪里?
 * 执行用时：1880 ms, 在所有 JavaScript 提交中击败了7.14%的用户
 * 内存消耗：204.75 MB, 在所有 JavaScript 提交中击败了7.14%的用户
 */

/**
 * 最快题解
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  const hash = new Map();
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    // 这里保证位置不会出现重复
    for (let j = i + 1; j < n; j++) {
      const product = nums[i] * nums[j];
      if (hash.has(product)) {
        // 核心在这里
        // 哦,这是没步计算都不同的,他拆掉了统一的计算,而是分开了
        // 比如 
        // 第一次遇到这个结果,has就是fals
        // 2. true => 8* 1 =>reuslt+=
        // 3. true =>8*2 =>reuslt+=
        // 每多一个就重新计算一遍,因为其中一边是新出现的对,所以不可能会出现计算重复
        ans += 8 * hash.get(product);
      }
      hash.set(product, (hash.get(product) || 0) + 1);
    }
  }
  return ans;
};
