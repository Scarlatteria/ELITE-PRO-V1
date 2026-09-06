require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '';
global.ytname = process.env.YT_NAME || "YT: -";
global.socialm = process.env.SOCIAL_M || "GitHub: Scarlatteria";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '6285788390394';
global.ownername = process.env.OWNER_NAME || 'Scarlatte';
global.botname = process.env.BOT_NAME || '☁️Columbina Bot☁️';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO !== 'false';
global.autoviewstatus = process.env.AUTO_VIEW_STATUS !== 'false';
global.welcome = process.env.WELCOME !== 'false';
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';
global.autoOffline = process.env.AUTO_OFFLINE === 'true';

// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'Scarlatte\n\nContact: +6285788390394';
// Default settings 2
global.wm = process.env.WM || "-";
global.link = process.env.LINK || '-';

// Reply messages
global.mess = {
    done: '✅ Task completed successfully!',
    prem: '⚠️ Access denied. This feature is for premium users only.',
    admin: '⚠️ Only group admins can use this command.',
    botAdmin: '⚠️ I need to be a group admin to use this command.',
    owner: '⛔ Command restricted to the bot owner.',
    group: 'ℹ️ This command can only be used in group chats.',
    private: 'ℹ️ This command can only be used in private chats.',
    wait: '⏳ Processing your request... Please wait a moment.',
    error: '❌ An unexpected error occurred. Please try again later.',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Updated: ${__filename}`));
    delete require.cache[file];
    require(file);
});
