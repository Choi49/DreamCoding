const { EventEmitter } = require('stream');
const logger = require('./logger.js');
// const EventEmitter = require('events');
// const emitter = new EventEmitter();이렇게 만들면 보내는 emitter 와 받는 emitter가 서로 다른 녀석이므로 작동 x
// 따라서 동일한 event 객체를 써야함
const emitter = new logger.Logger();

emitter.on('log', (event) => {
    console.log(event);
}) 


emitter.log(() => {
    console.log('..... doing something!');
})