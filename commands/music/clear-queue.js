module.exports = {
	name : 'clear-queue',
	description : 'Clear guild queue',
	execute(client,message,args){
		if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are Not in the same voice as the bot`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`No music playing`);

        try{
        	client.player.clearQueue(message);
        	message.channel.send('Guild Queue **Cleared**');
        } catch(error){
            message.channel.send(`An Error occured. Please DM ArmoredVortex#8513 on Discord or raise and issue on Github and provide The error given below:-
`+"```"+err+"```")
        }
	}
}