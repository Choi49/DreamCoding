const fs = require('fs');

const data = [];

const readStream = fs.createReadStream('./file.txt',{
//   highWaterMark: 8, //한번에 얼마만큼 읽어 오는지, default = 64 kbytes
//    encoding: 'utf-8',
});


readStream.on('data', chunk => {
    data.push(chunk);
//    console.log(chunk);
});

readStream.on('error', error => {
    console.log(error);
});

readStream.on('end', () => {
    console.log(data.join(''));
});

//chaining

fs.createReadStream('./file.txt',{
    //   highWaterMark: 8, //한번에 얼마만큼 읽어 오는지, default = 64 kbytes
    //    encoding: 'utf-8',
    }).on('data', chunk => {
        data.push(chunk);
    //    console.log(chunk);
    }).on('error', error => {
        console.log(error);
    }).on('end', () => {
        console.log(data.join(''));
    });
    