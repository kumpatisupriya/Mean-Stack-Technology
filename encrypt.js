var crypto=require('crypto');
var mykey=crypto.createCipher('aes-128-cbc','supriya');
var mystr=mykey.update('soup','utf8','hex')
mystr+=mykey.final('hex');
console.log(mystr);