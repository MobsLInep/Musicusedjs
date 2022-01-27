const i18n = require("../util/i18n");
const Discord = require("discord.js");

module.exports = {
	name: "ping",
	cooldown: 10,
	description: i18n.__("ping.description"),
	async execute(message) {
		const embed = new Discord.MessageEmbed()
			.setTitle(":ping_pong: Pong!")
			.setDescription(`Ping ${message.client.ws.ping} ms.`);
		const msg = await message.reply(embed);
		const embed1 = new Discord.MessageEmbed()
			.setTitle(":ping_pong: Pong!")
			.setDescription(
				`Ping ${message.client.ws.ping} ms.\nMessage ping: ${
					msg.createdTimestamp - message.createdTimestamp
				} ms.`
			);
		msg.edit(embed1);
	}
};
