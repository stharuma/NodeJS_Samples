
var events = require('events');
var util = require('util');
var eventEmitter = new events.EventEmitter;
// directly call eventEmit
eventEmitter.on('clicked', function(button){
  console.log(button+' is cloicked');
});
eventEmitter.emit('clicked', 'button link')

//Using util by Inherited  Eventemit 
var Students =function(name, age){
    this.name=name;
    this.age =age;
}

util.inherits(Students, events.EventEmitter);
var student1=new Students('Mike', '21');
student1.on('scored',function(mark){
    console.log('Name: '+student1.name +' Age:  '+student1.age+' mark: '+mark)
});
student1.emit('scored', 78);