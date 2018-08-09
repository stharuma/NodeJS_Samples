var fs = require('fs');
var readStream= fs.createReadStream('test2.txt');
readStream.setEncoding('utf8');
var writeStream = fs.createWriteStream('write_test.txt');
//readStream inheried by EventEmiter
var data ='';
readStream.on('data', function(chunk)
{
   console.log('---------------------------');
    data += chunk;
 });
readStream.on('end', function(chunk)
{
    writeStream.write(data);
    console.log('--------------END-------------');
});