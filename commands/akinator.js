const akinator = require("discord.js-akinator");
const language = "en"; //The Language of the Game
const childMode = false; //Whether to use Akinator's Child Mode
const gameType = "character"; //The Type of Akinator Game to Play. ("animal", "character" or "object")
const useButtons = true; //Whether to use Discord's Buttons
const embedColor = "BLUE"; //The Color of the Message Embeds

module.exports = {
    name: "akinator",
    description: "can you beat him?",
    options: [],
    run: async (client, interaction) => {
        akinator(interaction, {
            language: language, //Defaults to "en"
            childMode: childMode, //Defaults to "false"
            gameType: gameType, //Defaults to "character"
            useButtons: useButtons, //Defaults to "false"
            embedColor: embedColor //Defaults to "RANDOM"
        });
    
    }
}
    
