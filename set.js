const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJmR0F5UUYxd1RYL2Z3dEltZUdQZnBpTG5hNGJHNUNxalUvMXkyZkhFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1lJdzQvTFhqeklYTi80NDM4K3k3a2QreVZVeDZsdzZ3Z0Y4TUxteVlDWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQytlZFFPRDcwTWFPZjdIbEV6M00yK25qbWpiaU5UNWxiTE93OVlvejNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiNW9ROG93OE5adFlNVWQrMzR2SGpGSkUvcmVmS2VjN0JTN1JPMkdBTjB3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJBbThMeVdOZkRYa2hWUjFBVlZpcHJSdDVlMzVJcWRhNmt6SFFiZ0FJMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhjZG05WjBjN0hCSVY0RkJiNzJvWnJ1d2pQOFI3RFlsKzRkUVZ5NzdjaWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9RaEpUNDlKNlY1UjR3WDBkVUtZR1NhOThyZmJaUjNxQW1wZFFKaW1VST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTk4L1hNbTJ6bkIwNzlGaStvUEkwN29SZWE0bXR0L2NmazdMckxPQ3lEcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdlT1FzNlVHdU5Fb0l0a1NXUmRGbXdJL2RBRFdDbmxvWk8vMHNQYjJyR3VyWVA3TGhtWWQ0NHZDOVBWVjBJMXFxeWZOVUV3bTYwL29rblJoWG9pS2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJMbjRTaW9ucHJlcGdtRkU4ZDhVcjB4ckpJaFN0UitmR21mT1JHSElhbFRVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvRVFLVldVVVJqNnc4QW9lS3hRYzFRIiwicGhvbmVJZCI6IjMxNWQ0NTNjLThkMjktNGFmOC1iYzc5LWM2NWEwOGQxZjA1ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0VFFFR3RucWY4V0xLcTNnQlVjVUhVaUFoYUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pjbG0zY2lIY2xtZWQybFR2VytSZE9zMmFJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjMxOVRYWFlTIiwibWUiOnsiaWQiOiI5NDc3MTI3MzA3OTo0NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCOXG4gXG7wnZCLIFxuXG7wnZCDICBcblxuXG5cbvCdkIpcblxuIPCdkIggXG5cbvCdkI0gXG5cbvCdkIZcblxuXG5cbvCdkIsgXG5cbvCdkI4gXG5cbvCdkIpcblxu8J2QlFxuXG5cblxu8J2QgiBcblxu8J2QhyBcblxu8J2QgCBcblxu8J2QjCBcblxu8J2QgCBcIlxuXG5cblxuIPCdkIEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tpN29ZWUZFTnVRMkwwR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InpQdXBrejAyVEx6MFdHRjVrU3ZwNzdzckMwaGt3eENrdlM1WGpWNjZkZ0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikd6djZtM2NSc3lmeHAvNHV1SmhIKzZibHh0eFBzeXdZQStjcVdsV3l0RVZFb3FKV0MwM0hKL0lMV2tBOVI2ZDdVY2lITzZ4Q3V5MDgrY1hlNGVnU0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBL3lzU2p6NTVxQTcvdGozRHRnMUh4blRYNjZZZmw1ZDZBVVZrWi9BM2NhVFFMelBIQlcxL09CSGRBaEtlZ2l0OU9zYno0N2NZTE13VzczUjFraW1nUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzcxMjczMDc5OjQ0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmN6N3FaTTlOa3k4OUZoaGVaRXI2ZSs3S3d0SVpNTVFwTDB1VjQxZXVuWUMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzk5ODI5NTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRk1MIn0=| 'zokk',
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
