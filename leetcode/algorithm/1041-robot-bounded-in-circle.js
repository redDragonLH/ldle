/**
 * 1041. 困于环中的机器人
 *
 * 在无限的平面上，机器人最初位于 (0, 0) 处，面朝北方。注意:
 *  * 北方向 是y轴的正方向。
 *  * 南方向 是y轴的负方向。
 *  * 东方向 是x轴的正方向。
 *  * 西方向 是x轴的负方向。
 *
 * 机器人可以接受下列三条指令之一：
 *  * "G"：直走 1 个单位
 *  * "L"：左转 90 度
 *  * "R"：右转 90 度
 *
 * 机器人按顺序执行指令 instructions，并一直重复它们。
 * 只有在平面中存在环使得机器人永远无法离开时，返回 true。否则，返回 false。
 */
/**
 * 可以模拟,但是至少得运行两遍到四遍,保证就算组合循环也可以检测到
 * 
 * 注意位置
 *  * 第一次循环完成后如果是朝北,就不会陷入循环,因为一直往外走
 *  * 如果第一次循环后是位置就是在原点,那没什么好说的了
 *  * 如果第一次循环后面朝南,那么第二次循环就会反向行动,回到原点
 *  * 如果朝东或西,那么在两或四次指令后就会回到原点
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  const direc = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let direcIndex = 0;
  let x = 0,
    y = 0;
  const n = instructions.length;
  for (let i = 0; i < n; i++) {
    let instruction = instructions[i];
    if (instruction === "G") {
      x += direc[direcIndex][0];
      y += direc[direcIndex][1];
    } else if (instruction === "L") {
      direcIndex += 3;
      direcIndex %= 4;
    } else {
      direcIndex++;
      direcIndex %= 4;
    }
  }
  return direcIndex !== 0 || (x === 0 && y === 0);
};
