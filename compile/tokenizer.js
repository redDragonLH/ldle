function generateType(type, string, index) {
    return {
        type: type,
        value: string,
        index,
    }
}
function tokenizer(input) {
    let current = 0;
    let token = [];

    while (current < input.length) {
        let char = input[current]
        console.log(char,current);
        // 符号 
        // []
        if (char === '[' || char === ']') {
            token.push(generateType('paren', char, current))

            current++;
            continue;
        }
        // ()
        if (char === '(' || char === ')') {
            token.push(generateType('paren', char, current))

            current++;
            continue;
        }
        // =  ==
        if (char === '=') {
            if (input[current + 1] === '=') {
                token.push(generateType('paren', '==', current))
                current++;
            } else {
                token.push(generateType('paren', char, current))
            }

            current++;
            continue;
        }
        // + - /
        if (/[\+|\-|\/]/.test(char)) {
            token.push(generateType('paren', char, current))
            current++;
            continue;
        }
        // > >=
        if (char === '>') {
            if (input[current + 1] === '=') {
                token.push(generateType('paren', '>=', current))
                current++;
            } else {
                token.push(generateType('paren', char, current))
            }

            current++;
            continue;
        }
        // < <=
        if (char === '<') {
            if (input[current + 1] === '=') {
                token.push(generateType('paren', '<=', current))
                current++;
            } else {
                token.push(generateType('paren', char, current))
            }

            current++;
            continue;
        }
        if (/[\?|\:]/.test(char)) {
            token.push(generateType('paren', char, current))
            current++;
            continue;
        }
        if (/[\.]/.test(char)) {
            token.push(generateType('Call', char, current))
            current++;
            continue;
        }
        if (/[\,]/.test(char)) {
            token.push(generateType('paren', char, current))
            current++;
            continue;
        }
        if (/[\s]/.test(char)) {
            current++;
            continue;
        }

        // 符号 end

        // 变量 字符
        if (char === "\"") {

            let value = '';
            let start = current
            char = input[++current];

            while (char !== "\"" && current < input.length) {
                value += char;
                char = input[++current];
            }

            char = input[++current];

            token.push(generateType('string', value, start))
            continue;
        }

        let NUMBERS = /[0-9]/;
        if (NUMBERS.test(char)) {

            let start = current
            let value = '';
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }
            token.push(generateType('number', value, start))
            continue;
        }

        let LETTERS_STRET = /[a-z|A-Z|\@|\_]/i;
        if (LETTERS_STRET.test(char)) {

            let value = char;
            let start = ++current
            let LETTERS = /[a-z|A-Z|\_|\s|0-9]/i;
            char =  input[current];
            console.log();
            while (LETTERS.test(char) && typeof char !== 'undefined') {
                value += char;
                char = input[++current];
                console.log(char,current);
            }
            token.push(generateType('name', value, start))
            continue;
        }
        throw new TypeError('I dont know what this character is: ' + char);
    }
    return token
}
let array = ['[_FCI10]+"姓名:"+([LastName]=="-"?([Mobile Phone].substring(0,2)=="88"?"辅卡":"新会员"):[LastName])+[_FCI8]','2','TURE','[@ad taa 12]']
for (let index = 0; index < array.length; index++) {
    console.log(tokenizer(array[index]));
    
}