const Discord = require("discord.js");
const {prefix, token}  = require("./config.json");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("AkharusBot is ready...");
});

client.on("message", (message) => {
	if( !(message.content.startsWith(prefix) || message.author.bot)) {
		return
	} else	{
		const parts = message.content.slice(1).split(" ");
		const cmd = parts[0];
		const args = parts.slice(1).join(" ");
		console.log(`Parsing ${message}...`);
		console.log(`Command: ${cmd}...`);
		console.log(`args: ${args}...`);
		if (message.content === `${prefix}ping`) {
			message.channel.send("pong!");
		}
	}
});

client.login(token);
