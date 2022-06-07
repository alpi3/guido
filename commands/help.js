const { MessageEmbed } = require('discord.js');

module.exports = {
    showHelp: false,
    description: "Get the list of available commands",
    name: 'help',
    options: [],

    run: async (client, interaction) => {
        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new MessageEmbed()
        .setColor('BLUE')
        .setTitle(client.user.username)
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`Ich bin dafür da um Perioden Schmerzen bei dem ein oder anderen zu lindern 🤖

        Das ist btw mein Lieblingsspiel: https://osu.ppy.sh/users/17205201`)
        .addField(`Available - ${commands.size} Commands`, commands.map(x => `\`/${x.name}\``).join(' | '))
        .addField(`Without Interaction Available - 1 Command`, '`!ttt (TicTacToe)`')
        .setTimestamp()
        .setImage(`https://cdn.discordapp.com/attachments/983034486105210920/983353885299183646/standard_1.gif`)
        .setFooter({ text: 'Made with ❤️ by ALPI', iconURL:interaction.user.displayAvatarURL({ dynamic: true }) })
        interaction.reply({ embeds: [embed] }).catch(e => { })
    },
};
