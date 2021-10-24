const fs = require('fs');

// 3가지 형태의 api
// rename(..., callback(error, data)) 비동기(asynchronous Call)
// try {renameSync(...)} catch(e){} 블러킹, 따로 error를 쓰지 않으므로 try catch로 node가 죽지 않도록 해야함
// promises.rename().then().catch(0)
// 밑에 2가지는 비동기적이므로 뭐가 먼저 실행될지 모름
// 첫번째 or 세번쨰 방법 추천

try{
fs.renameSync('./10-file/text.txt','./10-file/text-new.txt'); //error 발생, node 사망
} catch (error) {
    console.error(error);
}

fs.rename('./10-file/text-new.txt','./10-file/text.txt',(error)=>{
    console.log(error);
});

console.log('hello');

fs.promises
    .rename('./10-file/text.txt','./10-file/text-new.txt')
    .then() 
    .catch(console.error);