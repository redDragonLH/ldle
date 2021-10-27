/**
 * 301. 删除无效的括号
 *
 * 给你一个由若干括号和字母组成的字符串 s ，删除最小数量的无效括号，使得输入的字符串有效。
 *
 * 返回所有可能的结果。答案可以按 任意顺序 返回。
 */

/**
 * 首先,我就没理解能有多个的情况~~
 *      这个问题是虽然可以能有多个,但是都是删除同一方向的括号,位置不一样而已
 * 那么解决思路就是找到有问题的位置,但是可能多个么
 *
 * 官方思路:
 *  首先通过计数找到多余的左括号或右括号的数量(不检查位置问题,估计与位置也无关吧),这多余的数量就是可以去除的最小数量
 *
 * 获得了数量,就可以开始确定位置,最简单直接的方法就是回溯法,也就是遍历所有可能性
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    // 回溯算法的核心,遍历
    // 传入位置使之不需要从头开始导致死循环和浪费
    // 好久没写,递归都忘了怎么写了
  const helper = (str, start, lcount, rcount, lremove, rremove) => {
    if (lremove === 0 && rremove === 0) {
      if (isValid(str)) {
        res.push(str);
      }
      // 此递归停止运行,不管是不是成功
      return;
    }

    for (let i = start; i < str.length; i++) {
        // 当当前括号和前一个括号相等时则跳过,因为结果是一样的吗
      if (i !== start && str[i] === str[i - 1]) {
        continue;
      }
      // 如果剩余的字符无法满足去掉的数量要求，直接返回
      if (lremove + rremove > str.length - i) {
        return;
      }
      // 尝试去掉一个左括号
      if (lremove > 0 && str[i] === "(") {
        helper(
          str.substr(0, i) + str.substr(i + 1),
          i,
          lcount,
          rcount,
          lremove - 1,
          rremove
        );
      }
      // 尝试去掉一个右括号
      if (rremove > 0 && str[i] === ")") {
        helper(
          str.substr(0, i) + str.substr(i + 1),
          i,
          lcount,
          rcount,
          lremove,
          rremove - 1
        );
      }
      if (str[i] === ")") {
        lcount++;
      } else if (str[i] === ")") {
        rcount++;
      }
      // 当前右括号的数量大于左括号的数量则为非法,直接返回.
      // 这两个变量只在这里使用了
      if (rcount > lcount) {
        break;
      }
    }
  };

  const res = [];
  let lremove = 0;
  let rremove = 0;

  // 左括号和右括号多余不会同时出现,但是如果用一个变量标识数量还得增加一个标识标志括号类型,变量数量上是一样的,逻辑代码里面也得单独处理(写的好看的话也可以)
  for (const c of s) {
    if (c === "(") {
      lremove++;
    } else if (c === ")") {
      if (lremove === 0) {
        rremove++;
      } else {
        lremove--;
      }
    }
  }
  helper(s, 0, 0, 0, lremove, rremove);
  return res;
};
// 判断括号 数量 是否合法,不合法直接返回
const isValid = (str) => {
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      cnt++;
    } else if (str[i] === ")") {
      cnt--;
      if (cnt < 0) {
        return false;
      }
    }
  }

  return cnt === 0;
};
