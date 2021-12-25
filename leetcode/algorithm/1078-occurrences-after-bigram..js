/**
 * 1078. Bigram 分词
 * 
 * 给出第一个词 first 和第二个词 second，考虑在某些文本 text 中可能以 "first second third" 形式出现的情况，其中 second 紧随 first 出现，third 紧随 second 出现。
 * 
 * 对于每种这样的情况，将第三个词 "third" 添加到答案中，并返回答案。
 */

/**
 * 边界逻辑处理恶心~~~
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    const result = [];
    let matchStr = first + ' ' + second;
    let index = 0;
    let textLen = text.length
    while (text.indexOf(matchStr, index) !== -1) {
        index = text.indexOf(matchStr, index);
        // 必须是单个单词，first 前边不能有字母，但是可以是开头
        // index 是undefined的情况就是为0
        if (text[index - 1] === ' ' || index === 0) {

            index += matchStr.length + 1;
            let end = index;
            while (textLen > end && text[end] !== ' ') end++
            // 位置可能在最后，那么最后的数据没有，不能传个空
            index !== end && result.push(text.slice(index, end));
            // 数据可能有部分重叠，所以要回退位置，但是不能回退到indexOf 返回的位置
            index -= matchStr.length;
            // 放if外就没有意义了,并且index+=1就会每次都加，虽然不会引起bug
            continue;
        };
        // 匹配的位置前边有字母，跳过并， 前进一位，
        index += 1;

    }
    return result;
};
/**
 * 执行用时：64 ms, 在所有 JavaScript 提交中击败了90.77%的用户
 * 内存消耗：37.6 MB, 在所有 JavaScript 提交中击败了47.69%的用户
 */