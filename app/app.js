const express = require('express');
const app = express();

app.get('/',(req,res) => {
	return res.send('test');
});

const PORT = 3000;
app.listen(PORT,() => {
	console.log('Server Listen port 3000');
});
