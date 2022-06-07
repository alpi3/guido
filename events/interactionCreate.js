const { MessageEmbed } = require('discord.js');
module.exports = async (client, int) => {

if(!int.guild) return

    if (int.isCommand()){

    const cmd = client.commands.get(int.commandName);

    if (!cmd) return void int.reply({
        content: `Command \`${int.commandName}\` not found.`,
        ephemeral: true
    }).catch(e => {})


    const DJ = client.config.opt.DJ;

    
    if (cmd && ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'nowplaying', 'save', 'search', 'time','lyrics'].includes(int.commandName)) {
        const fetch = require("node-fetch"); // import node-fetch module
        const url = `https://top.gg/api/bots/${client.user.id}/check?userId=${int.user.id}`; // api endpoint
        
        fetch(url, { method: "GET", headers: { 
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNDMyNTU3NjA5NTk3MzQyNiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjU0MjcyMjgyfQ.EtAWi-Fv0YEW7izDxkCcGlryWelxQl5K4Z1jUf547WY" }
        }).then(async(res) => res.text()).then(async(json) => {
            var isVoted = JSON.parse(json).voted;
            if (isVoted == 0) {
                const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(client.user.username)
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription("Hello, in order to use the discord bot commands mentioned below, you need to vote on the **top.gg** site for the Astra bot to develop and grow faster. Each vote is valid for 12 hours, during which time you can continue to use these commands.\n[**VOTE ASTRA**](https://top.gg/bot/924325576095973426/vote)\n"+client.config.opt.DJ.commands.map(astra => '`'+astra+'`').join(", "))
                .setTimestamp()
                .setFooter({ text: 'Made with ❤️ by ALPI', iconURL: int.user.displayAvatarURL({ dynamic: true }) })
                return int.reply({ embeds: [embed], ephemeral: true}).catch(e => {})
            } else {

                if (cmd && DJ.commands.includes(int.commandName)) {
                    let djRolefind = await client.mdb.findOne({ guildID: int.guild.id }).catch(e => { });
                    let djRole = djRolefind && djRolefind.djRole
                     if(djRole){
                  const roleDJ = int.guild.roles.cache.get(djRole)
                  if(!int.member.permissions.has("MANAGE_GUILD")){
                      if(roleDJ){
                      if(!int.member.roles.cache.has(roleDJ.id)){
          
                      const embed = new MessageEmbed()
                      .setColor('BLUE')
                      .setTitle(client.user.username)
                      .setThumbnail(client.user.displayAvatarURL())
                      .setDescription("You must have the <@&"+djRole+">(DJ) role set on this server to use this command. Users without this role cannot use the "+client.config.opt.DJ.commands.map(astra => '`'+astra+'`').join(", "))
                      .addField("Invite Bot", `**[Add Me](https://bit.ly/3PHDjyC) | [Vote](https://bit.ly/3LYzaDe) | [Support](https://discord.gg/ST89uArTdh) | [Website](https://astrabot.vercel.app/) | [Source Code](https://github.com/1umutda/MusicBot)**` ,true)
                      .setTimestamp()
                      .setFooter({ text: 'Made with ❤️ by ALPI', iconURL:int.user.displayAvatarURL({ dynamic: true }) });
                      return int.reply({ content: `${int.user}`, embeds: [embed], ephemeral: true}).catch(e => { })
                  }}}}
                }
        
            if (cmd && cmd.voiceChannel) {
                if (!int.member.voice.channel) return int.reply({ content: `You are not connected to an audio channel. ❌`, ephemeral: true}).catch(e => {})
                if (int.guild.me.voice.channel && int.member.voice.channel.id !== int.guild.me.voice.channel.id) return int.reply({ content: `You are not on the same audio channel as me. ❌`, ephemeral: true}).catch(e => {})
            }
            cmd.run(client, int)
            }
          })
    } else {
        

        if (cmd && DJ.commands.includes(int.commandName)) {
            let djRolefind = await client.mdb.findOne({ guildID: int.guild.id }).catch(e => { });
            let djRole = djRolefind && djRolefind.djRole
             if(djRole){
          const roleDJ = int.guild.roles.cache.get(djRole)
          if(!int.member.permissions.has("MANAGE_GUILD")){
              if(roleDJ){
              if(!int.member.roles.cache.has(roleDJ.id)){
  
              const embed = new MessageEmbed()
              .setColor('BLUE')
              .setTitle(client.user.username)
              .setThumbnail(client.user.displayAvatarURL())
              .setDescription("You must have the <@&"+djRole+">(DJ) role set on this server to use this command. Users without this role cannot use the "+client.config.opt.DJ.commands.map(astra => '`'+astra+'`').join(", "))
              .addField("Invite Bot", `**[Add Me](https://bit.ly/3PHDjyC) | [Vote](https://bit.ly/3LYzaDe) | [Support](https://discord.gg/ST89uArTdh) | [Website](https://astrabot.vercel.app/) | [Source Code](https://github.com/1umutda/MusicBot)**` ,true)
              .setTimestamp()
              .setFooter({ text: 'noname', iconURL:int.user.displayAvatarURL({ dynamic: true }) });
              return int.reply({ content: `${int.user}`, embeds: [embed], ephemeral: true}).catch(e => { })
          }}}}
        }
        if (cmd && cmd.voiceChannel) {
            if (!int.member.voice.channel) return int.reply({ content: `You are not connected to an audio channel. ❌`, ephemeral: true}).catch(e => {})
            if (int.guild.me.voice.channel && int.member.voice.channel.id !== int.guild.me.voice.channel.id) return int.reply({ content: `You are not on the same audio channel as me. ❌`, ephemeral: true}).catch(e => {})
        }
        cmd.run(client, int)    

    }
}

    if (int.isButton()){
        const queue = client.player.getQueue(int.guildId);
    switch (int.customId) {
        case 'saveTrack': {
       if (!queue || !queue.playing){
       return int.reply({ content: `No music currently playing. ❌`, ephemeral: true }).catch(e => {})
       } else {
          const embed = new MessageEmbed()
          .setColor('BLUE')
          .setTitle(client.user.username + " - Save Track")
          .setThumbnail(client.user.displayAvatarURL())
          .addField(`Track`, `\`${queue.current.title}\``)
          .addField(`Duration`, `\`${queue.current.duration}\``)
          .addField(`URL`, `${queue.current.url}`)
          .addField(`Saved Server`, `\`${int.guild.name}\``)
          .addField(`Requested By`, `${queue.current.requestedBy}`)
          .setTimestamp()
          .setFooter({ text: 'noname', iconURL: int.user.displayAvatarURL({ dynamic: true }) });
          int.member.send({ embeds: [embed] }).then(() => {
                return int.reply({ content: `I sent you the name of the music in a private message ✅`, ephemeral: true}).catch(e => { })
            }).catch(error => {
                return int.reply({ content: `I can't send you a private message. ❌`, ephemeral: true}).catch(e => { })
            });
        }
    }
        break
        case 'time': {
            if (!queue || !queue.playing){
                return int.reply({ content: `No music currently playing. ❌`, ephemeral: true }).catch(e => {})
                } else {

            const progress = queue.createProgressBar();
            const timestamp = queue.getPlayerTimestamp();
    
            if (timestamp.progress == 'Infinity') return int.message.edit({ content: `This song is live streaming, no duration data to display. 🎧` }).catch(e => { })
    
            const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(queue.current.title)
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            .setDescription(`${progress} (**${timestamp.progress}**%)`)
            .setFooter({ text: 'noname', iconURL: int.user.displayAvatarURL({ dynamic: true }) });
            int.message.edit({ embeds: [embed] }).catch(e => { })
            int.reply({ content: `**✅ Success:** Time data updated. `, ephemeral: true}).catch(e => { })
        }
    }
    }
}
};
