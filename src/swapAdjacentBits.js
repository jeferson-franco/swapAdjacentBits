function solution(n) {
    return parseInt(n.toString(2).padStart(32, '0').match(/.{2}/g).map(x => x.split('').reverse().join('')).join(''), 2);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test swapAdjacentBits

// alternative solution
