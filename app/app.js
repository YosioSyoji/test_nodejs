const express = require('express');
const app = express();

var Redis = require('ioredis');
var redis = new Redis(6379,"redis");




/*
const normalFunction = () => {
	    asyncFunction1(); // 実行を開始するが終了を待つことなく次に進む
	    console.log('normalFunction(): end');
};
const asyncFunction1 = async () => {
	    await asyncFunction2(); //function2 実行が終わるのを待つ
	    console.log('asyncFunction1(): end');
};
const asyncFunction2 = async () => {
	    await promise; //promise 実行が終わるのを待つ
	    console.log('asyncFunction2(): end');
};
const promise = new Promise(resolve => {
	    setTimeout(resolve, 1000); // 1 秒後に終了
});
normalFunction(); // 実行が終わってから次に進む
*/

// Or using a promise if the last argument isn't a function
/*redis.get("foo")
	.then(result => {
	  console.log("res:"+result);
	  msg = result;
	})
	.catch(err => {
	  console.error("err:"+err);
	});
	*/


//stored set
console.log("------------1");
redis.zadd("rank",100000000,'q001');
redis.zadd("rank",100000001,'q002');
redis.zadd("rank",100000002,'q003');
console.log("------------2");
const asyncRedisZrevrange= async(msg) => {
	console.log("asyncRedisZrevrange called");
	//const ret = await redis.zrevrangebyscore(msg,999999999,0);
	//const ret = await redis.zrange(msg,0,999999999);
	//
	const ret=await redis.zrange(msg, 0, 100, 'WITHSCORES');


	console.log("asyncRedisZrevrange:"+ret);
};
console.log("------------3");
asyncRedisZrevrange("rank").then( () =>{
	console.log("asyncRedisZrevrange execd");
});



//async test
/*
redis.set("foo","var2");
const asyncRedisget= async(msg) => {
	console.log("asyncRedisget called");
	const ret = await redis.get(msg);
	console.log("asyncRedisget:"+ret);
};
	//redis.del("foo");

asyncRedisget("foo").then( () =>{
	console.log("asyncRedisget execd");
});


app.get('/',(req,res) => {
	
	return res.send(msg);
});

const PORT = 3000;
app.listen(PORT,() => {
	console.log('Server Listen port 3000');
});
*/

