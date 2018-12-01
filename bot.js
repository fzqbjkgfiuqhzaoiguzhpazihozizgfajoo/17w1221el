const Discord = require("discord.js");
const client = new Discord.Client();

const Discord1 = require("discord.js");
const client1 = new Discord1.Client();


client.on("guildMemberAdd", (member) => {
        var guild = client.guilds.find("name", 'Oreo Area ,');
const channel = guild.channels.find(channel => channel.name == 'oreo');
         channel.send(`** # Welcome To Our Server :rose: :3_:  **`);
});



client1.on("guildMemberAdd", (member) => {
        var guild = client1l.guilds.find("name", 'Oreo Area ,');
const channel = guild.channels.find(channel => channel.name == 'oreo');
         channel.send(`** # Welcome To Our Server :rose: :3_:  **`);
});



client.login(process.env.BOT_TOKEN);

client1.login(process.env.BOT1_TOKEN);
