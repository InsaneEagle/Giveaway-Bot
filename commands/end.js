const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send('<a:across:964534449284972585> You need to have the manage messages permissions to reroll giveaways.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send('<a:across:964534449284972585> You have to specify a valid message ID!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('<a:across:964534449284972585> Unable to find a giveaway for `'+ args.join(' ') + '`.');
    }

    // Edit the giveaway
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.channel.send('<a:tick:965248158739365918> Giveaway will end in less than '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...');
    })
    .catch((e) => {
        if(e.startsWith(`<a:across:964534449284972585> Giveaway with message ID ${giveaway.messageID} is already ended.`)){
            message.channel.send('<a:across:964534449284972585> This giveaway is already ended!');
        } else {
            console.error(e);
            message.channel.send('<a:across:964534449284972585> An error occured...');
        }
    });

};