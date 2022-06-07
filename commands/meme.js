const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: 'meme',
    description: 'FUNNY MEMES LOL',
    options: [],
    run: async (client, interaction) => {
        const subReddit = ['dankmeme', 'meme', 'memes']
        const random = subReddit[Math.floor(Math.random() * subReddit.length)]

        const img = await randomPuppy(random)

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage(img)
        .setTitle(`from r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        interaction.reply({embeds: [embed]})
    }
}