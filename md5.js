const crypto = require('crypto')

const md5sum = crypto.createHash('md5');
let str = "Hello";

const res = md5sum.update(str).digest('hex');
console.log(res);