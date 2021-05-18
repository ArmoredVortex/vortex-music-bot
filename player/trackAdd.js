  
module.exports = (client, message, queue, track) => {
	try { 
    	message.channel.send(`**${track.title}** has been added to the queue !`);
    } catch(err) {
            message.channel.send(`An Error occured. Please DM ArmoredVortex#8513 on Discord or raise and issue on Github and provide The error given below:-
`+"```"+err+"```")
        }
};