const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const pageHead = '<!DOCTYPE html>\n<html>\n<head>\n\t<meta charset="utf-8">\n\t<title>Kristjan Petersell</title>\n</head>\n<body>';
const pagebanner = '\n\t<img src="vp_banner_2023.png" alt="Veebiprogrammeerimise kursuse bänner">';
const pagebody = '\n\t<h1>Kristjan Petersell</h1>\n\t<p>See veebileht on valminud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate intituudi informaatika eriala õppetöö raames.</p>';
const pagefoot = '\n\t<hr>\n</body>\n</html>';
http.createServer(function(req, res){
	let currentURL = url.parse(req.url, true);
	console.log(currentURL);
	if (currentURL.pathname === "/"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pagebanner);
		res.write(pagebody);
		res.write('\n\t<hr>\n\t<p><a href="addname">Lisa oma nimi</a>!</p>');
		res.write(pagefoot);
		//console.log("Keegi vaatab!");
		return res.end();
	}
	else if (currentURL.pathname === "/addname"){
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pagebanner);
		res.write(pagebody);
		res.write('\n\t<hr>\n\t<h2>Lisa palun oma nimi</h2>');
		res.write('\n\t<p>Lisame veel asju!</p>')
		res.write(pagefoot);
		//console.log("Keegi vaatab!");
		return res.end();
	}
	else if (currentURL.pathname === "/vp_banner_2023.png"){
		console.log("Tahame pilti!");
		let bannerPath = path.join(__dirname, "public", "banner");
		//let bannerPath = path.join(__dirname, "public", "banner", "banner/vp_banner_2023.png");
		//console.log()
		fs.readFile(bannerPath + currentURL.pathname, (err, data)=>{
			if (err) {
				throw err;
			}
			else {
				res.writeHead(200, {"Content-type": "image/png"});
				res.end(data);
			}
		});
	}
	else {
		res.end("ERROR 404");
	}
	//return res.end();
}).listen(5113);

//rinde port 5100