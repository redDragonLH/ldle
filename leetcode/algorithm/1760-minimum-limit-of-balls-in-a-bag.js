/**
 * 1760. 袋子里最少数目的球
 *
 * 给你一个整数数组 nums ，其中 nums[i] 表示第 i 个袋子里球的数目。同时给你一个整数 maxOperations 。
 *
 * 你可以进行如下操作至多 maxOperations 次：
 *  * 选择任意一个袋子，并将袋子里的球分到 2 个新的袋子中，每个袋子里都有 正整数 个球。
 *  *  * 比方说，一个袋子里有 5 个球，你可以把它们分到两个新袋子里，分别有 1 个和 4 个球，或者分别有 2 个和 3 个球。
 *
 * 你的开销是单个袋子里球数目的 最大值 ，你想要 最小化 开销。
 *
 * 请你返回进行上述操作后的最小开销。
 */

/**
 * 题目有些令人迷糊~~,
 *
 * 核心应该是找到最大值,然后分割成两个值,最后的结果让最大值尽量小
 * 注意是不能放到旧袋子里的,那就是找到最大值,然后分,在找最大值分么
 *
 * 二分必须保证数组有序吧
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  let left = 1,
    right = _.max(nums); // 找到最大值
  let ans = 0;
  // left 比 right 小于等于才能继续
  // 经典二分判断条件
  while (left <= right) {
    // 找到中间数,整数
    const y = Math.floor((left + right) / 2);
    let ops = 0;
    // 遍历 nums 
    for (const x of nums) {
        // 查看每个数字总共比中间数多多少, 错误
        // 这应该是比例
      ops += Math.floor((x - 1) / y);
    }
    // 如果ops 小于maxOperations
    if (ops <= maxOperations) {
      ans = y;
      right = y - 1;
    } else {
      left = y + 1;
    }
  }
  return ans;
};
