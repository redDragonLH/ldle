/**
 * 1104. 二叉树寻路
 *
 * 在一棵无限的二叉树上，每个节点都有两个子节点，树中的节点 逐行 依次按 “之” 字形进行标记。
 *
 * 如下图所示，在奇数行（即，第一行、第三行、第五行……）中，按从左到右的顺序进行标记；
 *
 * 而偶数行（即，第二行、第四行、第六行……）中，按从右到左的顺序进行标记。
 *
 * 给你树上某一个节点的标号 label，请你返回从根节点到该标号为 label 节点的路径，该路径是由途经的节点标号所组成的。
 *
 */

/**
 * 没有提供二叉树,那最好用数组模拟二叉树,label 是数组的长度
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  let binaryArr = [1];
  let row = buildBinaryTree(binaryArr, label);
  // 找到元素位置,然后用公式往上倒
  let index = binaryArr.findIndex((e) => e == label);
  let result = [binaryArr[index]];

  row--;
  while (index > 0) {
    let odd = row % 2;
    // console.log(row,odd,index,odd,indexOdd);
    // 奇数行
    if (odd) {
        //  当前节点是左右子树的逻辑有问题,奇偶数必须分开计算
      let indexOdd = !(index % 2);

      // 奇数是右节点
      if (indexOdd) {
        index = parseInt((index - 1) / 2);
        // console.log('index',index);
      } else {
        // 偶数是左节点
        index = parseInt(index / 2);
      }
    } else {
      let indexOdd = index % 2;

      // 偶数行
      // 奇数是左节点
      if (indexOdd) {
        index = parseInt(index / 2);
      } else {
        // 偶数是右节点
        index = parseInt((index - 1) / 2);
      }
    }
    result.unshift(binaryArr[index]);
    row--;
  }
  result[0] !== 1 && result.unshift(1);
  return result;
};
const buildBinaryTree = (arr, len) => {
  // 数组模拟
  // 左子节点 的公式是2*x
  // 右子节点的公式是2*x+1,
  // 奇数行是正的,偶数行是反的
  let row = 2;
  let count = 1;
  while (count < len) {
    let tempcount = count * 2;
    let isOdd = row % 2;
    if (isOdd) {
      while (tempcount >= count) {
        count++;
        arr.push(count);
      }
    } else {
      let templen = arr.length - 1;
      let temp = arr[templen] * 2 + 1;
      while (count < temp) {
        arr.push(temp);
        temp--;
      }
      count = arr[templen] * 2 + 1;
    }
    row++;
  }
  return row;
};
console.log(pathInZigZagTree(14));
console.log(pathInZigZagTree(26));
console.log(pathInZigZagTree(5));
/**
 * 思路正确但是具体逻辑有较大优化空间
 * 执行用时：320 ms, 在所有 JavaScript 提交中击败了8.11%的用户
 * 内存消耗：116.7 MB, 在所有 JavaScript 提交中击败了5.41%的用户
 */


/**
 * 官方题解 数学
 */
 var pathInZigZagTree = function(label) {
    let row = 1, rowStart = 1;
    //  不构建真实的数组二叉树,但是计算二叉树的层数和总节点数
    while (rowStart * 2 <= label) {
        row++;
        rowStart *= 2;
    }
    // 偶数行内的节点是反方向排列的
    if (row % 2 === 0) {
        // 重新处理label的位置么
        label = getReverse(label, row);
    }
    const path = [];
    while (row > 0) {
        //  偶数层
        if (row % 2 === 0) {
            // 计算数据位置,但是上边不都处理一会了么
            // 难道是配合这里
            path.push(getReverse(label, row));
        } else {
            path.push(label);
        }
        //  向上一行
        row--;
        //  向右移动一位二进制
        // 为什么右移
        label >>= 1;
    }
    path.reverse();
    return path;
};

const getReverse = (label, row) => {
    return (1 << row - 1) + (1 << row) - 1 - label;
}