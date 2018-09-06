module.exports = {
    name: 'roll',
    description: 'RollDice',
    execute(message, args) {
			var content = args.join();
			var seq = content.split(';');
			var result = "";
			const sep = "";
			seq.forEach((e) => {
				t = roll(e);
				console.log(t);
				result += t + "\n";

			});
			message.channel.send(result);
		}
};

function roll(value) {
	var result = 0;
	if(value.includes("d")) {
		var re = /([0-9]*)[dD]([0-9]+)([\-+][0-9]+)*/;
		res = re.exec(value);
		console.log(res);
		if(null != res) {
			var count = res[1];
			var size = res[2];
			var mod = parseInt(res[3]);
			if(isNaN(mod)) {
				mod = 0;
			}
			for(var i = 0; i< count; i++) {
				var die = Math.floor(Math.random()*size)+1;
				result += die;
			}
			result += mod;
		}
	}
	else {
		size = parseInt(value);i
		if(!isNaN(size)) {
			result = Math.floor(Math.random()*size)+1;
		}
	}
	return result;
}
