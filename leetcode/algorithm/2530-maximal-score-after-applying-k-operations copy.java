
/**
 * 2530. 执行 K 次操作后的最大分数
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。你的 起始分数 为 0 。
 *
 * 在一步 操作 中：
 *  * 选出一个满足 0 <= i < nums.length 的下标 i ，
 *  * 将你的 分数 增加 nums[i] ，并且
 *  * 将 nums[i] 替换为 ceil(nums[i] / 3) 。
 *
 * 返回在 恰好 执行 k 次操作后，你可能获得的最大分数。
 * 向上取整函数 ceil(val) 的结果是大于或等于 val 的最小整数。
 */

import java.util.Comparator;
import java.util.PriorityQueue;

/**
 * 排序找最大值呗,但是随着步骤进行,顺序又被打乱了
 *
 * 大顶堆还是最适合的结构
 */
class Solution {
  public long maxKelements(int[] nums, int k) {
    long result = 0;
    PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>(nums.length, new Comparator<Integer>() {
      @Override
      public int compare(Integer o1, Integer o2) {
        return o2 - o1;
      }
    });
    for (int num : nums) {
      maxHeap.offer(num);
    }
    while (k > 0) {
      Long top = (long) maxHeap.poll();
      result += top;
      maxHeap.add((int) Math.ceil(top / 3.0));
      k--;
    }
    return result;
  }
}
/**
 * 速度很慢
 * 执行用时：125 ms, 在所有 JavaScript 提交中击败了38.37%的用户
 * 内存消耗：58.64 MB, 在所有 JavaScript 提交中击败了5.81%的用户
 */