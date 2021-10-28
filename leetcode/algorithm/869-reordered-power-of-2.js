/**
 * 869. 重新排序得到 2 的幂
 *
 * 给定正整数 N ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。
 *
 * 如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。
 */

/**
 * 这两天都是回溯算法,原理理解,但是写不出来代码~~~
 * 回溯就是递归,不过回溯会有一个重置状态的步骤
 * 
 * 可以拆成两个子问题:
 *  *   枚举可能包含重复字符的数组全排列
 *  *   判断一个数是否为2的幂
 * @param {number} n
 * @return {boolean}
 */
 const reorderedPowerOf2 = (n) => {
    const backtrack = (nums, idx, num) => {
        // 处理的数量等于数据长度则开始判断
        if (idx === nums.length) {
            return isPowerOfTwo(num);
        }
        // 回溯的核心代码
        for (let i = 0; i < nums.length; ++i) {
            // 不能有前导零
            if ((num === 0 && nums[i] === '0') || vis[i] || (i > 0 && !vis[i - 1] && nums[i] === nums[i - 1])) {
                continue;
            }
            vis[i] = true;
            // 可以在递归搜索全排列的同时，计算出当前排列的已枚举的部分所对应的整数 num。在我们枚举当前排列的下一个字符 ch 时，将 ch 加到 num 的末尾，即 num = num * 10 + ch - '0'，然后递归进入下一层。
            if (backtrack(nums, idx + 1, num * 10 + nums[i].charCodeAt() - '0'.charCodeAt())) {
                return true;
            }
            vis[i] = false;
        }
        return false;
    }
    // 数字数组化
    const nums = Array.from('' + n);
    // 重新排序
    nums.sort();
    const vis = new Array(nums.length).fill(false);
    return backtrack(nums, 0, 0);
}

const isPowerOfTwo = (n) => {
    return (n & (n - 1)) === 0;
}