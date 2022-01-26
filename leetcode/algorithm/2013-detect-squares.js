/**
 * 2013. 检测正方形
 *
 * 给你一个在 X-Y 平面上的点构成的数据流。设计一个满足下述要求的算法：
 *  * 添加 一个在数据流中的新点到某个数据结构中。可以添加 重复 的点，并会视作不同的点进行处理。
 *  * 给你一个查询点，请你从数据结构中选出三个点，使这三个点和查询点一同构成一个 面积为正 的 轴对齐正方形 ，统计 满足该要求的方案数目。
 *
 * 轴对齐正方形 是一个正方形，除四条边长度相同外，还满足每条边都与 x-轴 或 y-轴 平行或垂直。
 *
 * 实现 DetectSquares 类：
 *  * DetectSquares() 使用空数据结构初始化对象
 *  * void add(int[] point) 向数据结构添加一个新的点 point = [x, y]
 *  * int count(int[] point) 统计按上述方式与点 point = [x, y] 共同构造 轴对齐正方形 的方案数。
 */

var DetectSquares = function () {
  // 重复数据,用map不会有问题么
  // 理论上当不同的点处理也是同一位置
  this.cnt = new Map();
};

DetectSquares.prototype.add = function (point) {
  const x = point[0],
    y = point[1];
    // 在内部以y为轴构建一个map,在同一y点所在轴的x点放在里面
  if (!this.cnt.has(y)) {
    this.cnt.set(y, new Map());
  }
  const yCnt = this.cnt.get(y);
  yCnt.set(x, (yCnt.get(x) || 0) + 1);
};

DetectSquares.prototype.count = function (point) {
  let res = 0;
  let x = point[0],
    y = point[1];
    // 没有同一y轴上的点那就肯定没有办法组成一个轴对齐正方形 (那以x轴也可以吧)
  if (!this.cnt.has(y)) {
    return 0;
  }
  // 横线
  const yCnt = this.cnt.get(y);
  // 从这里找竖线
  const entries = this.cnt.entries();
  for (const [col, colCnt] of entries) {
      // 一个点就不是正方形了
    if (col !== y) {
      // 根据对称性，这里可以不用取绝对值
      // 横线长度
      let d = col - y;
      // 正方形,横线的长度也是不固定的
      // 所有在找竖线的时候也要确认和处理横线的长度
      // 毕竟都没有限定长度
      res +=
        (colCnt.get(x) || 0) *
        (yCnt.get(x + d) || 0) *
        (colCnt.get(x + d) || 0);
      res +=
        (colCnt.get(x) || 0) *
        (yCnt.get(x - d) || 0) *
        (colCnt.get(x - d) || 0);
    }
  }
  return res;
};
/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
