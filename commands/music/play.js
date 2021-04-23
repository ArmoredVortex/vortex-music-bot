module.exports = {
    name: 'play',
    execute(client,message,args) {
        if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are Not in the same voice as the bot`);

        if (!args[0]) return message.channel.send(`Want me to play a song for you? Atleast supply a title`);

        client.player.play(message, args.join(" "), { firstResult: true });
    }
}