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
 		message.channel.send('Processing =>'+'`'+text+'`').then(processing=>{
			processing.delete({timeout:5000})
		})
 		try{
			gtts.save(filepath, text , () => {
	  			message.channel.send("Here's the result:", {
	  				files: [
	    				path.join(__dirname,'out.mp3')
	  					]
				});
			})
		} catch(err) {
            message.channel.send(`An Error occured. Please DM ArmoredVortex#8513 on Discord or raise and issue on Github and provide The error given below:-
`+"```"+err+"```")
        }	}
}