import java.util.Comparator;
import java.util.PriorityQueue;

/**
 * 2558. 从数量最多的堆取走礼物
 * 
 * 给你一个整数数组 gifts ，表示各堆礼物的数量。每一秒，你需要执行以下操作：
 *  * 选择礼物数量最多的那一堆。
 *  * 如果不止一堆都符合礼物数量最多，从中选择任一堆即可。
 *  * 选中的那一堆留下平方根数量的礼物（向下取整），取走其他的礼物。
 *  * 返回在 k 秒后剩下的礼物数量。
 */

class Solution {
    public long pickGifts(int[] gifts, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(k, new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o2 - o1;
            }
        });
        for(int gift: gifts){
            pq.add(gift);
        }
        Long result = 0L;
        for (int i = 0; i < k; i++) {

            int pow =  (int)Math.sqrt(pq.poll());
            pq.add(pow);
        }
        while (!pq.isEmpty()) {
                result+=pq.poll();
        }
        return result;


    }
}

/**
 * 执行用时：5 ms, 在所有 JavaScript 提交中击败了83.65%的用户
 * 内存消耗：39.31 MB, 在所有 JavaScript 提交中击败了47.59%的用户
 */