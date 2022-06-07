const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "shows the avatar of the target",
    options: [
        {
            name: "target",
            type: "USER",
            description: "Select a user",
            required: true,
        }
    ],
    run: async (client, interaction, options) => {
        const user = interaction.options.getUser('target') 

        const embed = new MessageEmbed()
        .setTitle(`${user.username}'s Avatar`)
        .setColor('BLUE')
        .setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
        .setDescription(`[PNG](${user.avatarURL({format: 'png'})}) | [WEBP](${user.avatarURL({dynamic: true})}) | [JPG](${user.avatarURL({format: 'jpg'})})`)
        .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic: true}));

        await interaction.reply({
            embeds: [embed]
        })
    },
}