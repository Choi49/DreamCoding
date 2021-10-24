const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt','utf8')//처음에는 buffer 형태로 출력, encoding = utf8
.then((data) => console.log(data))
.catch(console.error);

fs.writeFile('./file.txt','Hello, Drea, Coders!')
.catch(console.error);// catch는 항상 해주는게 좋음!!

fs.appendFile('./file.txt', 'append!')
.then(() => {
    fs.copyFile('./file.txt','./file2.txt')
    .catch(console.error);
})
.catch(console.error);


//copy
fs.copyFile('./file.txt','./file2.txt')
.catch(console.error);

//promise는 비동기실행 이므로 순서가 뒤죽박줄으로 실행됨
//따라서 순서가 중요한 경우에는 .then() 안에 다음 실행될
//파트를 적어줘야함

// folder
fs.mkdir('sub-folder').catch(console.error);

fs.readdir('./')
.then(console.log)
.catch(console.error);