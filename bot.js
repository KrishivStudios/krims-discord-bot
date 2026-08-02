// ==============================================================================
// Krims Discord Bot Suite v14 - Production Bot Engine
// Developer: Krishiv PB (@Krylo-60) | Studio: Krishiv Studios
// ==============================================================================

const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log(`🤖 Krims Discord Bot v14 active as ${client.user.tag}!`);
    client.user.setActivity('krishivstudios.github.io | !status', { type: 0 });
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.content === '!status') {
        const embed = new EmbedBuilder()
            .setTitle('👑 Krishiv Studios Ecosystem Status')
            .setColor('#00f2ff')
            .setDescription('Live telemetry status for all cloud apps & services.')
            .addFields(
                { name: '🌐 Master Hub', value: '[krishivstudios.github.io](https://krishivstudios.github.io)', inline: true },
                { name: '🎮 KryloSMP Network', value: 'play.krylosmp.net (ONLINE)', inline: true },
                { name: '⚡ SMPLink SaaS', value: 'Active (Vercel Serverless)', inline: true }
            )
            .setFooter({ text: 'Powered by Krishiv Studios AI Engine' })
            .setTimestamp();

        message.reply({ embeds: [embed] });
    }

    if (message.content === '!ticket') {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('create_ticket')
                .setLabel('📩 Create Commission Ticket')
                .setStyle(ButtonStyle.Primary)
        );

        message.reply({ content: 'Need a custom Discord bot or Minecraft plugin?', components: [row] });
    }
});

client.login(process.env.DISCORD_TOKEN || 'DUMMY_TOKEN');
