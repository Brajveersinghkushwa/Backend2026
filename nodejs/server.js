import { createServer} from 'node:http';
import fs from 'fs';


const server = createServer((req, res) => {
    fs.readFile('home.html','utf-8', (err,data)=>{
        if(err){
            res.writeHead(500,{'Content-Type':';text/html'})
            return console.log('Error in reading file',err);
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data);
        }
    })
   
});

const PORT = 3000;  
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
}); 