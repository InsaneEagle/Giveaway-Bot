const discord  =  require("discord.js")
module.exports = {
  name: "help",
 
  run: async (client,message,args) => { 
    
    const embed = new discord.MessageEmbed()
    .setColor("BLUE")
 .setAuthor("help comammd",client.user.displayAvatarURL())
.setURL(`https://github.com/InsaneEagle`)
.setDescription(`
<a:tick:965248158739365918> **_My Overview_**

<a:Tada:973843115486093332>__**Giveaway**__<a:Tada:973843115486093332>

Start│reroll│end│
━━━━━━━━━━━━━━━━━━━━

<a:utility:964546206355304518> **__Utility__** <a:utility:964546206355304518>
ping|invite|help|
━━━━━━━━━━━━━━━━━━━━

<a:info:965117388234326017> **__Information__** <a:info:965117388234326017>
stats|
━━━━━━━━━━━━━━━━━━━━

<:discord:961211469310083102> Made By [**Nxtlve Development**](https://dsc.gg/nxtlvedevs)`)

.setImage("https://media.discordapp.net/attachments/973126317715382282/973837679282225182/standard_1.gif")

.setFooter("Powered by dsc.gg/nxtlvedevs")
message.channel.send(embed)
  }
}