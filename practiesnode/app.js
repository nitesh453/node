/*const color = require('cli-color'); 
/*(function(exports,module,require,__dirname,__filename) {
//npm moddules
//const color require('cli-color')
  
})()  
console.log(color.green('hello everyone'));  */

//local modules
// const auth =  require('./export');
 // auth.register('nitesh');
  
   // auth.login('Nitesh','ssecret');
   //dir name
 const path  = require('path');  
  /* console.log(`folder name ${path.dirname(__filename)}`);

  //file name
  console.log(`file name ${path.basename(__filename)}`);

  //Extension name
  console.log(`folder name ${path.extname(__filename)}`);  */

  //parse all object
  //console.log('parse',path.parse(__filename));

  //join this it join the url
  
   // console.log('join',path.join('./practiesnode','order','index.js'));

   const fs = require('fs');
//folder create
  /* fs.mkdir(path.join(__dirname,'/test'),(err)=>{
     if(err) {
       console.log('something went wrong');
     }
     else {
       console.log('folder create suseesfully');
     }
   }); 
//file crate
   fs.writeFile(path.join(__dirname,'test','test.txt'),

  'hello node\n',(err)=>
  {
    if(err){
      throw err
    }
    else {
      console.log('file created');
    }
  }) 
//apeend data
  fs.appendFile(path.join(__dirname,'test','test.txt'),'how are you',(err)=>
  {
    if(err){
      throw err
    }
    else 
    console.log('update sucsuessfully');
  });  

  //read file
   fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=>{
     if(err){
       throw err
     }
     //const content = Buffer.from(data)
     //console.log(content.toString());
     console.log(data);
   })  
 
   //os modules
   const os = require('os');
     
   console.log('os type',os.type());
   console.log(os.arch());
   console.log(os.freemem());
   console.log(os.totalmem());
   console.log(os.uptime());
   
   console.log(os.cpus());  

   const Emitter = require('events');

   const myemitter = new Emitter();

   myemitter.on('someone',(data) =>{
     console.log(data);
   })
   myemitter.emit('someone',{
     name:'nitesh paswan'
   })   */

   const http = require('http');
     
   const app = http.createServer((req,res) =>{
     res.writeHead(200,{
       'content-Type': 'text/html' //this is define the type and connection code
     })
     if(req.url == '/') {
      fs.readFile(path.join(__dirname,"test",'index.html'),(err,data)=>{
        if(err){
          throw err
        }
        res.end(data)
      })
     }
     else if(req.url == '/about') {
      fs.readFile(path.join(__dirname,"test",'about.html'),(err,data)=>{
        if(err){
          throw err
        }
        res.end(data)
      })
     }
   })
   const port = process.env.port || 3000

   app.listen(port,()=>{
     console.log(`listen the port ${port}`);
   })