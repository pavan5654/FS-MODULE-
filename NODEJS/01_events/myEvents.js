const EventEmitter= require('events');
const eventEmitter=new EventEmitter();
eventEmitter.on('greet',(username)=>{
    console.log(`Hello, ${username}! Welcome to the event emitter example!`);
});

eventEmitter.once('push',()=>{
    console.log('This will be executed only once when the push event is emitted.');
});
// eventEmitter.emit('greet','pavan');
// eventEmitter.emit('push');
// eventEmitter.emit('push'); // This will not be executed since it's a 'once' event
// eventEmitter.emit('greet','Kishore');

// const myListener=()=>console.log('This is a custom listener for the myEvent event.');
// eventEmitter.on('myEvent',myListener);
// eventEmitter.emit('myEvent');
// eventEmitter.emit('myEvent');
// eventEmitter.removeListener('myEvent',myListener);
// eventEmitter.emit('myEvent'); 



eventEmitter.on('greet',(username)=>{
    console.log(`Hello, ${username}! Welcome to the nodeJs`);
});
console.log(eventEmitter.listeners('greet'));
