/**
 * 476. 数字的补数
 *
 * 给你一个 正 整数 num ，输出它的补数。补数是对该数的二进制表示取反。
 */

/**
 * 在计算机存储整数时,并不会仅仅存储有效的二进制位,因此需要首先找到num二进制表示最高位的那个1,再将这个1以及更低的位进行取反
 *
 * 如果num二进制表示最高位的1是第i(0 <= i <= 30),那么一定有: 2^i <= num <2^(i+1)
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let highbit = 0;
  for (let i = 1; i <= 30; ++i) {
      // 把1左移,找到 2^i <= num <2^(i+1) 的i
    if (num >= 1 << i) {
      highbit = i;
    } else {
      break;
    }
  }
  // 把1左移到比当前num高一位,然后减去1,那么highbit 位内的所有位都变为 1,
  const mask = highbit == 30 ? 0x7fffffff : (1 << (highbit + 1)) - 1;
  // 按位异或,bit位不相同的位为1,0为1,1为0
  return num ^ mask;
};
