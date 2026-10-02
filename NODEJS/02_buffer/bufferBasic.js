const {Buffer}= require('buffer');
// const buf=Buffer.alloc(4);
// console.log(buf);


// const buf=Buffer.from('Hello Pavan');
// console.log(buf);
// console.log(buf.toString());

// const buf2=Buffer.allocUnsafe(4);
// console.log(buf2);


// const buf=Buffer.alloc(10);
// buf.write('Hello');
// console.log(buf.toString());

// const buf=Buffer.from('Hello Pavan');
// console.log(buf.toString());
// console.log(buf.toString('utf8',0,));

// const buf=Buffer.from('AaBbCc');
// console.log(buf);
// buf[0]=0x4A;
// console.log(buf);
// console.log(buf.toString());

const buf1=Buffer.from("hello");
const buf2=Buffer.from(" world");
const merged=Buffer.concat([buf1,buf2]);
console.log(merged.toString());
console.log(merged.length);