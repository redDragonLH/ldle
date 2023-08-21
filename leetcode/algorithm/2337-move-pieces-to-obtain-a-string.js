/**
 * 2337. 移动片段得到字符串
 *
 * 给你两个字符串 start 和 target ，长度均为 n 。每个字符串 仅 由字符 'L'、'R' 和 '_' 组成，其中：
 *
 * 字符 'L' 和 'R' 表示片段，其中片段 'L' 只有在其左侧直接存在一个 空位 时才能向 左 移动，而片段 'R' 只有在其右侧直接存在一个 空位 时才能向 右 移动。
 * 字符 '_' 表示可以被 任意 'L' 或 'R' 片段占据的空位。
 * 如果在移动字符串 start 中的片段任意次之后可以得到字符串 target ，返回 true ；否则，返回 false 。
 */

/**
 * 去掉 _ 后LR组成的字符串相等,_ 数量一样
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  let del_start = start.split("_").join("");
  let del_target = target.split("_").join("");
  console.log(del_start, del_target);
  if (del_start !== del_target) return false;

  let start_num = 0;
  let target_num = 0;
  for (let i = 0; i < start.length; i++) {
    if (start[i] === "_") {
      start_num++;
    }
    if (target[i] === "_") {
      target_num++;
    }
  }
  console.log(start_num, target_num);

  if (start_num === target_num) return true;
  return false;
};
/**
 * 失败,还是要考虑左右移动的问题
 */

/**
 * 官方题解 双指针
 * 
 * 既然可以排列说明不止一种方案,所以可以自己排列检查是否可以成功
 * @param {*} start 
 * @param {*} target 
 * @returns 
 */
var canChange = function (start, target) {
  const n = start.length;
  let i = 0,
    j = 0;
  while (i < n && j < n) {
    while (i < n && start[i] === "_") {
      i++;
    }
    while (j < n && target[j] === "_") {
      j++; 
    }
    if (i < n && j < n) {
      if (start[i] !== target[j]) {
        return false;
      }
      const c = start[i];
      if ((c === "L" && i < j) || (c === "R" && i > j)) {
        return false;
      }
      i++;
      j++;
    }
  }
  while (i < n) {
    if (start[i] !== "_") {
      return false;
    }
    i++;
  }
  while (j < n) {
    if (target[j] !== "_") {
      return false;
    }
    j++;
  }
  return true;
};
