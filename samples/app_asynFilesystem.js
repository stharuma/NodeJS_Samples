var fs = require('fs');
console.log("aysncronize file reading")
var readString_async = fs.readFile('test1.txt',
'utf8', function(err, data){
    if(err) console.log(err);
    console.log(data);
}
);
console.log("file read")
fs.writeFile('test4.txt',readString_async,function(err, data){
    if(err) console.log(err);
    console.log('success!!!!');
});