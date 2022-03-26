const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
console.log(os.userInfo());
console.log(os.networkInterfaces());
const freem = os.freemem();
console.log(`${freem /1024/1024/1024}`);

const total = os.totalmem();
console.log(`${total /1024/1024/1024}`);