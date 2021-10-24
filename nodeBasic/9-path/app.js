const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

//extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root
parsed.name

const str = path.format(parsed);
console.log(str); //기존 string 형태

//isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));//true
console.log('isAbsolute?', path.isAbsolute('../'));//false

//normalize
console.log(path.normalize('./folder////////////sub'));

//join
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
//운영체제 별로 seperator 가 다르니, path.sep을 이용하거나 path.join을 이용!!


