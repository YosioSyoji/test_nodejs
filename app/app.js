const express = require('express');
const app = express();

const Redis = require('ioredis');
const redis = new Redis(6379,"redis");

var msg = "";

redis.set("foo","bar");
redis.get("foo",function(err,result){
	console.log(result);
});


// Or using a promise if the last argument isn't a function
redis.get("foo")
	.then(result => {
	  console.log("res:"+result);
	  msg = result;
	})
	.catch(err => {
	  console.error("err:"+err);
	});



redis.del("foo");


/*const redis = require('redis');
const client = redis.createClient(6379,"redis");
client.set("foo_rand000000000000000","OK");
client.get("foo_rand000000000000000",function(err,reply){
	console.log(reply.toString());
});*/


app.get('/',(req,res) => {
	
	return res.send(msg);
});

const PORT = 3000;
app.listen(PORT,() => {
	console.log('Server Listen port 3000');
});

