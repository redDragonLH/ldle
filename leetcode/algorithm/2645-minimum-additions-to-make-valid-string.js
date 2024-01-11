/**
 * 2645. 构造有效字符串的最少插入数
 *
 * 给你一个字符串 word ，你可以向其中任何位置插入 "a"、"b" 或 "c" 任意次，返回使 word 有效 需要插入的最少字母数。
 * 如果字符串可以由 "abc" 串联多次得到，则认为该字符串 有效 。
 */

/**
 * 最少~~算法简洁的话只有一种结果
 *
 * 用栈处理
 * 
 * 这个写法判断条件太多,逻辑混乱,需要新思路
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
  let stack = new Array();
  let len = word.length;
  let addLen = 0;
  for (let i = 0; i < len; i++) {
    if (!stack.length) {
      if (word[i] === "a") {
        stack.push("a");
      } else {
        if (word[i] === "b") {
          addLen += 1;
          stack.push("b");
        } else {
          addLen += 2;
        }
      }
    } else {
      if (word[i] === "a") {
        if (stack[stack.length - 1] === "a") {
          addLen += 2;
        } else if (stack[stack.length - 1] === "b") {
          addLen += 1;
          stack.pop();
        } else if (stack[stack.length - 1] === "c") {
          console.log("last is c 1", stack);
        }
      } else if (word[i] === "b") {
        if (stack[stack.length - 1] === "a") {
          stack.push("b");
        } else if (stack[stack.length - 1] === "b") {
          addLen += 2;
        } else if (stack[stack.length - 1] === "c") {
          console.log("last is c 2", stack);
        }
      } else if (word[i] === "c") {
        if (stack[stack.length - 1] === "a") {
          addLen += 1;
          stack.pop();
        } else if (stack[stack.length - 1] === "b") {
          stack.pop();
          stack.pop();
        } else if (stack[stack.length - 1] === "c") {
          addLen += 2;
        }
      }
    }
  }
  if (stack[stack.length - 1] === "a") {
    addLen += 2;
  } else if (stack[stack.length - 1] === "b") {
    addLen += 1;
  } else if (stack[stack.length - 1] === "c") {
  }
  return addLen;
};
