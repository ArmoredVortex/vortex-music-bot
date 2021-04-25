const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    description: 'Lists all available commands',
    execute(client,message){
        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setThumbnail(client.user.avatarURL())
        .setTitle(`**List Of all Commands**`)
        client.commands.forEach(command => {
            embed.addField(`**${command.name}**`,command.description,true)
        });
        message.channel.send(embed)
    }
}