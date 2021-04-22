module.exports = async function(client) {
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);    
    client.user.setStatus('online');
    client.user.setActivity(client.config.discord.activity.name, {
        type: client.config.discord.activity.type,
      });
}