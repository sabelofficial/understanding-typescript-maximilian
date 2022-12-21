function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const res = n1 + n2;
    if(showResult) {
        console.log(phrase + res);
    } else {
        return res;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';

const res = add(number1, number2, printResult, resultPhrase);
console.log(res)