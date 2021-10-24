//Fixed size chunk of memory
//array of integers, byte of data

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);//buffer is an array
console.log(buf[1]);
console.log(buf.toString());

//create
const buf2 = Buffer.alloc(2);//create a buffer of size 2
const buf3 = Buffer.allocUnsafe(2);//빠르지만 초기화 안되어있을 수도 있음
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());
console.log(buf2);
console.log(buf3);

//copy
buf2.copy(buf3);

//concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());