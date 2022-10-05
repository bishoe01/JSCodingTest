const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);

a > b ? console.log('>') : a < b ? console.log('<') : console.log('==');