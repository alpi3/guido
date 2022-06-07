const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "slap",
    description: "slap someone",
    options: [
        {
            name: "target",
            type: "USER",
            required: true,
            description: "Enter a target."
        }
    ],

    async run (client, interaction, args) {
        const url = "https://nekos.life/api/v2/img/slap";

        let image, response;
        try {
            response = await axios.get(url);
            image = response.data;
        } catch (e) {
            return interaction.reply({content: `An error occured, please try again!`})

        }

        

        const user = interaction.options.getUser('target') 
        const img = image.url
        const embed =  new MessageEmbed()
        .setTitle(`${user.username} slaps ${interaction.user.username}`)
        .setAuthor(user.username, user.avatarURL({dynamic: true}))
        .setFooter(interaction.user.username, interaction.user.avatarURL({dynamic: true}))
        .setImage(`${img}`)
        .setColor("BLUE")
        .setTimestamp();

        interaction.reply({embeds: [embed]})
    },
};
