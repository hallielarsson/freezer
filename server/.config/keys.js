require('dotenv').config();


module.exports = {
    discordClientID: process.env.DISCORD_CLIENT_ID,
    discordClientSecret: process.env.DISCORD_CLIENT_SECRET,
    sessionSecret: process.env.SESSION_SECRET,
    port: process.env.PORT || 5000,
  };