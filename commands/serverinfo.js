const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "serverinfo",
    description: "Get some infos about the server",
    options: [],
    run: async (client, interaction, options) => {

        const verificationLevels = {
            NONE: 'None',
            LOW: 'Low',
            MEDIUM: 'Medium',
            HIGH: 'High',
            VERY_HIGH: 'Very High'
          };
      
        const premiumTier = {
            NONE: `No boost 😥`,
            TIER_1: `Level 1`,
            TIER_2: `Level 2`,
            TIER_3: `Level 3`,
          }
      
        const regiao = {
            [`en-US`]: `USA :flag_us: `, [`de`]: `Deutsch :flag_de:`, [`es-ES`]: `Español `, [`fr`]: `Français `, [`hr`]: `Hrvatski `, [`it`]: `Italiano `, [`pl`]: `Polski `, [`ro`]: `Româna `, [`vi`]: `Tieng Viet `, [`cs`]: `Cestina `,
            [`pt-BR`]: `Brasil :flag_br: `, [`da`]: `Dansk `, [`lt`]: `lietuviskai `, [`hu`]: `Magyar `, [`nl`]: `Nederlands `, [`no`]: `Norsk `, [`fi`]: `Suomi `, [`sv-SE`]: `Svenska `, [`tr`]: `Turkçe `, [`el`]: `Ελληνικά `,
            [`bg`]: `български `, [`ru`]: `Русский `, [`uk`]: `Украïнська `, [`hi`]: `हिंदी `, [`th`]: `ไทย `, [`zh-CN`]: `中文 `, [`ja`]: `日本語 `, [`zh-TW`]: `繁體 中文 `, [`ko`]: `한국어 `,
          }
      
        const date = interaction.guild.createdAt
        const owner = await interaction.guild.fetchOwner();

        const embed = new MessageEmbed()
        .setTitle(interaction.guild.name, true)
        .setURL(`https://discord.gg/DJ3erCkU67`)
        .setAuthor(interaction.guild.name, interaction.guild.iconURL())
        .setThumbnail(interaction.guild.iconURL())
        .setColor('BLUE')
        .addField(`Verification Level`, `${verificationLevels[interaction.guild.verificationLevel]}`)
        .addField(`Description`, `${interaction.guild.description || `No description.`}`)
        .addField('Server Owner', `${owner}`, true)
        .addField(`Region:`, regiao[interaction.guild.preferredLocale], true)
        .addField(`Channel`, `${interaction.guild.channels.cache.size}`, true)
        .addField('Roles', `${interaction.guild.roles.cache.size}`, true)
        .addField('Members / Bots', `${interaction.guild.memberCount}`)
        .addField(`Rules Channel`, `<#${interaction.guild.rulesChannelId}>`)
        .addField('Server Boosts', premiumTier[interaction.guild.premiumTier])
        .addField('Created On', interaction.guild.createdAt.toDateString())
        .setFooter({ text: 'Made with ❤️ by ALPI', iconURL:interaction.user.displayAvatarURL({ dynamic: true }) })
        .setTimestamp()

        await interaction.reply({
            embeds: [embed]
        })
    },
  }