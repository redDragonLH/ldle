/**
 * 427. 建立四叉树
 *
 * 给你一个 n * n 矩阵 grid ，矩阵由若干 0 和 1 组成。请你用四叉树表示该矩阵 grid 。
 *
 * 你需要返回能表示矩阵的 四叉树 的根结点。
 *
 * 注意，当 isLeaf 为 False 时，你可以把 True 或者 False 赋值给节点，两种值都会被判题机制 接受 。
 *
 * 四叉树数据结构中，每个内部节点只有四个子节点。此外，每个节点都有两个属性：
 *  * val：储存叶子结点所代表的区域的值。1 对应 True，0 对应 False；
 *  * isLeaf: 当这个节点是一个叶子结点时为 True，如果它有 4 个子节点则为 False 。
 *
 * 我们可以按以下步骤为二维区域构建四叉树：
 *  * 如果当前网格的值相同（即，全为 0 或者全为 1），将 isLeaf 设为 True ，将 val 设为网格相应的值，并将四个子节点都设为 Null 然后停止。
 *  * 如果当前网格的值不同，将 isLeaf 设为 False， 将 val 设为任意值，然后如下图所示，将当前网格划分为四个子网格。
 *  * 使用适当的子网格递归每个子节点。
 */

/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  return dfs(grid, 0, 0, grid.length, grid.length);
};

const dfs = (grid, r0, c0, r1, c1) => {
  let same = true;
  for (let i = r0; i < r1; ++i) {
    for (let j = c0; j < c1; ++j) {
      if (grid[i][j] !== grid[r0][c0]) {
        same = false;
        break;
      }
    }
    if (!same) {
      break;
    }
  }

  if (same) {
    return new Node(grid[r0][c0] === 1, true);
  }

  const ret = new Node(
    true,
    false,
    dfs(grid, r0, c0, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2)),
    dfs(grid, r0, Math.floor((c0 + c1) / 2), Math.floor((r0 + r1) / 2), c1),
    dfs(grid, Math.floor((r0 + r1) / 2), c0, r1, Math.floor((c0 + c1) / 2)),
    dfs(grid, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2), r1, c1)
  );
  return ret;
};
