/**
 * 1488. 避免洪水泛滥
 *
 * 你的国家有无数个湖泊，所有湖泊一开始都是空的。当第 n 个湖泊下雨前是空的，那么它就会装满水。如果第 n 个湖泊下雨前是 满的 ，这个湖泊会发生 洪水 。你的目标是避免任意一个湖泊发生洪水。
 * 给你一个整数数组 rains ，其中：
 *  * rains[i] > 0 表示第 i 天时，第 rains[i] 个湖泊会下雨。
 *  * rains[i] == 0 表示第 i 天没有湖泊会下雨，你可以选择 一个 湖泊并 抽干 这个湖泊的水。
 *
 * 请返回一个数组 ans ，满足：
 *  * ans.length == rains.length
 *  * 如果 rains[i] > 0 ，那么ans[i] == -1 。
 *  * 如果 rains[i] == 0 ，ans[i] 是你第 i 天选择抽干的湖泊。
 *
 * 如果有多种可行解，请返回它们中的 任意一个 。如果没办法阻止洪水，请返回一个 空的数组 。
 * 请注意，如果你选择抽干一个装满水的湖泊，它会变成一个空的湖泊。但如果你选择抽干一个空的湖泊，那么将无事发生。
 */

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeSet;

/**
 * @param {number[]} rains
 * @return {number[]}
 */
class Solution {
    public int[] avoidFlood(int[] rains) {
        int[] ans = new int[rains.length];
        Arrays.fill(ans, 1);
        // 创建一个默认排列的元素,从小到大
        TreeSet<Integer> st = new TreeSet<Integer>();
        // Map
        Map<Integer, Integer> mp = new HashMap<Integer, Integer>();

        for (int i = 0; i < rains.length; ++i) {
            // 会下雨,放到队列中,并且排队
            if (rains[i] == 0) {
                st.add(i);
            } else {
                // 会下雨,今天不能抽水,所以是 -1 
                ans[i] = -1;
                // 检查当前湖泊是否有水
                if (mp.containsKey(rains[i])) {
                    Integer it = st.ceiling(mp.get(rains[i]));
                    // 空为啥后返回失败
                    if (it == null) {
                        return new int[0];
                    }
                    ans[it] = rains[i];
                    st.remove(it);
                }
                // rains[i] 第i天第rains[i]个湖泊会下雨
                mp.put(rains[i], i);
            }
        }
        return ans;
    }
}