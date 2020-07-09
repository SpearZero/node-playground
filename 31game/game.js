const reachTarget = (target, playerInput = 0) => {
    target -= playerInput;
    console.log(playerInput);
    return target === 0 ? true : false;
}

module.exports = {
    game,
    computer
}