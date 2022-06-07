const Discord = module.require("discord.js");

module.exports = {
    name: "gay",
    description: "Just a funny command",
    options: [{
        name: "target",
        type: "USER",
        description: "choose a user.",
        required: true
    }],
    run: async(client, interaction) => {
        let target = interaction.options.getUser('target');
    
        var hga = [
            `${target.username} is not a gay!`,
            `${target.username} is 10% gay!`,
            `${target.username} is 13% gay!`,
            `${target.username} is 17% gay!`,
            `${target.username} is 23% gay!`,
            `${target.username} is 26% gay!`,
            `${target.username} is 31% gay!`,
            `${target.username} is 37% gay!`,
            `${target.username} is 39% gay!`,
            `${target.username} is 43% gay!`,
            `${target.username} is 48% gay!`,
            `${target.username} is 51% gay!`,
            `${target.username} is 54% gay!`,
            `${target.username} is 57% gay!`,
            `${target.username} is 60% gay!`,
            `${target.username} is 65% gay!`,
            `${target.username} is 69% gay!`,
            `${target.username} is 72% gay!`,
            `${target.username} is 75% gay!`,
            `${target.username} is 79% gay`,
            `${target.username} is 83% gay!`,
            `${target.username} is 85% gay!`,
            `${target.username} is 89% gay!`,
            `${target.username} is 91% gay!`,
            `${target.username} is 94% gay!`,
            `${target.username} is 96% gay!`,
            `${target.username} is 99% gay!`,
            `${target.username} is 100% gay!`,  
        ];
       await interaction.reply(hga[Math.floor(Math.random()*hga.length)])
    },
}