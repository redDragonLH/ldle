/**
 * 593. 有效的正方形
 *
 * 给定2D空间中四个点的坐标 p1, p2, p3 和 p4，如果这四个点构成一个正方形，则返回 true 。
 *
 * 点的坐标 pi 表示为 [xi, yi] 。输入 不是 按任何顺序给出的。
 *
 * 一个 有效的正方形 有四条等边和四个等角(90度角)。
 */

/**
 *
 * 核心就是确认贴边处理四个点,我记得有个算法可以的,但是忘了,不过也可以简单的排序处理,标定从左到右的点
 * 然后判断点之间的距离和角度
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  if (_.isEqual(p1, p2)) {
    return false;
  }
  if (help(p1, p2, p3, p4)) {
    return true;
  }
  if (_.isEqual(p1, p3)) {
    return false;
  }
  if (help(p1, p3, p2, p4)) {
    return true;
  }
  if (_.isEqual(p1, p4)) {
    return false;
  }
  if (help(p1, p4, p2, p3)) {
    return true;
  }
  return false;
};

const help = (p1, p2, p3, p4) => {
  const v1 = [p1[0] - p2[0], p1[1] - p2[1]];
  const v2 = [p3[0] - p4[0], p3[1] - p4[1]];
  if (checkMidPoint(p1, p2, p3, p4) && checkLength(v1, v2) && calCos(v1, v2)) {
    return true;
  }
  return false;
};

const checkLength = (v1, v2) => {
  return v1[0] * v1[0] + v1[1] * v1[1] === v2[0] * v2[0] + v2[1] * v2[1];
};

const checkMidPoint = (p1, p2, p3, p4) => {
  return p1[0] + p2[0] === p3[0] + p4[0] && p1[1] + p2[1] === p3[1] + p4[1];
};

const calCos = (v1, v2) => {
  return v1[0] * v2[0] + v1[1] * v2[1] === 0;
};
