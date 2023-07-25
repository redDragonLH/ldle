/**
 * 2208. 将数组和减半的最少操作次数
 *
 * 给你一个正整数数组 nums 。每一次操作中，你可以从 nums 中选择 任意 一个数并将它减小到 恰好 一半。（注意，在后续操作中你可以对减半过的数继续执行操作）
 *
 *请你返回将 nums 数组和 至少 减少一半的 最少 操作数。
 */
/**
 *  减少一半,那么就排序,从大到小减.
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
  let len = nums.length;
  if (!len) return 0;
  const amount = nums.reduce((c, a) => c + a, 0) / 2;
  let half_amount = 0;
  nums.sort((a, b) => a - b);
  console.log(nums, amount);
  let index = 0;
  let times = 0;
  while (true) {
    times++;
    // 最保险是每次排序,那就有点蛋疼了
    // 或者最新的和最开头的进行对比,看用哪个,也有点麻烦
    // 或者大顶堆
    let half = nums[index] / 2;
    half_amount += half;
    if (half_amount >= amount) {
      return times;
    }
    nums[index] = half;
    if (nums[index] < nums[index + 1]) {
        index++
    }
    if (len <= index) {
      index = 0;
    }
  }
};

/**
 * 官方题解 优先队列
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function(nums) {
    // 哪来的~~
    // 6
    const pq = new MaxPriorityQueue();
    for (const num of nums) {
        pq.enqueue(num);
    }
    let res = 0;
    let sum1 = nums.reduce((acc, curr) => acc + curr, 0);
    let sum2 = 0;
    while (sum2 < sum1 / 2) {
        const x = pq.dequeue().element;
        sum2 += x / 2;
        pq.enqueue(x / 2);
        res++;
    }
    return res;
};
