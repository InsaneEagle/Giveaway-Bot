module.exports = (client) => {
console.log((`Successfully Logged In As ${client.user.tag}\n\n`));

  setInterval(() => {
      const statuses = [
        `g.help by: dsc.gg/nxtlvedevs`,
        `Giveaway's by: dsc.gg/nxtlvedevs`,
        `24/7 Working by: dsc.gg/nxtlvedevs`,
        `Best Bots by: dsc.gg/nxtlvedevs`,
      ];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: "WATCHING" });
    }, 60000);

};
