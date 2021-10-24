let num = 1;
const interval = setInterval(() => {
    console.log(num++);
}, 1000);

setTimeout(()=>{
    console.log('Timeout!');
    clearInterval(interval);//stop interval
},6000)