
// create a folder named it nik
//create file in it named bio.txt and data into it.
// add more dat into the file at the end of the existing data.
//read the data without getting the buffer data at first.
//rename the file name to mybio.txt
//now delete both the file and the folder
 

const fs = require('fs');


  //fs.mkdirSync('nik');
//agar file alg locatin par hai lekin app ki working folder alg hai to uska use name/name/.../filenmae.txt
  //fs.writeFileSync('nik/bio.txt',"hello my name is nitesh paswan");

 //fs.appendFileSync('nik/bio.txt',"  addares: shanti nagar rishikesh");

/* var data = fs.readFileSync('nik/bio.txt');
 data = data.toString();
 console.log(data); */

 //fs.renameSync('nik/bio.txt','nik/mybio.txt');

 //fs.unlinkSync('bio.txt');

 fs.rmdirSync('nik');