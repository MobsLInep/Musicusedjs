const Discord = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
	name: "help",
	aliases: ["h"],
	description: i18n.__("help.description"),
	async execute(message, args) {
		if (
			typeof args[0] == "undefined" ||
			!(
				args[0].toLowerCase() == "utility" ||
				args[0].toLowerCase() == "moderator" ||
				args[0].toLowerCase() == "waifu" ||
				args[0].toLowerCase() == "anime" ||
				args[0].toLowerCase() == "music" ||
				args[0].toLowerCase() == "about"
			)
		) {
			const embed = new Discord.MessageEmbed()
				.setTitle("Harmoni Bot")
				.setDescription(
					"**All Harmoni Commands Categories:** \nYou could type `-help <category>` for more info."
				)
				.setColor("0x109319")
				.setThumbnail(
					"https://cdn.discordapp.com/avatars/865876260748132353/17cc0e8ff24cbcdf4c2ea1a0f8456206.png?size=128"
				)
				.addFields(
					{
						name: "1. :gear:Utility:",
						value: "`whois`, `avatar`, `serverinfo`,`changeprefix`",
						inline: true
					},
					{
						name: "2. :tools:Moderator:",
						value: "`ban`, `kick`, `mute`, `unban`, `purge`",
						inline: true
					},
					{
						name: "3. :musical_note:Music(Delayed):",
						value: "`join`, `play`, `pause`, `resume`, `repeat`, `download`, `queue`, `reset`, `skip`, `song-info`, `volume`, `stop`, `leave`",
						inline: false
					},
					{ name: "4. Anime/Waifu:", value: "`waifu`, `maid`, `random`, `neko`", inline: true },
					{
						name: "5. :robot:About(Bot and Dev)",
						value: "`aboutdev`, `ping`, `invite`",
						inline: true
					},
					{
						name: "**Extra Links**",
						value: "[**Invite Link**](https://discord.com/api/oauth2/authorize?client_id=865876260748132353&permissions=8&scope=bot)  •   [**Support Server**](https://discord.gg/ReTdc9dFuP)  • [**Upvote**](https://top.gg/bot/865876260748132353/vote)",
						inline: false
					}
				)
				.setTimestamp()
				.setFooter(
					`Harmoni Bot version-Beta 1.5. More features will be added in the upcoming version.\nRequested by:${message.author.tag}`,
					message.author.avatarURL({ dynamic: true })
				);

			return message.channel.send(embed).catch(console.error);
		} else if (args[0].toLowerCase() == "utility") {
			const embed = new Discord.MessageEmbed()
				.setTitle("Utility Commands")
				.setDescription(
					"`-changeprefix [new prefix]`\nChanges the prefix of Harmoni for the server\n\n`-whois [member mention/id]`\nGives information about the user\n\n`-avatar (optional:Member)`\nGet the avatar of yourself or another user.\n\n`-serverinfo`\nGives information about the guild"
				)
				.setColor("0x109319")
				.setTimestamp()
				.setFooter(`Requested by:${message.author.tag}`, message.author.avatarURL({ dynamic: true }));
			return message.channel.send(embed).catch(console.error);
		} else if (args[0].toLowerCase() == "moderator") {
			const embed = new Discord.MessageEmbed()
				.setTitle("Moderator Commands")
				.setDescription(
					"`-ban [member] (optional:reason)`\nBans a member from the server.\n\n`-unban [member]`\nUnbans a pre-banned member from the server.\n\n`-kick [member] (optional reason)`\nKicks a member from the server.\n\n`-mute [member] (optional:reason)`\nTemporarily mutes a member in the server.\n\n`-purge [amount]`\nDeletes the amount of messages in the channel."
				)
				.setColor("0x109319")
				.setTimestamp()
				.setFooter(`Requested by:${message.author.tag}`, message.author.avatarURL({ dynamic: true }));
			return message.channel.send(embed).catch(console.error);
		} else if (args[0].toLowerCase() == "waifu" || args[0].toLowerCase() == "anime") {
			const embed = new Discord.MessageEmbed()
				.setTitle("Anime/Waifu Commands")
				.setDescription(
					"`-waifu`\nDisplay an image with the 'waifu' tag.\n\n`-maid`\nDisplay an image with the 'maid' tag.\n\n`-random`\nDisplay an image with the 'all' tag.\n\n`-neko`\nDisplay an image with the 'neko' tag."
				)
				.setColor("0x109319")
				.setTimestamp()
				.setFooter(`Requested by:${message.author.tag}`, message.author.avatarURL({ dynamic: true }));
			return message.channel.send(embed).catch(console.error);
		} else if (args[0].toLowerCase() == "music") {
			return message.channel.send("Working on music commands...");
		} else if (args[0].toLowerCase() == "about") {
			const embed = new Discord.MessageEmbed()
				.setTitle("About Commands")
				.setDescription(
					"`-aboutdev`\nGives a general info about the developer of Harmoni Bot.\n\n`-ping`\nTells you the current latency of Hormoni bot.\n\n`-invite`\nGives a invite link for Harmoni Bot."
				)
				.setColor("0x109319")
				.setTimestamp()
				.setFooter(`Requested by:${message.author.tag}`, message.author.avatarURL({ dynamic: true }));
			return message.channel.send(embed).catch(console.error);
		}
	}
};
