/**
 * 12. 整数转罗马数字
 *
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 *
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 *
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 *  * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 *  * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
 *  * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
 */

/**
 * 官方题解 模拟
 *
 * 制造已知信息映射表
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const valueSymbols = new Map();
  valueSymbols.set(1000, "M");
  valueSymbols.set(900, "CM");
  valueSymbols.set(500, "D");
  valueSymbols.set(400, "CD");
  valueSymbols.set(100, "C");
  valueSymbols.set(90, "XC");
  valueSymbols.set(50, "L");
  valueSymbols.set(40, "XL");
  valueSymbols.set(10, "X");
  valueSymbols.set(9, "IX");
  valueSymbols.set(5, "V");
  valueSymbols.set(4, "IV");
  valueSymbols.set(1, "I");
  const roman = [];
  for (const value of values) {
    // 循环减去已知数据
    const symbol = valueSymbols.get(value);
    while (num >= value) {
      num -= value;
      roman.push(symbol);
    }
    if (num == 0) {
      break;
    }
  }
  return roman.join("");
};

/**
 * 官方题解 硬编码数字
 * @param {*} num
 * @returns
 */
var intToRoman = function (num) {
  // 每个数都写出来
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const roman = [];
  roman.push(thousands[Math.floor(num / 1000)]);
  roman.push(hundreds[Math.floor((num % 1000) / 100)]);
  roman.push(tens[Math.floor((num % 100) / 10)]);
  roman.push(ones[num % 10]);
  return roman.join("");
};

/**
 * 第三方优秀题解
 *
 * 模拟的简明写法
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let str = "";
  let luomaArr = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // 双循环
  for (let i = 0; num > 0 && i < 13; i++) {
    while (numberArr[i] <= num) {
      str += luomaArr[i];
      num -= numberArr[i];
    }
  }
  return str;
};
