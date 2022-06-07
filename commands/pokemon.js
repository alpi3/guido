const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch")
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

async function getPokemon(pokemon) {
    let response = await fetch(`${BASE_URL}/${pokemon}`);
    return await response.json();
}

module.exports =  {
  name: "pokemon",
  description: "Get the information about any Pokemon!",
  options: [
    {
    name: 'search',
    description: 'Type the name of the pokemon.',
    type: 'STRING',
    required: true
    }
  ]
  ,
  run: async (client, interaction) => {
    //checking args
    //main part
    const search = interaction.options.getString('search')
    if (!search) return interaction.reply({ content: `Please enter a valid pokemon. ❌`, ephemeral: true }).catch(e => { })
    try {
        const pokeData = await getPokemon(search);
        const { 
            sprites, 
            stats, 
            weight, 
            name, 
            id, 
            base_experience,
            abilities,
            types
        } = pokeData;
        const embed = new MessageEmbed();
        embed.setTitle(`You searched the Pokemon ${name}`);
        embed.setURL(`https://www.pokewiki.de/${search}`);
        embed.setAuthor(`${name} #${id}`, `${sprites.front_default}`);
        embed.setThumbnail(`${sprites.front_default}`);
        embed.addField('Weight', `${weight}`);
        embed.addField('Base Experience', `${base_experience}`);
        types.forEach(type => embed.addField('Type', `${type.type.name}`, true));
        stats.forEach(stat => embed.addField(`${stat.stat.name}`, `${stat.base_stat}`, true));
        embed.setColor('BLUE');
        embed.setImage(`${sprites.front_shiny}`);
        embed.setFooter(`Made with ❤️ by ALPI`);
        interaction.reply({embeds: [embed]});
    }
    catch(err) {
        console.log(err);
        interaction.reply({content: `Pokemon ${search} does not exist.`});
    }
}
}