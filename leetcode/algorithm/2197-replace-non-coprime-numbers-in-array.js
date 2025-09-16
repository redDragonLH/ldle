/**
 * 2197. 替换数组中的非互质数
 *
 * 给你一个整数数组 nums 。请你对数组执行下述操作：
 * 1. 从 nums 中找出 任意 两个 相邻 的 非互质 数。
 * 2. 如果不存在这样的数，终止 这一过程。
 * 3. 否则，删除这两个数，并 替换 为它们的 最小公倍数（Least Common Multiple，LCM）。
 * 4. 只要还能找出两个相邻的非互质数就继续 重复 这一过程。
 * 返回修改后得到的 最终 数组。可以证明的是，以 任意 顺序替换相邻的非互质数都可以得到相同的结果。
 * 生成的测试用例可以保证最终数组中的值 小于或者等于 108 。
 * 两个数字 x 和 y 满足 非互质数 的条件是：GCD(x, y) > 1 ，其中 GCD(x, y) 是 x 和 y 的 最大公约数 。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function (nums) {
  // 辅助函数：计算最大公约数
  const gcd = (a, b) => {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };
  // 辅助函数：计算最小公倍数
  const lcm = (a, b) => (a * b) / gcd(a, b);

  const stack = [];
  // 使用栈来处理相邻的非互质数
  // 非常巧妙
  for (const num of nums) {
    stack.push(num);
    while (stack.length > 1) {
      const a = stack[stack.length - 2];
      const b = stack[stack.length - 1];
      if (gcd(a, b) > 1) {
        stack.pop();
        stack.pop();
        stack.push(lcm(a, b));
      } else {
        break;
      }
    }
  }
  return stack;
};
/**
 * 执行用时：81 ms, 在所有 JavaScript 提交中击败了20.00%的用户
 * 内存消耗：79.90 MB, 在所有 JavaScript 提交中击败了70.00%的用户
 */
