const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "wallpaper",
    description: "Some cool Wallpaper",
    options: [],
    async run (client, interaction, args) {
        const url = "https://nekos.life/api/v2/img/wallpaper";

        let image, response;
        try {
            response = await axios.get(url);
            image = response.data;
        } catch (e) {
            return interaction.reply({content: `An error occured, please try again!`})

        }

        const img = image.url
        const embed =  new MessageEmbed()
        .setTitle(`Some cool wallpapers!`)
        .setURL(image.url)
        .setFooter(interaction.user.username, interaction.user.avatarURL({dynamic: true}))
        .setImage(`${img}`)
        .setColor("BLUE")
        .setTimestamp();

        interaction.reply({embeds: [embed]})
    },
};
