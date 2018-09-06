module.exports = {
    name: 'roll',
    description: 'RollDice',
    execute(message, args) {
			var content = args.join();
			if(content.includes("d")) {
				//split on d
				var re = /([0-9]*)[dD]([0-9]+)/;
				res = re.exec(content);
				var result = 0;
				console.log(res);
				if(null != res) {
					for(var i = 0; i< res[1]; i++) {
						var die = Math.floor(Math.random()*res[2])+1;
						result += die;
						console.log("Die: " + die);
					}
				}
			}
			else {
				size = parseInt(args);
				if(!isNaN(size)) {
					result = Math.floor(Math.random()*size)+1;
				}
			}
			message.channel.send(result);
		}
};

