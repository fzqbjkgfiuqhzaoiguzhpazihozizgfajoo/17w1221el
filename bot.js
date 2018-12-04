const Discord = require("discord.js");
const client = new Discord.Client();

const Discord1 = require("discord.js");
const client1 = new Discord1.Client();

client.on('ready' , () => {
    console.log('Online.');
});



client1.on('ready' , () => {
    console.log('Online.');
});





client.on("guildMemberAdd", (member) => {
        var guild = client.guilds.find("name", 'Oreo Area ,');
const channel = guild.channels.find(channel => channel.name == 'oreo');
         channel.send(`** # Welcome To Our Server :rose: .. **`);
});



client1.on("guildMemberAdd", (member) => {
        var guild = client1.guilds.find("name", 'Oreo Area ,');
const channel = guild.channels.find(channel => channel.name == 'oreo');
         channel.send(`** # Welcome To Our Server :rose: .. **`);
});


client.on('message', message => {
    var ownerid = '455331653309562910';
    var prefix = '17';
    let args = message.content.split(' ').slice(1)
    if (message.author.id != ownerid) return;
    if (message.content.startsWith(prefix + 'l')) {
        if (message.author.id != ownerid) return;
        else {
            client.user.setActivity(args.join(' '), {
                type: 'LISTENING'
            });
            message.channel.send(`My New Listening is = ${args.join('  ')}`)

        }
    }
    if (message.author.id != ownerid) return;
    if (message.content.startsWith(prefix + 'w')) {
        if (message.author.id != ownerid) return;
        else {
            client.user.setActivity(args.join(' '), {
                type: 'WATCHING'
            });
            message.channel.send(`My New Watching is = ${args.join('  ')}`)

        }
    }
});

client.login(process.env.BOT_TOKEN);

client1.login(process.env.BOT1_TOKEN);
