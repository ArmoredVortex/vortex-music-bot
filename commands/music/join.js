module.exports = {
    name: 'join',
    description: 'Connects/ Moves the bot to a voice channel',
    execute(client,message) {
        if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);

        try {
            message.member.voice.channel.join();
            message.channel.send(`Joined **${message.member.voice.channel.name}**`);
        } catch (error) {
            message.channel.send('There was an error joining the voice channel');
            console.log(error);
        }
    }
}