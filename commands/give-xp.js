const { MessageEmbed } = require('discord.js');
const Levels = require("discord-xp");
const Canvas = require("discord-canvas");

module.exports = {
    name: "give-xp",
    description: "give someone xp.",
    options: [
        {
            name: "target",
            type: "USER",
            description: "Select a user",
            required: true,
        },
        {
            name: "amount",
            type: "NUMBER",
            description: "How much do you want to give?",
            required: true,
        }
    ],
    run: async (client, interaction, message) => {

        const user = await Levels.fetch(interaction.user.id, interaction.guild.id, true);
        const target = interaction.options.getUser('target'); 
        const amount = interaction.options.getNumber('amount');

        if(user.xp < amount) {
            interaction.reply({content: 'Bruh.. you dont even have the amount of the XP you want to give away..'})
        } else if(amount > 500){
            interaction.reply({content: 'Maximum **500** XP. ❌'})            
        } else {
            Levels.appendXp(target.id, interaction.guild.id, amount);
            Levels.subtractXp(interaction.user.id, interaction.guild.id, amount)
            interaction.reply({content: `You successfully give **${target.username}** \`${amount}\` XP! ✅ `})
        }
    },
}