/**
 * 816. 模糊坐标
 *
 * 我们有一些二维坐标，如 "(1, 3)" 或 "(2, 0.5)"，然后我们移除所有逗号，小数点和空格，得到一个字符串S。返回所有可能的原始字符串到一个列表中。
 *
 * 原始的坐标表示法不会存在多余的零，所以不会出现类似于"00", "0.0", "0.00", "1.0", "001", "00.01"或一些其他更小的数来表示坐标。此外，一个小数点前至少存在一个数，所以也不会出现“.1”形式的数字。
 *
 * 最后返回的列表可以是任意顺序的。而且注意返回的两个数字中间（逗号之后）都有一个空格。
 */

/**
 * 还得是枚举
 * @param {string} s
 * @return {string[]}
 */
 var ambiguousCoordinates = function(s) {
    const n = s.length - 2;
    const res = [];
    s = s.slice(1, s.length - 1);
    for (let l = 1; l < n; ++l) {
        const lt = getPos(s.slice(0, l));
        if (lt.length === 0) {
            continue;
        }
        const rt = getPos(s.slice(l));
        if (rt.length === 0) {
            continue;
        }
        for (const i of lt) {
            for (const j of rt) {
                res.push("(" + i + ", " + j + ")");
            }
        }
    }
    return res;
}

const getPos = (s) => {
    const pos = [];
    if (s[0] !== '0' || "0" === s) {
        pos.push(s);
    }
    for (let p = 1; p < s.length; ++p) {
        if ((p !== 1 && s[0] === '0') || s[s.length - 1] === '0') {
            continue;
        }
        pos.push(s.slice(0, p) + "." + s.slice(p));
    }
    return pos;
};