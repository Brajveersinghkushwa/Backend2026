const fs = require('fs');
const filepath = process.argv[2];
if(!filepath){
    console.error('peasle provide the right path of the  file0');
    process.exit(1);

}
fs .readFile(filepath,'utf-8',(err,data)=>{
    if(err){
        console.log('Error in reading file',err);
        process.exit(1);
    }
    else{
        const wordcount  = data.trim().split(/\s+/);
        console.log(`the file contains ${wordcount.length} words`);
    }
})