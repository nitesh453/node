
const fs = require('fs');

const biodata = {
    name: "niteah",
    age: 20,
    father:'arvind',
    add: "sahnti nagar rishikesh"
};
const jsondata = JSON.stringify(biodata);
  console.log(jsondata);

  const objdata = JSON.parse(jsondata);
        console.log(objdata);

        //convert to json
        //add to another file
        //readfile
        //again convert to object
        //console.log

 /* fs.writeFile('jsonf.json',jsondata,(err) =>{
       console.log("error");
   });  */
   
   fs.readFile('jsonf.json','utf-8',(err,data) => {
    const orgdata = JSON.parse(data); 
    console.log(orgdata);
   });
