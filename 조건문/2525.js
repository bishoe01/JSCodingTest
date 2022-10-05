const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const time = input[0].split(' ').map(Number);
const lasts = Number(input[1]);

const hour = time[0];
const minute = time[1];

(minute + lasts) > 60 ? (hour === 23 ? console.log(0, minute + lasts - 60) : console.log(hour + 1, minute + lasts - 60)) : console.log(hour, minute + lasts);
