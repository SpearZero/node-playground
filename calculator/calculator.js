// 콜백을 이용한 계산기 만들어보기

// 숫자 2 개와 연산자를 입력받음
const num1 = process.argv[2];
const num2 = process.argv[3];
const inputOp = process.argv[4];

if (!num1 || !num2 || !inputOp) {
    console.log("ex) node calculator.js 10 20 +");
    console.log("support op => +, -, /, *")
    return;
}

if (!parseInt(num1) || !parseInt(num2)) {
    console.log("input integer");
    return;
}

const ops = ['+', '-', '/', '*'];
const findOp = ops.find(op => op === inputOp);

if (!findOp) {
    console.log("input '+','-','/','*'");
    return;
}

// 연산자에 따른 함수 정의
const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const div = (a, b) => {
    return a / b;
}

const mul = (a, b) => {
    return a * b;
}

const calculator = (a, b, callback) => {
    console.log(callback(parseInt(a), parseInt(b)));
}

let result = "Error";
switch (findOp) {
    case '+':
        result = calculator(num1, num2, add);
        break;
    case '-':
        result = calculator(num1, num2, sub);
        break;
    case '*':
        result = calculator(num1, num2, mul);
        break;
    case '/':
        result = calculator(num1, num2, div);
        break;
}