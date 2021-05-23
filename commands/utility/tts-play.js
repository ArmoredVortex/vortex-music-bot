var gtts = require('node-gtts')('en');
var path = require('path');
module.exports = {
	name: 'tts-play',
	description: 'Converts Text provided to audio and plays it in voiceChannel',
	execute(client,message,args){
		if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are Not in the same voice as the bot`);

		if(!args[0]){
			message.channel.send('No Text provided');
		}
		let text = args.join(' ');
		var filepath = path.join(__dirname, 'out.mp3');
 		message.channel.send('Processing =>'+'`'+text+'`');
		gtts.save(filepath, text , () => {
  			const { voice } = message.member;
  			message.channel.send(`Joined **${voice.channel.name}**`);
  			voice.channel.join().then((connection)=>{
  				connection.play(path.join(__dirname,'out.mp3'));
  			})
		})
	}
}