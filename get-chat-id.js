const https = require('https');

const BOT_TOKEN = '8271120423:AAGtgOpHnKWNU2HOR5_mimMh4Cf1CQjdbcQ';

https.get(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`, (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    resp.on('end', () => {
        try {
            const result = JSON.parse(data);
            console.log(JSON.stringify(result, null, 2));

            if (result.ok && result.result.length > 0) {
                console.log('\n--- Found Chats ---');
                result.result.forEach(update => {
                    if (update.message && update.message.chat) {
                        console.log(`Chat ID: ${update.message.chat.id} (${update.message.chat.type}) - User: ${update.message.from.username}`);
                    }
                });
            } else {
                console.log('\nNo updates found. Please send a message to the bot first.');
            }
        } catch (e) {
            console.error('Error parsing JSON:', e);
        }
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
