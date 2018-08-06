var fs = require('fs');
//remove test file
// fs.unlink('test3.txt',function(err){
//     if(err) return console.log(err);
// console.log('file deleted successfully');});
// create directive
// fs.mkdirSync('test1',function(err){
//     if(err) return console.log(err);
// console.log('Directive created successfully');});
// //remove directive 
// fs.rmdirSync('test',function(err){
//     if(err) return console.log(err);
// console.log('Directive deleted successfully');});

//Asyncronize create directive
// fs.mkdir('node',function(){
//     fs.writeFile('./node/first.txt',"This file is dummy" )
// });
// remove dir with file
fs.unlink('./node/first.txt',function(){
    fs.rmdir('node');
});