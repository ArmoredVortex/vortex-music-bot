module.exports = (client, message, queue, playlist) => {
	try{
            message.channel.send(`${playlist.title} has been added to the queue (**${playlist.tracks.length}** songs) !`);      
        } catch(err) {
            message.channel.send(`An Error occured. Please DM ArmoredVortex#8513 on Discord or raise and issue on Github and provide The error given below:-
`+"```"+err+"```")
        }
};