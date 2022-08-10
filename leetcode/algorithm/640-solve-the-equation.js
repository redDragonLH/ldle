/**
 * 640. 求解方程
 *
 * 求解一个给定的方程，将x以字符串 "x=#value" 的形式返回。该方程仅包含 '+' ， '-' 操作，变量 x 和其对应系数。
 *
 * 如果方程没有解，请返回 "No solution" 。如果方程有无限解，则返回 “Infinite solutions” 。
 *
 * 如果方程中只有一个解，要保证返回值 'x' 是一个整数。
 */
var solveEquation = function (equation) {
  let factor = 0,
    val = 0;
  let index = 0,
    n = equation.length,
    sign1 = 1; // 等式左边默认系数为正
  while (index < n) {
    if (equation[index] === "=") {
      sign1 = -1; // 等式右边默认系数为负
      index++;
      continue;
    }

    let sign2 = sign1,
      number = 0;
    let valid = false; // 记录 number 是否有效
    if (equation[index] === "-" || equation[index] === "+") {
      // 去掉前面的符号
      sign2 = equation[index] === "-" ? -sign1 : sign1;
      index++;
    }
    while (index < n && isDigit(equation[index])) {
      number = number * 10 + (equation[index].charCodeAt() - "0".charCodeAt());
      index++;
      valid = true;
    }

    if (index < n && equation[index] === "x") {
      // 变量
      factor += valid ? sign2 * number : sign2;
      index++;
    } else {
      // 数值
      val += sign2 * number;
    }
  }

  if (factor === 0) {
    return val === 0 ? "Infinite solutions" : "No solution";
  }
  if (val % factor !== 0) {
    return "No solution";
  }
  return "x=" + -val / factor;
};

const isDigit = (ch) => {
  return parseFloat(ch).toString() === "NaN" ? false : true;
};
