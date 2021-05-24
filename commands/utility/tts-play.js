var gtts = require('node-gtts')('en');
var path = require('path');
var mp3Duration = require('mp3-duration');
module.exports = {
	name: 'tts-play',
	description: 'Converts Text provided to audio and plays it in voiceChannel',
	execute(client,message,args){
		if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are Not in the same voice as the bot`);

		if(!args[0]){
			message.channel.send('No Text provided');
		}
		if(client.player.isPlaying){
	  		return message.channel.send("There is music already playing in the server")
	  	}
		let text = args.join(' ');
		var filepath = path.join(__dirname, 'out.mp3');
		message.channel.send('Processing =>'+'`'+text+'`').then(processing=>{
			processing.delete({timeout:5000})
		})
 		try {
			gtts.save(filepath, text , () => {
	  			const { voice } = message.member;
	  			voice.channel.join().then((connection)=>{
	  				connection.play(path.join(__dirname,'out.mp3'))
	  				message.channel.send(`Playing in **${voice.channel.name}**`);
	  				mp3Duration(path.join(__dirname,'out.mp3'),(err,duration)=>{
	  					setTimeout(()=>{
	  						voice.channel.leave();
	  					},(duration * 1000)+200)
	  				})
	  			})
			})
		} catch(err) {
            message.channel.send(`An Error occured. Please DM ArmoredVortex#8513 on Discord or raise and issue on Github and provide The error given below:-
`+"```"+err+"```")
        }
	}
}

// if (client.player.isPlaying) {
				// 	client.player.pause(message);
				// 	message.channel.send('Song Paused')
				// 	voice.channel.join().then(connection => {
				// 		connection.play(path.join(__dirname,'out.mp3'),()=>{
				// 			message.channel.send('test')
				// 			mp3Duration(path.join(__dirname,'out.mp3'),(err,duration)=>{
	  	// 						setTimeout(()=>{
	  	// 							client.player.resume(message);
    //         						client.player.pause(message);
    //         						client.player.resume(message);
    //         						message.channel.send('Resuming Music')
	  	// 						},(duration * 1000)+200)
	  	// 					})
				// 		})
				// 	})
				// 	return;
				// }