const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'info',
    description: 'Bot Info',
    execute(client, message) {
        const embed = new MessageEmbed()
        .setTitle(`Contribute - Github`)
        .setURL(client.config.discord.info.infoURL)
        .setDescription(`A discord music bot written in NodeJS using Discord.js
        Made by :- 
        ${client.config.discord.info.discordID}
        ${client.config.discord.info.githubID}`)
        .setThumbnail(client.config.discord.info.imgURL)
        message.channel.send(embed);
    }
}