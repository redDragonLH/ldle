/**
 * 1792. 最大平均通过率
 * 一所学校里有一些班级，每个班级里有一些学生，现在每个班都会进行一场期末考试。给你一个二维数组 classes ，其中 classes[i] = [passi, totali] ，表示你提前知道了第 i 个班级总共有 totali 个学生，其中只有 passi 个学生可以通过考试。
 * 给你一个整数 extraStudents ，表示额外有 extraStudents 个聪明的学生，他们 一定 能通过任何班级的期末考。你需要给这 extraStudents 个学生每人都安排一个班级，使得 所有 班级的 平均 通过率 最大 。
 * 一个班级的 通过率 等于这个班级通过考试的学生人数除以这个班级的总人数。平均通过率 是所有班级的通过率之和除以班级数目。
 * 请你返回在安排这 extraStudents 个学生去对应班级后的 最大 平均通过率。与标准答案误差范围在 10-5 以内的结果都会视为正确结果。
 */
/**
 * 由于班级总数不会变化，因此题目所求「最大化平均通过率」等价于「最大化总通过率」。设某个班级的人数为 total，其中通过考试的人数为 pass，那么给这个班级安排一个额外通过考试的学生，其通过率会增加：
 * 通过率增加量 = (pass + 1) / (total + 1) - pass / total = (total - pass) / (total * (total + 1))
 * 优先选择通过率增加量最大的班级，这样做的正确性在于给同一个班级不断地增加安排的学生数量时，其增加的通过率是单调递减的
 * 因此我们可以优先考虑通过率增加量最大的班级，使用优先队列（大根堆）来实现。
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
  const pq = new PriorityQueue((a, b) => {
    const val1 = (b[1] + 1) * b[1] * (a[1] - a[0]);
    const val2 = (a[1] + 1) * a[1] * (b[1] - b[0]);
    return val1 < val2 ? 1 : -1;
  });

  for (const c of classes) {
    pq.enqueue([c[0], c[1]]);
  }

  for (let i = 0; i < extraStudents; i++) {
    const arr = pq.dequeue();
    const pass = arr[0],
      total = arr[1];
    pq.enqueue([pass + 1, total + 1]);
  }

  let res = 0;
  const count = classes.length;
  while (!pq.isEmpty()) {
    const arr = pq.dequeue();
    const pass = arr[0],
      total = arr[1];
    res += pass / total;
  }
  return res / count;
};
/**
 * 首先得使用数学方法总结规律
 * 
 * 执行用时：964 ms, 在所有 JavaScript 提交中击败了16.67%的用户
 * 内存消耗：93.34 MB, 在所有 JavaScript 提交中击败了83.33%的用户
 */