/**
 * 3606. 优惠券校验器
 *
 * 给你三个长度为 n 的数组，分别描述 n 个优惠券的属性：code、businessLine 和 isActive。其中，第 i 个优惠券具有以下属性：
 *  * code[i]：一个 字符串，表示优惠券的标识符。
 *  * businessLine[i]：一个 字符串，表示优惠券所属的业务类别。
 *  * isActive[i]：一个 布尔值，表示优惠券是否当前有效。
 * 当以下所有条件都满足时，优惠券被认为是 有效的 ：
 *  1 code[i] 不能为空，并且仅由字母数字字符（a-z、A-Z、0-9）和下划线（_）组成。
 *  2 businessLine[i] 必须是以下四个类别之一："electronics"、"grocery"、"pharmacy"、"restaurant"。
 *  3 isActive[i] 为 true 。
 * 返回所有 有效优惠券的标识符 组成的数组，按照以下规则排序：
 *  * 先按照其 businessLine 的顺序排序："electronics"、"grocery"、"pharmacy"、"restaurant"。
 *  * 在每个类别内，再按照 标识符的字典序（升序）排序。
 */

/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
  const groups = [[], [], [], []];
  const ans = [];

  for (let i = 0; i < code.length; i++) {
    if (code[i] && check(code[i], isActive[i])) {
      switch (businessLine[i]) {
        case "electronics":
          groups[0].push(code[i]);
          break;
        case "grocery":
          groups[1].push(code[i]);
          break;
        case "pharmacy":
          groups[2].push(code[i]);
          break;
        case "restaurant":
          groups[3].push(code[i]);
          break;
      }
    }
  }

  for (let group of groups) {
    group.sort();
    ans.push(...group);
  }

  return ans;
};

const check = (code, isActive) => {
  for (let char of code) {
    if (char !== "_" && !/[a-zA-Z0-9]/.test(char)) {
      return false;
    }
  }
  return isActive;
};
