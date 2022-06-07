const Discord = require('discord.js')
const nodeosu = require('node-osu')
const config = require('../config.json')
const osu = new nodeosu.Api(config.apikey, { // Set your API Key in config.json
  resAsError: true // Reject on not found instead of returning nothing. (default: true)
})

module.exports = {
    name: "osu",
    description: "search a osu username.",
    options: [
        {
        name: 'search',
        description: 'Type the name of the anime.',
        type: 'STRING',
        required: true
        }
    ],
    run: async(client, interaction) => {

        const SSH = client.emojis.cache.find(emoji => emoji.name === "SSH");
        const SS = client.emojis.cache.find(emoji => emoji.name === "SS");
        const S = client.emojis.cache.find(emoji => emoji.name === "S_");
        const SH = client.emojis.cache.find(emoji => emoji.name === "SH");
        const A = client.emojis.cache.find(emoji => emoji.name === "A_");
    try{
        const search = interaction.options.getString('search')
        if (!search) return interaction.reply({ content: `Please enter a valid username. ❌`, ephemeral: true }).catch(e => { })

        const au = await osu.getUser({ u: search })
        var uname = au.name
        .replace('_', '\\_')
        const flagnam = au.country.toLowerCase()
        const embed = new Discord.MessageEmbed()
            .setColor('#ff66bc')
            .setTitle(`:flag_${flagnam}:  osu!std profile for ${uname}`)
            .setURL(`https://osu.ppy.sh/users/${search}`)
            .setThumbnail(`http://s.ppy.sh/a/${au.id}`)
            .setURL(au.profileURL)
            .setImage(`https://image.thum.io/get/width/1920/crop/675/noanimate/https://osu.ppy.sh/users/${search}`)
            .setDescription(`▸ **Offical Rank:** #${au.pp.rank} (${au.country}#${au.pp.countryRank})\r\n▸ **Level:** ${Math.round(au.level * 100) / 100}\r\n▸ **Total PP:** ${au.pp.raw}\r\n▸ **Accuracy:** ${Math.round(au.accuracy * 100) / 100 + '%'}\r\n▸ **Playcount:** ${au.counts.plays}\r\n▸ **Score**: ${au.scores.ranked}\r\n▸ **Join Date:** \`${au.raw_joinDate}\``)
            .addField('▸ Rank count:', `${SSH} \`${au.counts.SSH}\` ${SS} \`${au.counts.SS}\` ${SH} \`${au.counts.SH}\` ${S} \`${au.counts.S}\` ${A} \`${au.counts.A}\``, true)
            .setFooter(`Searched by ${interaction.user.username}`, interaction.user.displayAvatarURL({ dynamic: true }))
        interaction.reply({embeds: [embed]})
    }
    catch(err) {
        console.log(err);
        interaction.reply({content: `ERROR. Try again later..`});
    }
    }
}