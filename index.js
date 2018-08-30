const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
	bot.user.setGame("Commande: !gcinfo");
	console.log("Connected");
})

bot.login(process.env.TOKEN)


bot.on('message', message => {
	if (message.content === prefix + "gcinfo"){
		message.channel.sendMessage("Salutation! Si tu as eu la curiosité de venir me voir c'est pour savoir qui je suis. :D\nJe suis un **BOT Partenaire** à l'image de **Geek-Crafts**.\nIl s'agit d'**une boutique** spécialisée dans le **Bead Sprite**. Je te laisse visiter leur site web pour découvrir de quoi il s'agit. ;)\nhttp://geek-crafts.fr");
	}
});