import {
	Client,
	Intents,
	MessageManager
} from 'discord.js';

const client = new Client({
	intents: [Intents.FLAGS.GUILDS]
})
  
client.once('ready', () => {
	console.clear();
	console.log('BOT is now Online!');
});

client.on('ready', async () => {
	const channel = client.channels.cache.get(process.env.channel_id);

	function sleep(millis) {
		return new Promise(resolve => setTimeout(resolve, millis));
	}
	while(true){
		await channel.messages.fetch({ limit: 100 }).then(messages => {
			if(messages.size > 1){
				console.log(`Received ${messages.size} messages`);
				//Iterate through the messages here with the variable "messages".
				messages.forEach(msg => {
					//console.log(msg.createdTimestamp);
					var Fifteen_minute = 3 * 60 * 1000;
					console.log("15mins: "+Fifteen_minute);
					var FifteenMinsAgo = Date.now() - Fifteen_minute;
					console.log("FifteenMinsAgo: "+FifteenMinsAgo);
					console.log("Date now: "+Date.now());

					if (!((msg.createdTimestamp) > FifteenMinsAgo)){
						console.log("15mins ago");
						msg.delete();
					} else {
						console.log("not 15mins ago");
					}
				});
			}
		});
	}
})

client.login(process.env.token);