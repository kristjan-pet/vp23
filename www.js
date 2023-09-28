const http = require("http");
http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Kristjan Petersell</title></head><body>');
	res.write('<h1>Kristjan Petersell</h1><p>See veebileht on valminud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate intituudi informaatika eriala õppetöö raames.</p>');
	res.write('<hr></body></html>');
	console.log("Keegi vaatab!");
	return res.end();
}).listen(5113);

//rinde port 5100