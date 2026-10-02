const fs= require('node:fs');
console.log('start of the script');
//[Sync]==>Blocking Operations
// const content=fs.readFileSync('notes.txt','utf-8');
// console.log('Contents',content);
//[Aysnc]==>Non Blocking 
fs.readFile('notes.txt','utf-8',function (error,data) {
    if(error) console.log(error);
    else console.log('Contents got ',data); 
});
console.log('End of the Script');

