module.exports = (client,message,track) => {
	try {
    	message.channel.send(`Now playing **${track.title}** in ${message.member.voice.channel.name}`);
    } catch(err) {
            message.channel.send(`An Error occured. Please DM ArmoredVortex#8513 on Discord or raise and issue on Github and provide The error given below:-
`+"```"+err+"```")
        }
}