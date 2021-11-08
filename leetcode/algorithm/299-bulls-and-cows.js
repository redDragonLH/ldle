/**
 * 299. 猜数字游戏
 *
 * 你在和朋友一起玩 猜数字（Bulls and Cows）游戏，该游戏规则如下：
 *
 * 写出一个秘密数字，并请朋友猜这个数字是多少。朋友每猜测一次，你就会给他一个包含下述信息的提示：
 *  * 猜测数字中有多少位属于数字和确切位置都猜对了（称为 "Bulls", 公牛），
 *  * 有多少位属于数字猜对了但是位置不对（称为 "Cows", 奶牛）。也就是说，这次猜测中有多少位非公牛数字可以通过重新排列转换成公牛数字。
 *
 * 给你一个秘密数字 secret 和朋友猜测的数字 guess ，请你返回对朋友这次猜测的提示。
 *
 * 提示的格式为 "xAyB" ，x 是公牛个数， y 是奶牛个数，A 表示公牛，B 表示奶牛。
 *
 * 请注意秘密数字和朋友猜测的数字都可能含有重复数字。
 */

/**
 * 问题复杂度就出在Cows 上,而且还可能有重复数字,那就必须对元素进行计数
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bulls = 0;
  const cntS = new Array(10).fill(0);
  const cntG = new Array(10).fill(0);
  for (let i = 0; i < secret.length; ++i) {
    if (secret[i] == guess[i]) {
      ++bulls;
    } else {
        // 略过相等的数据,两个数组内存放的全是不相等的
      ++cntS[secret[i].charCodeAt() - "0".charCodeAt()];
      ++cntG[guess[i].charCodeAt() - "0".charCodeAt()];
    }
  }
  let cows = 0;
  for (let i = 0; i < 10; ++i) {
      // 以cntS 数组为主,为0则没有,比cntG[i]大则说明有相等数据
    cows += Math.min(cntS[i], cntG[i]);
  }
  return "" + bulls + "A" + "" + cows + "B";
};
