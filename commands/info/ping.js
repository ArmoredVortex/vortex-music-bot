module.exports = {
    name: 'ping',
    description: 'Replies with Pong!',
    execute(client,message,args){
        var yourping = new Date().getTime() - message.createdTimestamp
        message.channel.send(`Pong! Bot Latency:`+'`'+yourping+' ms`')
    }
}