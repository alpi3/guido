module.exports = {
        TOKEN: 'OTgyOTUwMjE4NjgzMjYwOTY5.GPjwXl.QaE0cmWleamHYsFj5-hVilJYKM8TXbYLMtFW-Y', //write your discord bot token
        playing: 'Cars 2 | /help',
        mongoDB: "mongodb+srv://alpi12:alpibest1984@cluster0.s8xyu24.mongodb.net/test", //write your mongoDB url.
 opt: {
        DJ: { 
                commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },
            
        voiceConfig: {
            leaveOnEnd: true, //If this variable is "true", the bot will leave the channel the music ends.
            autoSelfDeaf: true, //IF YOU WANT TO DEAF THE BOT, set false to true.

            leaveOnTimer:{ //The leaveOnEnd variable must be "false" to use this system.
                status: false, //If this variable is "true", the bot will leave the channel when the bot is offline.
                time: 10000, //1000 = 1 second
            }
        }, 

        maxVol: 100, //You can specify the maximum volume level.
        loopMessage: false,

        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Please don't touch
                highWaterMark: 1 << 25 //Please don't touch
            }
            }
        }
}
