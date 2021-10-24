const { nextTick } = require("process");

console.log('code1');
setTimeout(() => {
console.log('setTimeout 0');
}, 0);

console.log('code2');
setImmediate(() => {
    console.log('setImmdediate');
})

console.log('code3');
process.nextTick(() => {
    console.log('process nextTick');
})