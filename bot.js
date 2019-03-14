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
        var guild = client.guilds.find("name", ' , Berlin ' Community .');
const channel = guild.channels.find(channel => channel.name == 'berlin');
         channel.send(`** Wel__come__ To `` # `` __Ber__lin :flag_de: **`);
});



client1.on("guildMemberAdd", (member) => {
        var guild = client1.guilds.find("name", ' , Berlin ' Community .');
const channel = guild.channels.find(channel => channel.name == 'berlin');
         channel.send(`** Wel__come__ To `` # `` __Ber__lin :flag_de: **`);
});


client.on('message', message => {
    var ownerid = '541614978319384597';
    var prefix = 'B';
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

client1.on('message', message => {
    var ownerid = '541614978319384597';
    var prefix = 'B';
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
            client1.user.setActivity(args.join(' '), {
                type: 'WATCHING'
            });
            message.channel.send(`My New Watching is = ${args.join('  ')}`)

        }
    }
});
client.login(process.env.BOT_TOKEN);

client1.login(process.env.BOT1_TOKEN);
