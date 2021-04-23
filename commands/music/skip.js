module.exports = {
    name: 'skip',
    execute(client,message,args) {
        if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are Not in the same voice as the bot`);

        if (!client.player.getQueue(message)) return message.channel.send(`Dude! Play something first`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`**Skipped** current track.`);
    }
}