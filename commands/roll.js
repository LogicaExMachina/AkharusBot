module.exports = {
    name: 'roll',
    description: 'RollDice',
    execute(message, args) {
			size = parseInt(args);
			console.log(`Size: ${size}...`);
			if(!isNaN(size)) {
				result = Math.floor(Math.random()*size)+1;
				message.channel.send(result);
			}
		}
};
