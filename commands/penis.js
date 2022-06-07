const Discord = require("discord.js");

module.exports = {
    name: "penis",
    description: "Another funny command",
    options: [
        {
            name: "target",
            type: "USER",
            required: true,
            description: "Enter the target." 
        }
    ],
    run: async(client, interaction) => {
        let target = interaction.options.getUser('target');
     
        var penis = [
            `404 NOT FOUND. This error ocurred most probably because ${target} don't have a pp.`,
            `403 Forbidden. Couldn't find pp of ${target}. Please be sure that ${target} is having a pp!`,
            `${target.username}'s pp \n8D`,
            `${target.username}'s pp \n8=D`,
            `${target.username}'s pp \n8==D`,
            `${target.username}'s pp \n8===D`,
            `${target.username}'s pp \n8====D`,
            `${target.username}'s pp \n8=====D`,
            `${target.username}'s pp \n8======D`,
            `${target.username}'s pp \n8=======D`,
            `${target.username}'s pp \n8========D`,
            `${target.username}'s pp \n8=========D`,
        ];
        let embed = new Discord.MessageEmbed()
        .setDescription(penis[Math.floor(Math.random()*penis.length)])
        .setColor("BLUE");
        await interaction.reply({embeds: [embed]})
    },
}