const Discord = require('discord.js');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
var aq = require('animequote');
const fetch = require("node-fetch")

module.exports =  {
  name: "anime",
  description: "Get information about any animes",
  options: [
    {
    name: 'search',
    description: 'Type the name of the anime.',
    type: 'STRING',
    required: true
    }
  ]
  ,
  run: async (client, interaction) => {
    //checking args
    //main part
    const search = interaction.options.getString('search')
    if (!search) return interaction.reply({ content: `Please enter a valid anime. ❌`, ephemeral: true }).catch(e => { })

        kitsu.searchAnime(search).then(async result => {
            if (result.length === 0) {
                return interaction.reply({ content: `No results found for **${search}**!`, ephemeral: true});
            }
          
          var anime = result[0]

            let embed = new Discord.MessageEmbed()
                .setColor('BLUE')
                .setAuthor(`${anime.titles.english ? anime.titles.english : search} | ${anime.showType}`, anime.posterImage.original)
                .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                .addField('❯\u2000\Information', `•\u2000\Japanese Name: ${anime.titles.romaji}\n\•\u2000\Age Rating: ${anime.ageRating}\n\•\u2000\NSFW: ${anime.nsfw ? 'Yes' : 'No'}`, true)
                .addField('❯\u2000\Stats', `•\u2000\Average Rating: ${anime.averageRating}\n\•\u2000\Rating Rank: ${anime.ratingRank}\n\•\u2000\Popularity Rank: ${anime.popularityRank}`, true)
                .addField('❯\u2000\Status', `•\u2000\Episodes: ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\•\u2000\Start Date: ${anime.startDate}\n\•\u2000\End Date: ${anime.endDate ? anime.endDate : "Still airing"}`, true)
            
                .setThumbnail(anime.posterImage.original, 100, 200);
          

            return interaction.reply({ embeds: [embed] })

        }).catch(err => {
            console.log(err) //cathing error
            return interaction.reply({content: `No results found for **${search}**!`});
        });
    }

}