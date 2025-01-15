import java.util.PriorityQueue;

/**
 * 3066. 超过阈值的最少操作数 II
 *
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。
 * 一次操作中，你将执行：
 * * 选择 nums 中最小的两个整数 x 和 y 。
 * * 将 x 和 y 从 nums 中删除。
 * * 将 min(x, y) * 2 + max(x, y) 添加到数组中的任意位置。
 * 注意，只有当 nums 至少包含两个元素时，你才可以执行以上操作。
 * 你需要使数组中的所有元素都大于或等于 k ，请你返回需要的 最少 操作次数。
 */
class Solution {
    public int minOperations(int[] nums, int k) {
        int res = 0;
        PriorityQueue<Long> pq = new PriorityQueue<>();
        for (long num : nums) {
            pq.offer(num);
        }
        while (pq.peek() < k) {
            long x = pq.poll(), y = pq.poll();
            pq.offer(x + x + y);
            res++;
        }
        return res;
    }
}
/**
 * 最小堆
 * js还得自己写最小堆~~
 */