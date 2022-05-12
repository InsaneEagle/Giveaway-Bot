const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
    .setTitle("Invite & Support Link!")
    .addField("<a:Invite:973824753318109214> Invite Link", `[Click here to invite me](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)`)
    .addField("<:discord:961211469310083102> Support Server", "[Click to join Support Server](https://dsc.gg/nxtlvedevs)")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(invite);
}

module.exports.help = {
    name: "invite"
}
