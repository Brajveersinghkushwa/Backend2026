const fs =require('fs');
fs.readFile('data.txt', "utf8", (err, data) =>{
    if(err){
        console.log('Error in reading file',err);
    }
    else{
        console.log('File data:',data)
    }

} )