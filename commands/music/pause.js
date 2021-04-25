module.exports = {
    name: 'pause',
    description: 'Pause the current song',
    execute(client,message){
        if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are Not in the same voice as the bot`);
        if (!client.player.getQueue(message)) return message.channel.send(`Dude! Play something first`);

        if (client.player.getQueue(message).paused) return message.channel.send(`I cannot Pause it more than that! Its literally paused`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`Paused **${client.player.getQueue(message).playing.title}**!`);
    }
}