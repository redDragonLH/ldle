/**
 * 3274. 检查棋盘方格颜色是否相同
 * 
 * 给你两个字符串 coordinate1 和 coordinate2，代表 8 x 8 国际象棋棋盘上的两个方格的坐标。
 * 以下是棋盘的参考图。
 *  https://leetcode.cn/problems/check-if-two-chessboard-squares-have-the-same-color/description/?envType=daily-question&envId=2024-12-03
 * 如果这两个方格颜色相同，返回 true，否则返回 false。
 * 坐标总是表示有效的棋盘方格。坐标的格式总是先字母（表示列），再数字（表示行）。
 */
/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    let c1 = coordinate1.split('');
    let c2 = coordinate2.split('');
    // 使用 charCodeAt() 方法获取字符的 Unicode 编码这个有点没想到,看来还是干的少了
    return (c1[0].charCodeAt(0) + parseInt(c1[1])) % 2 === (c2[0].charCodeAt(0) + parseInt(c2[1])) % 2;
};