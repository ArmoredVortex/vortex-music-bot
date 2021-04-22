require('dotenv').config();

const fs = require('fs');

const { Player } = require('discord-player');
const { Client, Collection } = require('discord.js');
const client = new Client({ disableMentions: 'everyone'});
client.player = new Player(client);
client.commands = new Collection();
client.config = require('./config/config.js')

fs.readdirSync('./commands').forEach(dir => {
    const commands = readDirSync(`./commands/${dir}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dir}/${file}`);
        console.log(`Loaded ${command.name}`);
        client.commands.set(command.name, command);
    }
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loaded ${file} event`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading ${file} player event`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.login(process.env.BOT_TOKEN);