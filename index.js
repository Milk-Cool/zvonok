const TelegramBot = require("node-telegram-bot-api");
const http = require("http");

const bot = new TelegramBot(process.env["TOKEN"], { "polling": true });

http.createServer((req, res) => {
	if(req.url == "/")
		bot.sendMessage(process.env["USER_ID"], "Кто-то звонит вам в дверь!");
	res.writeHead(200);
	res.end("OK");
}).listen(process.env["PORT"]);
