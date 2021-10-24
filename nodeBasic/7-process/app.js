const process = require('process');

setTimeout(() => {
    console.log('setTimeout');
}, 0)//현재 콜스택에 있는 코드가 다 실행 되고 0초 후에 실행

process.nextTick(() => {
    console.log('nextTick');
})//콜스택이 다 비워지면 가장 먼저 실행됨

for(let i=0; i<1000; i++) {
    console.log('for loop');
}