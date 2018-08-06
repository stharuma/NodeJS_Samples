var fs = require('fs');
var readString_sync=fs.readFileSync('test1.txt','utf8');
console.log(readString_sync);
fs.writeFileSync('test2.txt',readString_sync);