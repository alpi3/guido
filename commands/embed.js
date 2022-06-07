const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "embed",
    description: "create an Embed!",
    options: [
        {
            name: "channel",
            type: "CHANNEL",
            description: "Channel to send",
            required: true
        },
        {
            name: "color",
            type: "STRING",
            description: "HexCode or Color",
            required: true
        }
    ],
    run: async(client, interaction) => {
        
            const channel = interaction.options.getChannel('channel');
            if (!channel || !channel.isText()) return interaction.reply({content: '**Channel Not Found!**'});

            const color = interaction.options.getString('color');
            if (!color) return interaction.reply({content: '**Please Enter A Hex Code or Color Name**'});

            interaction.reply({ content: '**Please Enter A Message Or Attachment Below!**', ephemeral: true });

            const messageFilter = (message) => message.author.id === interaction.user.id && !interaction.user.bot;
            const collector = await interaction.channel.awaitMessages({
                filter: messageFilter,
                max: 1,
                time: 60000
            });

            if (collector.size === 0) return interaction.followUp(`**Timeout!**`);
            if (!collector.first().content && collector.first().attachments.size === 0) return interaction.followUp('**Please Enter A Message Or Attachment To Announce!**');

            const embed = new MessageEmbed()
                .setColor(color.toUpperCase())
                .setTimestamp();

            if (collector.first().content) {
                embed.setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
                embed.setDescription(collector.first().content);
            };
            if (collector.first().attachments.size !== 0) embed.setImage(collector.first().attachments.first().url);

            interaction.followUp(`**Embed Sent In ${channel}**`);
 
            return channel.send({ embeds: [embed] });

    }
}