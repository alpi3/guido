const { MessageEmbed } = require('discord.js');
const Levels = require("discord-xp");

module.exports = {
    name: "leaderboard",
    description: "shows the Leaderboard of this server.",
    options: [],
    run: async (client, interaction, message) => {
        const target = interaction.user;
        const user = await Levels.fetch(target.id, interaction.guild.id, true);
        const rawLeaderboard = await Levels.fetchLeaderboard(interaction.guild.id, 10); // We grab top 10 users with most xp in the current server.

        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet..");
        
        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.
        
        const lb = leaderboard.map(e => `**${e.position}. ${e.username}#${e.discriminator}**\n▸ Level: \`${e.level}\`\n▸ XP: \`${e.xp.toLocaleString()}\``); // We map the outputs.
        
        const embed = new MessageEmbed()
        .setTitle(`Leaderborad | ${interaction.guild.name}`)
        .setDescription(`**🏅 Your Rank:**\nYou are rank \`#${user.position}\` on this server\nwith a total of \`${user.xp}\` **XP**.\n\n════════════════════════\n\n${lb.join("\n\n")}\n\n════════════════════════\n\n`)
        .setColor('BLUE')
        .setThumbnail(interaction.guild.iconURL())
        .setFooter('made with ❤️ by ALPI', interaction.user.displayAvatarURL({dynamic: true}))
        interaction.reply({embeds: [embed]});
    },
}