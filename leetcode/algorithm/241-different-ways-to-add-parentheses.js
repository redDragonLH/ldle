/**
 * 241. 为运算表达式设计优先级
 *
 * 给你一个由数字和运算符组成的字符串 expression ，按不同优先级组合数字和运算符，计算并返回所有可能组合的结果。你可以 按任意顺序 返回答案。
 *
 * 生成的测试用例满足其对应输出值符合 32 位整数范围，不同结果的数量不超过 104 。
 */

/**
 * 记忆化搜索
 *  首先对expression 做一个预处理,把全部的操作数(包括数字和算符)都放到ops数组中,因为
 * 题目数据满足每一个数字都是[0,99]的范围内,且算符总共有3个,所以分别用 -1,-2,-3来表示算符+,-,*.
 * 因为对于表达式中的某一个算符op,将其左部可能的计算结果用left集合表示,其右部可能的计算结果用right集合来表示
 * @param {string} expression
 * @return {number[]}
 */
const ADDITION = -1;
const SUBTRACTION = -2;
const MULTIPLICATION = -3;

var diffWaysToCompute = function (expression) {
  const ops = [];
  for (let i = 0; i < expression.length; ) {
    if (!isDigit(expression[i])) {
      if (expression[i] === "+") {
        ops.push(ADDITION);
      } else if (expression[i] === "-") {
        ops.push(SUBTRACTION);
      } else {
        ops.push(MULTIPLICATION);
      }
      i++;
    } else {
      let t = 0;
      while (i < expression.length && isDigit(expression[i])) {
        t = t * 10 + expression[i].charCodeAt() - "0".charCodeAt();
        i++;
      }
      ops.push(t);
    }
  }
  const dp = new Array(ops.length)
    .fill(0)
    .map(() => new Array(ops.length).fill(0));
  for (let i = 0; i < ops.length; i++) {
    for (let j = 0; j < ops.length; j++) {
      dp[i][j] = [];
    }
  }
  return dfs(dp, 0, ops.length - 1, ops);
};

const dfs = (dp, l, r, ops) => {
  if (dp[l][r].length === 0) {
    if (l == r) {
      dp[l][r].push(ops[l]);
    } else {
      for (let i = l; i < r; i += 2) {
        const left = dfs(dp, l, i, ops);
        const right = dfs(dp, i + 2, r, ops);
        for (const lv of left) {
          for (const rv of right) {
            if (ops[i + 1] === ADDITION) {
              dp[l][r].push(lv + rv);
            } else if (ops[i + 1] === SUBTRACTION) {
              dp[l][r].push(lv - rv);
            } else {
              dp[l][r].push(lv * rv);
            }
          }
        }
      }
    }
  }
  return dp[l][r];
};

const isDigit = (ch) => {
  return parseFloat(ch).toString() === "NaN" ? false : true;
};
