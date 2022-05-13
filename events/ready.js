module.exports = (client) => {
console.log((`Successfully Logged In As ${client.user.tag}\n\n`));

  const activities = [`Giveaways in ${client.guilds.cache.size} guilds`,"g.help",`over ${client.users.cache.size} users!`];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity("Giveaways by: dsc.gg/nxtlvedevs", { type: "WATCHING" });
  }, 20000);

};
