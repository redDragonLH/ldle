/**
 * 1260. 二维网格迁移
 *
 * 给你一个 m 行 n 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。
 *
 * 每次「迁移」操作将会引发下述活动：
 *  * 位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
 *  * 位于 grid[i][n - 1] 的元素将会移动到 grid[i + 1][0]。
 *  * 位于 grid[m - 1][n - 1] 的元素将会移动到 grid[0][0]。
 *
 * 请你返回 k 次迁移操作后最终得到的 二维网格。
 */

/**
 * 按照活动规则,其实就是从左往右,从上往下挪动,数量少还好,可以一次性计算出来挪动位置(其实多了也可以~~),就是超过n的k需要更复杂的计算计算
 * 
 * m,n的映射关系没捋清楚
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  let m = grid.length,
    n = grid[0].length;
  // k 超过元素数量倍数的数量没有意义
  let span = (k + 1) % (m * n);
  console.log(span);
  let result = new Array(m).fill(0);
  result.forEach((e, i) => {
    result[i] = new Array(n).fill(0);
  });
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 位置计算是核心,情况较为复杂
      let elementIndex = {
        m: calculateM(i, m, j, n, span),
        n: calculateN(i, m, j, n, span),
      };
      console.log(elementIndex);
      // result[elementIndex.m][elementIndex.n] = grid[i][j]
    }
  }
  return result;
};
/**
 *
 * @param {Number} i 当前元素m位置
 * @param {Number} m grid 长度
 * @param {Number} j 当前元素n位置
 * @param {Number} n grid内元素长度
 * @param {Number} span 计算出来的元素要移动的跨度
 */
const calculateM = (i, m, j, n, span) => {
  // span 超过 n-j就得折行,如果超的太多就得折很多行
  if (span < n - j) {
    return i;
  } else {
    let need = i + Math.ceil((span - (n - j)) / n);
    console.log(need);
    return need === m ? 0 : need;
  }
};
/**
 *
 * @param {Number} i 当前元素m位置
 * @param {Number} m grid 长度
 * @param {Number} j 当前元素n位置
 * @param {Number} n grid内元素长度
 * @param {Number} span 计算出来的元素要移动的跨度
 */
const calculateN = (i, m, j, n, span) => {
  // n 的位置由 span减去当前列右移位置+ span%n后的数字
  if (span < n - j) {
    return j + span;
  } else {
    return parseInt(span - (n - j)) % n;
  }
};

/**
 * 果然有一维展开这个方案
 * @param {*} grid 
 * @param {*} k 
 * @returns 
 */
var shiftGrid = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    const ret = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        ret.push(row);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 映射方案
            const index1 = (i * n + j + k) % (m * n);
            ret[Math.floor(index1 / n)].splice(index1 % n, 1, grid[i][j]);
        }
    }
    return ret;
};