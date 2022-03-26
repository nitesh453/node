const fs = require("fs");
//creating a new file
//fs.writeFileSync('read.txt','wlcome to my world!');

//fs.writeFileSync('read.txt','nitesh,wlcome to my world!');
//fs.appendFileSync('read.txt',"  how are you iam fine thank you):");

 //const buf_data = fs.readFileSync('read.txt');
 //console.log(buf_data);
 //org_data = buf_data.toString();
 //console.log(org_data);

 //to rename the file name

 fs.renameSync('read.txt', 'readwrite.txt');

 /* <Buffer 6e 69 74 65 73 68 2c 77 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 77 6f 72 6c 64 21 68 6f 77 20 61 72 65 20 79 6f 75 20 69 61 6d 20 66 69 6e 65 20 74 68 61 ... 8 more bytes>

          node js include one more data type called buffer,
          buffer is mainly used to store binary data,
          while readding from file or receving packets over the netwok.
          */