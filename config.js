require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"QKqM5WmguFjkMWIf6ycu8DD7+Sc32uLwImNaNNmlV1g="},"public":{"type":"Buffer","data":"mibr3oQVhTyuEcJN1T3IWXurtu9L/cnd0MLyydyDwiw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"iGTK6DnGbApYQflsM41G6uTojrV1c8+9Gvb6fiuUV3c="},"public":{"type":"Buffer","data":"1/g+RLMR0JA5vepKBAaGJ9qKc2y0LywaWxYiQ/qMbAU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"+NUTpWo/M3fdSeCSxB4EvmV0Iftug+/d30/uAryPTlc="},"public":{"type":"Buffer","data":"l2w741gt+NMxUa5mvo+xddKfDJnOnJ1L+baIQLwg3CM="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SCpbHfEscZ6oT06ZlfQTtXeActLT7tpYbvOXFnCRGUQ="},"public":{"type":"Buffer","data":"Fy3pwPk0npZSd+UYxXD6TcNWZMhf5Ad+Fu/wLFssYwM="}},"signature":{"type":"Buffer","data":"6yA9BQ/g/1fS7oN2WwIzUQLXAoTfEJ54ZKatFtdOeZpnPAdf83tr8iupxsonRAija0Hf7ME3gUk+CD/tAWufDA=="},"keyId":1},"registrationId":214,"advSecretKey":"EDrcPMl903FnEFJ9lR7ppgt+idhS5SBParGmDGNTPX4=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"S72OZ94A","me":{"id":"6285788390394:7@s.whatsapp.net","lid":"49293490688206:7@lid"},"account":{"details":"CPKrt9sMEPjo6dUGGAIgACgA","accountSignatureKey":"PoPM5VXrmZ56dtYywb/9so4BuGch5eS4H4nIRgi6Jws=","accountSignature":"czsPWROQt4b2k5b9903Wgj54dnSix6q+2F318qAIdOGci7cPM56tjBe0Rq6ITAnykt35zx1eEaIdAezEAZBdDw==","deviceSignature":"c1NNpycqzV6zpxSaXjITkRI2P31R1LKwIiEMb00wjNJWFcZu8zq27MzMFWkCvrOENkbqINORi1a7K9fW1lAsBw=="},"signalIdentities":[{"identifier":{"name":"6285788390394:7@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BT6DzOVV65meenbWMsG//bKOAbhnIeXkuB+JyEYIuicL"}}],"platform":"iphone","routingInfo":{"type":"Buffer","data":"CAUIDQgS"},"lastAccountSyncTimestamp":1790604419,"myAppStateKeyId":"AAAAACVm"}';
global.dbSite = process.env.DB_SITE || '';
global.ytname = process.env.YT_NAME || "YT: -";
global.socialm = process.env.SOCIAL_M || "GitHub: Scarlatteria";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.prefix = process.env.PREFIX || '.';
global.ownername = process.env.OWNER_NAME || 'Scarlatte';
global.botname = process.env.BOT_NAME || 'Columbina Bot';

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


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'Scarlatte\n\nContact: +6285788390294';
// Default settings 2
global.wm = process.env.WM || "Youtube -";
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
