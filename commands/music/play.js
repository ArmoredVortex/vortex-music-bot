module.exports = {
    name: 'play',
    description: 'Usage : `play [song name]` Alt: resume paused song',
    execute(client,message,args) {
        if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are Not in the same voice as the bot`);
        if(!client.player.getQueue(message)){
            if (!args[0]) return message.channel.send(`Want me to play a song for you? Atleast supply a title`);
        }
        if (!args[0] && client.player.getQueue(message).paused){
            client.player.resume(message);
            return message.channel.send(`Song ${client.player.getQueue(message).playing.title} resumed !`);
        }
        try{
            client.player.play(message, args.join(" "), { firstResult: true })        
        } catch(err) {
            message.channel.send(`An Error occured. Please DM ArmoredVortex#8513 on Discord or raise and issue on Github and provide The error given below:-
`+"```"+err+"```")
        }
    }
}