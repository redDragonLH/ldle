/**
 * 2560. 打家劫舍 IV
 *
 * 沿街有一排连续的房屋。每间房屋内都藏有一定的现金。现在有一位小偷计划从这些房屋中窃取现金。
 *
 * 由于相邻的房屋装有相互连通的防盗系统，所以小偷 不会窃取相邻的房屋 。
 *
 * 小偷的 窃取能力 定义为他在窃取过程中能从单间房屋中窃取的 最大金额 。
 *
 * 给你一个整数数组 nums 表示每间房屋存放的现金金额。形式上，从左起第 i 间房屋中放有 nums[i] 美元。
 *
 * 另给你一个整数 k ，表示窃贼将会窃取的 最少 房屋数。小偷总能窃取至少 k 间房屋。
 *
 * 返回小偷的 最小 窃取能力。
 */
/**
 * 不是求总数啥的
 * 也就是获取从所有房屋中窃取K间房屋的金额的最大值的最小值，不是求已获取的k间房屋的最小值
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let lower = Math.min(...nums); // 最小值
  let upper = Math.max(...nums); // 最大值
  while (lower <= upper) {
    // 中间值，可能不在nums里面
    const middle = Math.floor((lower + upper) / 2);
    let count = 0;
    let visited = false; // 判断间隔的逻辑
    // 遍历所有
    for (const x of nums) {
        // 前一个没动过的话就进去处理程序
      if (x <= middle && !visited) {
        count++;
        visited = true;
      } else {
        // 需要间隔处理
        visited = false;
      }
    }
    // 数量到了就清空旧数据，但是按照上一次的最大最小值开始
    if (count >= k) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return lower;
};
