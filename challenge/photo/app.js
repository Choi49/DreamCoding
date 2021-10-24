//A script to sort backup images and videos.
//second argument will be the folder which will be sorted.
const path = require('path');
const fs = require('fs');
const os = require('os')


const folder = process.argv[2];

const test = path.join(os.homedir(),'Pictures',folder);
//Use join to make an absolute path!!
//'\' can cause many issues. For example, '\' is not read correctly in String.
console.log('isAbsolute?',path.isAbsolute(test));

//check if 'video','duplicated' and 'screenshot' directories exist. Unless, make the directories.
if (!fs.existsSync(path.join(test,'video'))) {
    console.log(1);
    fs.mkdirSync(path.join(test,'video'));
}

if (!fs.existsSync(path.join(test,'duplicated'))) {
    fs.mkdirSyncmkdir(path.join(test,'duplicated'));
}

if (!fs.existsSync(path.join(test,'screenshot'))) {
    fs.mkdirSyncmkdir(path.join(test,'screenshot'));
}

fs.promises.readdir(test) //read files in the directory
.then(processFiles)// .then((files) => processFiles(files))
.catch(console.error);


function processFiles(files) {
    files.forEach( (file) => {
        console.log(file);
        //if the file is a video, then move it to the 'video' directory
        if (path.extname(file) === '.mp4' || path.extname(file) === '.mov') {
            const prevfile = path.join(test,file);
            const newfile = path.join(test,'video',file);
            fs.promises.rename(prevfile, newfile).catch(console.error);
        }
        //if the file's extname is aae or png, then move it to the 'screenshot' directory
        if (path.extname(file) === '.aae' || path.extname(file) === '.png') {
            const prevfile = path.join(test,file);
            const newfile = path.join(test,'screenshot',file);
            fs.promises.rename(prevfile, newfile).catch(console.error);       }
        //if a file is an IMG file and there is the IMG file with the same number following E, then move it to the 'duplicated' directory.
        if (file.startsWith('IMG')){
            const split = file.split('_');
            if (files.includes('IMG_E'+split[1])){
                const prevfile = path.join(test,file);
                const newfile = path.join(test,'duplicated',file);
                fs.promises.rename(prevfile, newfile).catch(console.error);            }
        }
    })
}

