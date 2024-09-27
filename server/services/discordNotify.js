const fetch = require('node-fetch');
const sendMessage = async (message) => {
    const webHookUrl = process.env.DISCORD_WEBHOOK_URL;
    await fetch(webHookUrl, {
        method: 'POST',
        body: JSON.stringify({content: message}),
        headers: {'Content-Type': 'application/json'}
    })
}

module.exports = sendMessage;