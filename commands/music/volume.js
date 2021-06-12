module.exports = {
	name : 'volume',
	description : 'Change Player volume',
	execute(client,message,args){
		if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);
	    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel as the bot`);
       	if (!client.player.getQueue(message)) return message.channel.send(`Dude! Play something first`);
		if (!args[0]){
			return message.channel.send('Volume level not specified')
		}
		if (args[0] < 0 || args[0] > 100){
			return message.channel.send('Expected Input: `0-100`')
		}

		const success = client.player.setVolume(message,args[0])
		if(success){
			message.channel.send('Set Player volume to : ' + args[0])
		}
	}
}
