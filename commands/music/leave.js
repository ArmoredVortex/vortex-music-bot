module.exports = {
    name: 'leave',
    execute(client,message) {
        if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are Not in the same voice as the bot`);

        if(!message.guild.me.voice.channel) {
            return message.channel.send('I am not in a voice channel');
        }
        message.guild.me.voice.channel.leave();
        message.channel.send(`Left **${message.guild.me.voice.channel.name}**`);
    }
}