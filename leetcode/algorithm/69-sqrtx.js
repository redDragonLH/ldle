/**
 * 69. x 的平方根
 * 
 * 实现 int sqrt(int x) 函数。
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 */

 /**
  * 思路： 对半折，然后每个数折
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(!x) return x;
    let factor = x/2;
    let num = 1
    for (let i = 0; i <= factor; i++) {
        if(i*i <= x) {
            num = i;
        }else{
            break;
        }
        
    }
    return num;
};
/**
 * 要从1往后挨个计算，执行用时肯定是多的
 * 
 * 执行用时 :188 ms, 在所有 JavaScript 提交中击败了5.10%的用户
 * 内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */


/**
 * 第三方方法
 */
/**
 * 袖珍计算器法
 * 
 * 用指数函数 exp 和对数函数 ln 代替平方根函数的方法
 * 
 * 将x 的平方根 写成幂的形式 x 的1/2 方，再使用自然对数e进行换底，即可得到
 * 
 * * exp: 返回自然数底数e的参数次方
 * * ln log 以e为底
 * * 幂 ：指数运算，x的 n 次方,x称为底数，n称为指数
 * 
 * java 代码
 * 
 * class Solution {
 *      public int mySqrt(int x) {
 *          if(x == 0) {
 *              return 0;
 *          }
 *          int ans = (int)Math.exp(0.5 * Math.log(x));
 *          return (long)(ans + 1) * (ans + 1) <= x ? ans + 1 : ams;
 *      }
 * }
 */
/**
 * 二叉查找法
 * 
 * 思路 当x≥2 时，它的整数平方根一定小于 x / 2 且大于 0，即 0 < a < x / 2。由于 aa一定是整数，此问题可以转换成在有序整数集中寻找一个特定值，因此可以使用二分查找。
 * 
 * java 代码
 * 
 * class Solution {
 *      public int mySqrt(int x) {
 *          int l = 0,r = x,ans = -1;
 *          while(l <= r) {
 *              int mid = l + (r - l) / 2;
 *              if((long)mid * mid <= x) {
 *                  ans = mid;
 *                  l = mid + 1;
 *              }else {
 *                  r = mid - 1;
 *              }
 *          }
 *          return ans;
 *      }
 * }
 */
/**
 * 递归+位操作
 */
/**
 * 牛顿法
 * 
 * class Solution {
 *      public int mySqrt(int x) {
 *          if(x == 0) {
 *              return 0;
 *          }
 *          double c = x,x0 = x;
 *          while(true) {
 *              if(Math.abs(x0 - xi) < 1e-7) {
 *                  break;
 *              }
 *              x0 = xi;
 *          }
 *          return (int)x0;
 *      }
 * }
 */