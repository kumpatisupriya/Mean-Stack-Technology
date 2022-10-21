var crypto=require('crypto');
var mykey=crypto.createCipher('aes-128-cbc','supriya');
var mystr=mykey.update('f7d023c3ef6cd5e6ea1623207bb263c5','hex','utf8')
mystr+=mykey.final('utf8');
console.log(mystr);