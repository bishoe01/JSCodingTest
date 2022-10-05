const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const hour = parseInt(input[0]);
const minute = parseInt(input[1]);

minute < 45 ? (hour === 0 ? console.log(23, minute + 15) : console.log(hour - 1, minute + 15)) : console.log(hour, minute - 45);