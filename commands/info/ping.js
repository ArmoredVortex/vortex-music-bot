module.exports = {
    name: 'ping',
    execute(client,message,args){
        var yourping = new Date().getTime() - message.createdTimestamp
        message.channel.send(`Pong! Bot Latency:`+'`'+yourping+' ms`')
    }
}