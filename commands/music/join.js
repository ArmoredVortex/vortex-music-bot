module.exports = {
    name: 'join',
    execute(client,message) {
        if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are Not in the same voice as the bot`);

        try {
            message.member.voice.channel.join();
            message.channel.send(`Joined **${message.member.voice.channel.name}**`);
        } catch (error) {
            message.channel.send('There was an error joining the voice channel');
            console.log(error);
        }
    }
}