const ChatRoom =require('./chatRoom.js');
 

const chat=new ChatRoom();
chat.on('join',(user)=>{
    console.log(`${user} has joined the chat room.`);
});

chat.on('message',(user,message)=>{
    console.log(`${user}: ${message}`);
});


chat.on('leave',(user)=>{
    console.log(`${user} has left the chat room.`);
});


//simulating the chat

chat.join('Pavan');
chat.join('Kishore');

chat.sendMessage('Pavan','Hello Kishore!');
chat.sendMessage('Kishore','Hi Pavan! How are you?');

chat.leave('Pavan');
chat.sendMessage('Pavan','Are you there?');  
chat.leave('Kishore');
