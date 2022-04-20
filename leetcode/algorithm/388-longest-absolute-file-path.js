/**
 * 388. 文件的最长绝对路径
 *
 * 假设有一个同时存储文件和目录的文件系统。下图展示了文件系统的一个示例：
 *
 * 这里将 dir 作为根目录中的唯一目录。dir 包含两个子目录 subdir1 和 subdir2 。subdir1 包含文件 file1.ext 和子目录 subsubdir1；subdir2 包含子目录 subsubdir2，该子目录下包含文件 file2.ext 。
 *
 * 如果是代码表示，上面的文件系统可以写为 "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" 。'\n' 和 '\t' 分别是换行符和制表符。
 *
 * 文件系统中的每个文件和文件夹都有一个唯一的 绝对路径 ，即必须打开才能到达文件/目录所在位置的目录顺序，所有路径用 '/' 连接。上面例子中，指向 file2.ext 的 绝对路径 是 "dir/subdir2/subsubdir2/file2.ext" 。每
 * 个目录名由字母、数字和/或空格组成，每个文件名遵循 name.extension 的格式，其中 name 和 extension由字母、数字和/或空格组成。
 *
 * 给定一个以上述格式表示文件系统的字符串 input ，返回文件系统中 指向 文件 的 最长绝对路径 的长度 。 如果系统中没有文件，返回 0。
 */

/**
 * 重要的是解析,解析好了就用栈模拟一下就可以了
 *
 * 怎样表现层级关系,最好是组成一个tree,但是增加了解法复杂度,数组和对象都有些问题
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  let obj = {};
  for (let i = 0; i <= input.length; i++) {
    let dirName = "";
    console.log();
    if (input[i] == "\n") {
      let tLen = 0;
      i++;
      for (; i <= input.length; i++) {
        if (input[i] == "\t") {
          tLen++;
        }
      }
    } else {
      for (; i <= input.length; i++) {
        if (input[i] != "\n") {
          dirName += input[i];
        }
      }
    }
  }
};
/**
 * 顺序有点问题
 */