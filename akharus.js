const Discord = require("discord.js");
const {prefix, token}  = require("./config.json");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("AkharusBot is ready...");
});

client.on("message", (message) => {
	if( (!message.content.startsWith(prefix)) || message.author.bot) {
		return
	} else	{
		const args = message.content.slice(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();

		console.log(`Parsing ${message}...`);
		console.log(`Command: ${command}...`);
		console.log(`args: ${args}...`);
		if (command === "ping") {
			message.channel.send("pong!");
		}
		else if (command === `roll`) {
			size = parseInt(args);
			console.log(`Size: ${size}...`);
			if(!isNaN(size)) {
				result = Math.floor(Math.random()*size)+1;
				message.channel.send(result);
			}
		}
	}
});

client.login(token);
