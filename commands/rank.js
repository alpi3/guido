const Levels = require("discord-xp");
const Canvas = require("discord-canvas");

module.exports = {
    name: "rank",
    description: "shows the rank of the target",
    options: [
        {
            name: "target",
            type: "USER",
            description: "Select a user",
            required: true,
        }
    ],
    run: async (interaction) => {
        const target = interaction.options.getUser('target') 

        const user = await Levels.fetch(target.id, interaction.guild.id, true); // Selects the target from the database.
        var xpRequired = Levels.xpFor(user.level + 1);  
        if (!user) return interaction.reply({content: "Seems like this user has not earned any xp so far."}); // If there isnt such user in the database, we send a message in general.
        const image = await new Canvas.RankCard()
        .setAvatar(target.displayAvatarURL({ format: "png" }))
        .setXP("current", user.xp)
        .setXP("needed", xpRequired)
        .setLevel(user.level)
        .setRank(user.position)
        .setColor("bar", "#07c3fc") // BACKGROUND OF PROGRESS BAR COLOR
        .setColor("level-box", "#2f3136") // LEVEL BOX COLOR
        .setColor("level", "#07c3fc") // LEVEL BOX COLOR
        .setColor("reputation-box", "#2f3136") // REPUTATION BOX COLOR
        .setUsername(target.username)
        .setAddon("reputation", true) // Reputation box
        .setAddon("badges", true) // Badges of success box
        .setAddon("rank-name", false) // Name of rank
        .setColor("background", "#2f3136") // BACKGROUND COLOR
        .setText("needed-xp", "{current} / {needed} XP - {latest} XP remaining!")
        .setOpacity("avatar", 0.2)
        .setOpacity("badges", 0.2) // Badges box
        .setRadius(20)
        .toAttachment();
        // Default diamond badge 2
        
        interaction.reply({
            files: [{
              attachment: image.toBuffer(),
              name: `rank-card.gif`
            }]
          });
    },
}