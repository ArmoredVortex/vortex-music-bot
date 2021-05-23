var gtts = require('node-gtts')('en');
var path = require('path');
module.exports = {
	name: 'tts',
	description: 'Converts Text provided to audio',
	execute(client,message,args){
		if(!args[0]){
			message.channel.send('No Text provided');
		}
		let text = args.join(' ');
		var filepath = path.join(__dirname, 'out.mp3');
 		message.channel.send('Processing =>'+'`'+text+'`');
		gtts.save(filepath, text , () => {
  			message.channel.send("Here's the result:", {
  				files: [
    				path.join(__dirname,'out.mp3')
  					]
}			);
		})
	}
}