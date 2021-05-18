module.exports = {
  name : 'loop',
  description : 'Used to loop the current song or queue',
  execute(client,message,args){
     if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel ! What a Noob`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`No music currently playing ! What a goof`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`Loop **Disabled** || Forever ||`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`Looping **Queue**`);
            };
        } else if(args.join(" ").toLowerCase() === 'song'){
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`Loop **Disabled** || Forever ||`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`Looping **Current Song**`);
            };
        } else {
          message.channel.send('`Usage: loop [queue/song]`')
        }
  }
}