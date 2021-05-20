const milliseconds = require('timestamp-to-milliseconds');
module.exports = {
	name : 'seek',
	description : '`seek [seconds]. Jump through time',
	execute(client,message,args){
		let ms;
		  if (!message.member.voice.channel) return message.channel.send(`You can only execute this command after joining a voice channel`);
          if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are Not in the same voice as the bot`);
          if (!args[0]) {
          	return message.channel.send('No argument provided')
          }
    	  if (!client.player.getQueue(message)) return message.channel.send(`Dude! Play something first`);
    	  try {
    	  	ms = milliseconds(args[0]);
    	  } catch(err){
    	  	return message.channel.send('Expected format `00:00:00`')
    	  }
    	  if (!Number.isInteger(ms)){
    	  	return message.channel.send('Expected format `00:00:00`');
    	  }
    	  try{
            client.player.seek(message,ms)    
        } catch(err) {
            message.channel.send(`An Error occured. Please DM ArmoredVortex#8513 on Discord or raise and issue on Github and provide The error given below:-
`+"```"+err+"```")
        }

	}
}