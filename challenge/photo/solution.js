const path = require('path')
const fs = require('fs')
const os = require('os')

const folder = process.argv[2];
console.log(os.homedir());
// const workingDir = path.join(os.homedir(), 'Pictures', folder);
if(!folder) {
    console.error('Please enter folder name in Pictures')
}