import java.util.Arrays;
import java.util.PriorityQueue;

/**
 * 630. 课程表 III
 *
 * 这里有 n 门不同的在线课程，按从 1 到 n 编号。给你一个数组 courses ，其中 courses[i] = [durationi,
 * lastDayi] 表示第 i 门课将会 持续 上 durationi 天课，并且必须在不晚于 lastDayi 的时候完成。
 *
 * 你的学期从第 1 天开始。且不能同时修读两门及两门以上的课程。
 *
 * 返回你最多可以修读的课程数目。
 */
class Solution {
  public int scheduleCourse(int[][] courses) {
    // 排序，用最晚完成时间
    Arrays.sort(courses, (a, b) -> a[1] - b[1]);
    //PriorityQueue 使用二叉小顶堆实现
    PriorityQueue<Integer> q = new PriorityQueue<Integer>((a, b) -> b - a);
    // 优先队列中所有课程的总时间
    int total = 0;

    for (int[] course : courses) {
      int ti = course[0], di = course[1];
      // 学习这个课程时间不会超过最后时间
      if (total + ti <= di) {
        total += ti;
        q.offer(ti);
      
      } 
      // 此课程如果超过了最后时间
      // peek() 获取但不删除队首元素
      // 当最小的元素也比课程用时大时
      else if (!q.isEmpty() && q.peek() > ti) {
        // 这里是将队首弹出，把ti插进去
        total -= q.poll() - ti;
        q.offer(ti);
        // 这么暴力的么。就算当前课程比队列最小元素小，那最晚完成时间也可能更早吧
        // 不过根据最上的排序，最晚时间肯定是越来越晚的，而课程持续时间是不确定的
        // 只能说数据要保证队列最小元素减去当前元素要比最后完成时间小，还大的话可能就没有结果了，
      }
    }

    return q.size();
  }
}
/**
 * 
 */