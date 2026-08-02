// Krims Discord Bot Suite Implementation
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`🤖 Krims Discord Bot logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content === '!status') {
        message.reply('🟢 KryloSMP & Krishiv Studios Ecosystem: All systems online!');
    }
});

client.login(process.env.DISCORD_TOKEN || 'DUMMY_TOKEN');
