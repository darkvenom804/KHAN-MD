// config.js - ESM Version
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (fs.existsSync(path.resolve('config.env'))) {
  dotenv.config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

export default {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: process.env.SESSION_ID || "IK~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdpK1RpN29xT3pQb2hLOVB2N2ltUzErVndJM0s5MmhOUTloVXdxalRYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkZJWG5NU2pBd0ExaWNHc2hsYjRYSE9GMDZrWXJ3VXZKL1hHTjU0YzBFWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRjhxOW9xRUE0NnZFdjVyZVFjNEY4WjNURWhGNXFsbnhGMU5CR0YwbG1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaWitZNVRicHlVbmh2VzRMMi9IQ0VkS2t5dXNXRThBQVNHdlJ5T2dCNm5rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNUnJ3SmRvaVR5dzFKYUw2VlE1MUZtS0YvWnhaNm9Bb1FhNjA0aUhSbEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE3UThOb0JVN3V0Skk0UVVZRVltRXVhWE1Ub0tTUTdacnBiZGc3bWFWd0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU5DdmRIYlk0Qm5jNk81b3FzdE0wNnR6MlpIRTF5Q0cyMVBWc0JSQi9Yaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzF3T3FiUEptZkdBeGVTaUJJTTBqUXdsTXhnYmZLdjJTa1NyeFJUS01Xdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ2NXFpaUJsd3hCYisyK29SaUJFZDhqZGdSdzRIS2pCbS93c2l2WXorRmxPUnNRNnhLeEg3NG94Yno5VXIrWVlPOEpseG5GaWNhR0l6MzhJdTR6S2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6ImtQbzdvZkxJbzF4ZnNibkxjTjIrdnFoRFh4Z3pWMEFpS01KdVl2N2lYR1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjE4NzE3NjM2MDQyODQ2QGxpZCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTcwOTk1OTJGRjNGQkUyNEFBMzE5ODVBQzk2MkUzMCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJsaWQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc5NTU5OTg0NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjE4NzE3NjM2MDQyODQ2QGxpZCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUQ4NDAyQUI4NUMzRDZCNDE4NkQ2QjY2NTU3RERGQiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJsaWQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc5NTU5OTg0NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjE4NzE3NjM2MDQyODQ2QGxpZCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTIzOTA4RkNGNTFDMjFBMzczQUUyQzczMEI2OTgyNiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJsaWQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc5NTU5OTg0NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjE4NzE3NjM2MDQyODQ2QGxpZCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUQ3NUUzQkY4RDcwMkM5MDg4MUUwRTFENDc5OENERCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJsaWQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc5NTU5OTg0NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjE4NzE3NjM2MDQyODQ2QGxpZCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTg4QTkwMkUwRTYxNEFCNzZCNTQ5OTZBM0RCQjkzQSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJsaWQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc5NTU5OTg1MH1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJHQ1lDNThHRyIsIm1lIjp7ImlkIjoiOTIzMzQ4NjM4MjIzOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiaWRrIiwibGlkIjoiMjE4NzE3NjM2MDQyODQ2OjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKblYzNUVHRU5YYm10Z0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHSWtUeWZTajhaSFloSVNxTGlScVBobUZ3Z0RsRFpTa01sRU41SkQ4eDFZPSIsImFjY291bnRTaWduYXR1cmUiOiJQNEV0Z1ExdmFDcGEvR0JWSHJ3REhEZmxCeVlzeXJpRXJTa0xCRkkxcE42OEJjNUQ3Y2ttOS93dFlSYUQxanFqVUY0eEhFMHdjZUkyZjJPTVl0b3NEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicFVpMTlwNWU5NThTaWQ4TVVZMXRLS1RUV1hkaEhnU2E0dm5lb2FOQldSYzZJSkttMVQvdzF4dFBXR3FNeVBhQk5tZk5mREN1OEExbThKUXd6c0tQZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMTg3MTc2MzYwNDI4NDY6MUBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmlKRThuMG8vR1IySVNFcWk0a2FqNFpoY0lBNVEyVXBESlJEZVNRL01kVyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzk1NTk5ODQzLCJsYXN0UHJvcEhhc2giOiJ1VnRCZCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnhuIn0=",
  PREFIX: process.env.PREFIX || ".",
  CHATBOT: process.env.CHATBOT || "off",
  BOT_NAME: process.env.BOT_NAME || "KHAN-MD",
  MODE: process.env.MODE || "private",
  REPO: process.env.REPO || "https://github.com/JawadTechYT/KHAN-MD",
  WEBPAIR: process.env.WEBPAIR || "https://khanmd-pairx.onrender.com",
  NEWSLETTERID: process.env.NEWSLETTERID || "120363426563532140@newsletter",
 
  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: process.env.OWNER_NUMBER || "92342*******",
  OWNER_NAME: process.env.OWNER_NAME || "Jᴀᴡᴀᴅ TᴇᴄʜX",
  SUDO: process.env.SUDO 
    ? process.env.SUDO.split(',').map(s => s.trim()) 
    : ["123@lid"],
  BANNED: process.env.BANNED 
    ? process.env.BANNED.split(',').map(s => s.trim()) 
    : [],
  STATUS_LIKE_EMOJIS: process.env.STATUS_LIKE_EMOJIS 
    ? process.env.STATUS_LIKE_EMOJIS.split(',').map(e => e.trim()) 
    : ["❤️", "🔥", "👍", "😍", "💯"],
  REACT_EMOJIS: process.env.REACT_EMOJIS 
    ? process.env.REACT_EMOJIS.split(',').map(e => e.trim()) 
    : ["❤️", "🔥", "👍", "😍", "😂", "😮", "😎", "🥰", "👋", "🤝", "💯", "✨", "⭐", "🎉", "🤗", "😊", "🙌", "💪", "👏", "✅", "🎈", "🎊", "🏆", "⚡", "💫", "👌", "🤙", "💖", "💕", "💗", "👑", "💎", "🌟", "🎯", "🎨", "🎭", "🎪", "🎢", "🎡", "🎠"],
  OWNER_EMOJIS: process.env.OWNER_EMOJIS 
    ? process.env.OWNER_EMOJIS.split(',').map(e => e.trim()) 
    : ["👑", "💎", "⭐", "✨", "🔥", "💯", "✅", "🎉", "🤖", "⚡", "💫", "🌟", "🏆", "👾", "🚀", "💪", "🎯", "🔱", "♾️", "⚜️"],
  LINK_WARNINGS: process.env.LINK_WARNINGS 
    ? process.env.LINK_WARNINGS.split(',').map(s => s.trim()).filter(s => s) 
    : [],
 
  // ===== HEROKU SETTINGS =====
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",

  // ===== REACTION SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false",
  OWNER_REACT: process.env.OWNER_REACT || "false",
  STICKER_NAME: process.env.STICKER_NAME || "KHAN-MD",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  STATUS_SENDER: process.env.STATUS_SENDER || "true",
  
  // ===== AUTO PRESENCE SETTINGS =====
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false",

  // ===== ANTI FEATURES SETTINGS =====
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_STATUS: process.env.ANTI_STATUS || "true",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",

  // ===== MEDIA & AUTOMATION =====
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/6zd0ru.jpg",
  BOT_MEDIA_URL: process.env.BOT_MEDIA_URL || "https://files.catbox.moe/6zd0ru.jpg",
  AUDIO_URL: process.env.AUDIO_URL || 'https://files.catbox.moe/0toicz.mp3',
  AUTO_DOWNLOADER: process.env.AUTO_DOWNLOADER || "false",
  
  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DELETE_PATH: process.env.ANTI_DELETE_PATH || "inbox",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_SPAM: process.env.ANTI_SPAM || "false",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_BOT: process.env.ANTI_BOT || "false",
  PM_BLOCKER: process.env.PM_BLOCKER || "false",
  ANTI_MENTION: process.env.ANTI_MENTION || "false",
  ANTI_STATUS_MENTION: process.env.ANTI_STATUS_MENTION || "false",
  ANTI_EDIT: process.env.ANTI_EDIT || "true",
  ANTIEDIT_PATH: process.env.ANTIEDIT_PATH || "inbox",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",
  AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  
  // ===== WELCOME & GOODBYE SETTINGS =====
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false",
  WELCOME_MESSAGE: process.env.WELCOME_MESSAGE || "*_@user joined the group, welcome! 🎉_*",
  GOODBYE_MESSAGE: process.env.GOODBYE_MESSAGE || "*_@user has left the group, we will miss them! 👋_*",

  VERSION: process.env.VERSION || "10.0 Bᴇᴛᴀ",
  TIMEZONE: process.env.TIMEZONE || "Asia/Karachi",
};
