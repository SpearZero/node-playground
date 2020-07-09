const { argv } = require('yargs');
const readline = require("readline");

let target = argv.target;
if (!parseInt(target)) {
    console.log("Input number please");
    return;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const computer = () => {
    return Math.floor(Math.random() * 3) + 1
}

const userInputValid = (input) => {
    return !parseInt(input) || !(input >= 1 && input <= 3);
}

const reachTarget = (reach = target, input = 0) => {
    return target -= input;
}

const result = (target) => {
    return target <= 0;
}

const alertLoser = (player) => {
    console.log(`${player} Lose!!!`);
}

console.log("target is = " + target);
const game = () => {
    rl.question("User Input : ", (answer) => {

        if (userInputValid(answer)) {
            console.log("Input Number(1~3)")
        } else {

            target = reachTarget(target, answer);
            console.log("target is(User) = " + target);
            if (result(target)) {
                alertLoser('Player');
                return rl.close();
            }

            let computerInput = computer();
            console.log("Computer Input = " + computerInput);
            target = reachTarget(target, computerInput);
            console.log("target is(Computer) = " + target);
            if (result(target)) {
                alertLoser('Computer');
                return rl.close();
            }
        }
        game();
    })
};
game();
