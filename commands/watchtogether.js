const Discord = require('discord.js');



module.exports = {
    name: "watchtogether",
    description: "creates the link for the activity",
    options: [
        {
            name: "channel",
            type: "CHANNEL",
            channelTypes: ['GUILD_VOICE'],
            description: "Select a voice channel.",
            required: true
        },
    ],

    run: async(client, interaction) => {

        const { DiscordTogether } = require('discord-together');

        client.discordTogether = new DiscordTogether(client);
        
        const channel = interaction.options.getChannel('channel');

        client.discordTogether.createTogetherCode(channel.id, 'youtube').then(async invite => {
                        return interaction.reply({content: `${invite.code}`});
                    });
            }  
    }
