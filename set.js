const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0t3aXJsOTNPNVhUaFZKZktQR1puRHY3K08rYXNoMFNQbERYTXJVL2tHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDJMTFlnK0V1NWlQN1BTcWFsNHErMllSZXF5ZXFiMXg4c2hsc2FUSUxCRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTTh4bWJ0YkZ1ZVRiQ2sxSkc3eXUybWk2WXRQVzcxQ3hRd1Q2SW9RZmtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRDE0dnBQanluNzR3amhSNnQwekdMSEV3RGw3eEU1WlBBYU9aZGRBaUU0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVGZDdVZXNXdlA3aWN6OXdVcm82V25hUFRMTU01OHhEYTNmcTJubWJXRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9rNEtEck9zdXdYb01rN05PbmJBVVBJU25WcUh3OU9FeGZjUjd4c1hVU2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFDb3RHbS9jMXhjaW5CV3lteGFwVktiR1EzcjhYRlh0Qzc4elNHWG9GYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmIxY1d2SzRieXZ3R0hxdHVDVWVXM0VEM2hvNFJKRVpGZkFUQzF6eHNEOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhvdEdxTmhkYzVDOEgwaFg3Zmlwd2xXMjBpVE1STWtPaERIS21jVWxKNEJySkd5VDNCV0F2OGlBempwdUlndnNuSUJhMEh6R0RoSmlrc0dXQmNiVURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiajNLMzdjNnZQZ2hsSWpXWEFVa1p4b0hkVUtjNk1KeUZvaXRRbkZpL0s2ND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT0ZGMEY3MWlTOEM1Zm56UDY1NjVxUSIsInBob25lSWQiOiJmNGY3YzE0Mi04NDQwLTRmMWYtYTBlNi1kZjVhYjJmZDI3ZjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWwvdmFlZVVobEdPanNiSXFDbmtBc3Q0UzVFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtwVmFDVkowODZrK3lkczlYNmZGZXFsc1hUQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3S1pZNlFQUyIsIm1lIjp7ImlkIjoiOTQ3NzEyNzMwNzk6NDVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QjlxuIFxu8J2QiyBcblxu8J2QgyAgXG5cblxuXG7wnZCKXG5cbiDwnZCIIFxuXG7wnZCNIFxuXG7wnZCGXG5cblxuXG7wnZCLIFxuXG7wnZCOIFxuXG7wnZCKXG5cbvCdkJRcblxuXG5cbvCdkIIgXG5cbvCdkIcgXG5cbvCdkIAgXG5cbvCdkIwgXG5cbvCdkIAgXCJcblxuXG5cbiDwnZCBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLaTdvWVlGRUpTeDJMMEdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6UHVwa3owMlRMejBXR0Y1a1N2cDc3c3JDMGhrd3hDa3ZTNVhqVjY2ZGdJPSIsImFjY291bnRTaWduYXR1cmUiOiI3c2hOQlVPbzZTK3NUZmd0ZS9yWSs5Ujd5N2pDNFNsQVlHZkl1TU9BS3RhSzBoYS9ReFV5ZTVDYVZQQ3pNb0Ntc051M0sxMENtaWJ6WENUL3dHaDdDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaDZkODYwV2FHNm5aRlhWS2JVanNoK1haM2N6c2JsYmtjNWZQVTllNGdGUG9qMnd5UnhYYkZCL3JyMXJhdEFkb0NXUWxDNmlSTlhvcWZEVzVTSlprRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MTI3MzA3OTo0NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjejdxWk05Tmt5ODlGaGhlWkVyNmUrN0t3dElaTU1RcEwwdVY0MWV1bllDIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5OTg3MTA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZNTCJ9| 'zokk',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/Toputech/ALONE-MD',
    OWNER_NAME : process.env.OWNER_NAME || "topu",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255673750170",  
    ANTI_LINK : process.env.ANTI_LINK || "yes",
    ANTI_BAD : process.env.ANTI_BAD || "yes",               
    AUTO_REPLY : process.env.AUTO_REPLY || "yes",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',             
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "yes",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'yes',              
    CHATBOT: process.env.CHAT_BOT || "off",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.BLOCK_ALL || 'yes',              
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r",
    WEBSITE :process.env.URL || "https://files.catbox.moe/eoo6ql.jpg",
    CAPTION : process.env.CAPTION || "ALONE-MD",
    BOT : process.env.BOT_NAME || 'ALONE_MD',
    URL : process.env.BOT_MENU_LINKS || '',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    GEMINI_API_KEY : process.env.GEMINI_API_KEY || 'AIzaSyCcZqDMBa8FcAdBxqE1o6YYvzlygmpBx14',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTICALL: process.env.ANTICALL || 'yes',              
    CHAT_BOT : process.env.CHAT_BOT || 'no',  
                  
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
