/**
 * 3074. 重新分装苹果
 *
 * 给你一个长度为 n 的数组 apple 和另一个长度为 m 的数组 capacity 。
 * 一共有 n 个包裹，其中第 i 个包裹中装着 apple[i] 个苹果。同时，还有 m 个箱子，第 i 个箱子的容量为 capacity[i] 个苹果。
 * 请你选择一些箱子来将这 n 个包裹中的苹果重新分装到箱子中，返回你需要选择的箱子的 最小 数量。
 * 注意，同一个包裹中的苹果可以分装到不同的箱子中。
 */
/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {
  let appleSum = apple.reduce((acc, val) => acc + val, 0);
  capacity.sort((a, b) => b - a);
  for (let i = 0; i < capacity.length; i++) {
    appleSum -= capacity[i];
    if (appleSum <= 0) {
      return i + 1;
    }
  }
  return capacity.length;
};
/**
 * 执行用时 :2 ms, 在所有 JavaScript 提交中击败了37.50%的用户
 * 内存消耗 :50.10 MB, 在所有 JavaScript 提交中击败了27.50%的用户
 */