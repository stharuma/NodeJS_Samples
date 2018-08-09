var fs = require('fs');
var readStream= fs.createReadStream('test2.txt', 'utf8');
//readStream.setEncoding('utf8');
//readStream inheried by EventEmiter
var data ='';
readStream.on('data', function(chunk)
{
   console.log('---------------------------');
    data += chunk;
   //     console.log('----------------------------');
//    console.log(chunk);

});
readStream.on('end', function(chunk)
{
    console.log(data);
    console.log('--------------END-------------');
});