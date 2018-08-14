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
		const parts = message.content.slice(1).split(" ");
		const cmd = parts[0];
		const args = parts.slice(1).join(" ");
		console.log(`Parsing ${message}...`);
		console.log(`Command: ${cmd}...`);
		console.log(`args: ${args}...`);
		if (cmd === "ping") {
			message.channel.send("pong!");
		}
		else if (cmd === `roll`) {
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
