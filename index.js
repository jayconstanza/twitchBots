const tmi = require('tmi.js');
const AUTH = require('./keys');
const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: AUTH.USERNAME,
		password: 'oauth:' + AUTH.TWITCH
	},
	channels: AUTH.CHANNELS
});
const commandsAvailable = {
  voyatenersuerte: {
    videos: [
      "https://www.youtube.com/watch?v=WNSO3EaeiYI",
      "https://www.youtube.com/watch?v=R-zAtkI4QRA",
      "https://www.youtube.com/watch?v=cMTAUr3Nm6I",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
			"https://www.youtube.com/watch?v=uk9mi4ue0lo",
			"https://www.youtube.com/watch?v=qBiNWUJivoM"
    ],
		messages: [
			"NO",
			"ERES BOBO, NO",
			"DAS PENA",
			"SÍ",
			"CLARO 😀, que no",
			"COMPRA LOTERÍA, ESTÁS DE SUERTE, TE HE CONTESTADO.",
			"TU MADRE ESTÁ MÁS CALVA QUE LA MUJER DE WILL SMITH",
			"SUSCRÍBETE CON PRIME https://help.twitch.tv/s/article/how-to-subscribe?language=es#Prime"
		]
  }
}

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `KLK @${tags.username} 😘`);
	}

  if(message.toLowerCase() === '!voyatenersuerte') {
		var rn = Math.floor(Math.random() * Object.keys(commandsAvailable.voyatenersuerte).length);
		if (rn === 0 )
			client.say(channel, `@${tags.username}, ${commandsAvailable.voyatenersuerte.videos[Math.floor(Math.random() * commandsAvailable.voyatenersuerte.videos.length)]}`);
		else if (rn === 1 )
			client.say(channel, `@${tags.username}, ${commandsAvailable.voyatenersuerte.messages[Math.floor(Math.random() * commandsAvailable.voyatenersuerte.messages.length)]}`);
	}
});


