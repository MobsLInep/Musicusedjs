const i18n = require("../util/i18n");
const Discord = require("discord.js");

module.exports = {
	name: "invite",
	description: i18n.__("invite.description"),
	execute(message) {
		const embed = new Discord.MessageEmbed().setTitle("Invite Link").setColor("0x3498db").addFields(
			{
				name: "If you wish to add me in your server:",
				value: "[Click here to add](https://discord.com/api/oauth2/authorize?client_id=865876260748132353&permissions=8&scope=bot)",
				inline: false
			},
			{
				name: "Support Server for Harmoni:",
				value: "[Discord Server](https://discord.gg/ReTdc9dFuP)",
				inline: false
			}
		);
		return message.member.send(embed).catch(console.error);
	}
};
