/**
 * 720. 词典中最长的单词
 * 
 * 给出一个字符串数组 words 组成的一本英语词典。返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。
 * 
 * 若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。
 */
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    words.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            // 对比字典序
            return b.localeCompare(a);
        }
    })
    let longest = "";
    let set = new Set();
    set.add("");
    const n = words.length;
    for (let i = 0; i < n; i++) {
        const word = words[i];
        // 逐步增加一个字母~~
        if (set.has(word.slice(0, word.length - 1))) {
            set.add(word);
            longest = word;
        }
    }
    return longest;
};

/**
 * 字典树
 */
var longestWord = function (words) {
    const trie = new Trie();
    for (const word of words) {
        trie.insert(word);
    }
    let longest = "";
    for (const word of words) {
        if (trie.search(word)) {
            if (word.length > longest.length || (word.length === longest.length && word.localeCompare(longest) < 0)) {
                longest = word;
            }
        }
    }
    return longest;
};

class Node {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.children = new Node();
        this.isEnd = false;
    }

    insert(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];
            const index = ch.charCodeAt() - 'a'.charCodeAt();
            if (!node.children[index]) {
                node.children[index] = new Node();
            }
            node = node.children[index];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];
            const index = ch.charCodeAt() - 'a'.charCodeAt();
            if (!node.children[index] || !node.children[index].isEnd) {
                return false;
            }
            node = node.children[index];
        }
        return node && node.isEnd;
    }
}