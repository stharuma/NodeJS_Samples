//Global Objects
// require, exports, console, setTimrout, SetInterval,
//class:buffer, __dirname, __filename, module, global, 
var time=0;
var timer = setTimeout(function(){
   console.log("2 sec have passed");
}, 2000);

 timer = setInterval(function(){
   time+=2;  
   console.log(time +" have passed");
   if(time>2){
       clearInterval(timer);
   }    
}, 2000);

console.log(__dirname);
console.log(__filename);