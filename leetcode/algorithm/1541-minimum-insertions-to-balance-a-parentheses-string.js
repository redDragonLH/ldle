/**
 * 1541. 平衡括号字符串的最少插入次数
 * 
 * 给你一个括号字符串 s ，它只包含字符 '(' 和 ')' 。一个括号字符串被称为平衡的当它满足：
 *  * 任何左括号 '(' 必须对应两个连续的右括号 '))' 。
 *  * 左括号 '(' 必须在对应的连续两个右括号 '))' 之前。
 * 比方说 "())"， "())(())))" 和 "(())())))" 都是平衡的， ")()"， "()))" 和 "(()))" 都是不平衡的。
 * 你可以在任意位置插入字符 '(' 和 ')' 使字符串平衡。
 * 请你返回让 s 平衡的最少插入次数。
 */
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
  
    let insertions = 0;
    let balance = 0; // balance represents the number of ')' needed
    // 循环遍历字符串，计算需要插入的括号数量
    for (let i = 0; i < s.length; i++) {
        // 如果当前字符是左括号 '('
        if (s[i] === '(') {
            // 如果当前字符是左括号 '('，首先检查 balance 是否为奇数，如果是，则需要插入一个右括号 ')'
            if (balance % 2 !== 0) {
                insertions++;
                balance--;
            }
            // 每个左括号 '(' 需要两个右括号 ')'
            balance += 2;
        } else {
            // 当前字符是右括号 ')'
            balance--;
            if (balance < 0) {
                // 如果 balance 小于 0，说明缺少左括号 '('，需要插入一个左括号 '('
                insertions++;
                balance += 2;
            }
        }
    }
    
    return insertions + balance;
};