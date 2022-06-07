const YouTube = require("discord-youtube-api");
const youtube = new YouTube("AIzaSyA0DLU34F6lWgclQXqXR_583N9oodqB2L4");

module.exports =  {
  name: "youtube",
  description: "Search on YouTube",
  options: [
    {
    name: 'search',
    description: 'Enter something.',
    type: 'STRING',
    required: true
    }
  ]
  ,
  run: async (client, interaction) => {
    //checking args
    //main part
    const search = interaction.options.getString('search')
    const video = await youtube.searchVideos(search);
    try {
        interaction.reply({content: `${video.url}`})
    }
    catch(err) {
        console.log(err);
        interaction.reply({content: `Nothing found.. ERROR 404`});
    }
}
}