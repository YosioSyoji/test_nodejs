const express = require('express');
const app = express();

const redis = require('redis');
//const client = redis.createClient();
const client = redis.createClient(6379,"redis");


client.set("foo_rand000000000000000","OK");
client.get("foo_rand000000000000000",function(err,reply){
	console.log(reply.toString());
});


app.get('/',(req,res) => {
	return res.send('test');
});

const PORT = 3000;
app.listen(PORT,() => {
	console.log('Server Listen port 3000');
});

