/**
 * 502. IPO
 *
 * 假设 力扣（LeetCode）即将开始 IPO 。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 由于资源有限，它只能在 IPO 之前完成最多 k 个不同的项目。帮助 力扣 设计完成最多 k 个不同项目后得到最大总资本的方式。
 * 给你 n 个项目。对于每个项目 i ，它都有一个纯利润 profits[i] ，和启动该项目需要的最小资本 capital[i] 。
 * 最初，你的资本为 w 。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。
 * 总而言之，从给定项目中选择 最多 k 个不同项目的列表，以 最大化最终资本 ，并输出最终可获得的最多资本。
 * 答案保证在 32 位有符号整数范围内。
 */

/**
 * 
 * 还是个循环增加资本的~~
 * 利润最大,所需最小,注意是净利润
 * 
 * 官方题解: 堆贪心算法
 *  在不限制次数的情况下,只需将所有的项目按照资本的大小进行排序,进行排序,依次购入项目i,同时手中持有的资本增加 profits[i],直到手中的持有资本无法启动当前项目为止
 * 
 * * 如果初始资本 w >= max(capital),我们直接返回利润中的k个最大元素的和即可
 * * 当前题目中限定了可以选择的次数最多为 k 次,这就意味着应该贪心的保证选择每次投资的项目获取利润最大,这样就能保证选择k次后获取利润最大
 * * 首先将项目按照所需资本 从小到大进行排序,每次进行选择时,假设当前手中持有的资本为w,我们应该从所有投入资本小雨等于w的项目中选择利润最大的项目j,然后
 *  同时更新手中持有的资本为w + profits[j],再从所有花费资本小于等于 w + profits[j]的项目中选择,按照上述规则不断选择k次即可
 * * 理由大根堆的特性,将所有能够投资的项目的利润全部压入到堆中,每次从堆中取出最大值.然后更新手中持有的资本,同时将待选的项目利润直接进堆,不断重复
 */
import java.util.Arrays;
import java.util.PriorityQueue;

class Solution {
    public int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        int n = profits.length;
        int curr = 0;
        int[][] arr = new int[n][2];

        for (int i = 0; i < n; ++i) {
            arr[i][0] = capital[i];
            arr[i][1] = profits[i];
        }
        Arrays.sort(arr, (a, b) -> a[0] - b[0]);

        PriorityQueue<Integer> pq = new PriorityQueue<>((x, y) -> y - x);
        for (int i = 0; i < k; ++i) {
            while (curr < n && arr[curr][0] <= w) {
                pq.add(arr[curr][1]);
                curr++;
            }
            if (!pq.isEmpty()) {
                w += pq.poll();
            } else {
                break;
            }
        }

        return w;
    }
}