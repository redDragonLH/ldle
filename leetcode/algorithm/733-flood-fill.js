/**
 * 733. 图像渲染
 * 有一幅以二维整数数组表示的图画，每一个整数表示该图画的像素值大小，数值在 0 到 65535 之间。
 * 给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列）和一个新的颜色值 newColor，让你重新上色这幅图像。
 * 为了完成上色工作，从初始坐标开始，记录初始坐标的上下左右四个方向上像素值与初始坐标相同的相连像素点，
 * 接着再记录这四个方向上符合条件的像素点与他们对应四个方向上像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。
 * 最后返回经过上色渲染后的图像。
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    if (!image.length) return image;
    if (image[sr][sc] === newColor) return image;
    const old = image[sr][sc]
    dfs(image, sr, sc, newColor, old);
    return image;
};
const dfs = (image, sr, sc, newColor, old) => {
    if (image[sr][sc] === old) {
        image[sr][sc] = newColor;

        if (sr > 0) {
            dfs(image, sr - 1, sc, newColor, old)
        }
        if (sr < image.length - 1) {
            dfs(image, sr + 1, sc, newColor, old)
        }
        if (sc > 0) {
            dfs(image, sr, sc - 1, newColor, old)
        }
        if (sc < image[0].length - 1) {
            dfs(image, sr, sc + 1, newColor, old)
        }
    }

}
/**
 * 执行用时：124 ms, 在所有 JavaScript 提交中击败了7.29%的用户
 * 内存消耗：40.3 MB, 在所有 JavaScript 提交中击败了68.42%的用户
 */