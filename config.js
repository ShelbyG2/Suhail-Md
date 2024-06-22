const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_35_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjksXG4gICAgICAgIDM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDcyLFxuICAgICAgICA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgxLFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NixcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NixcbiAgICAgICAgMjE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpBeFNDenpDSmxBY0FOTXJNWFRMK2lYbVR0ZVYrSkpJbDJUQkh3Z2VqcG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzkzODQyMjkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNDk5OEQxODM4QTZCRTBFOUIxNjlCODJCOEQ5Qjc4Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkwMzQ1NTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTM4NDIyOTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY2RjAxMUE3M0IxREYxQkZCNjhDRjVFN0JBOEVFNzQ0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTAzNDU1M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXbkR2MVM5ZlQzV3B6dlc5R2dJemFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImIzYmU0MGQ5LTA0YTctNGIyYi05ZDZjLTJiOWExOTdiNDhjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICA2OSxcbiAgICAgIDE4OCxcbiAgICAgIDIzMyxcbiAgICAgIDEwNCxcbiAgICAgIDg3LFxuICAgICAgMTU1LFxuICAgICAgMTkyLFxuICAgICAgNSxcbiAgICAgIDE2LFxuICAgICAgMjE1LFxuICAgICAgODEsXG4gICAgICAyNixcbiAgICAgIDE5LFxuICAgICAgMCxcbiAgICAgIDc3LFxuICAgICAgMzQsXG4gICAgICAxMTIsXG4gICAgICAxMzUsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgMjAzLFxuICAgICAgMTYxLFxuICAgICAgMjIsXG4gICAgICAxNzcsXG4gICAgICA3OSxcbiAgICAgIDIyMyxcbiAgICAgIDcxLFxuICAgICAgOTksXG4gICAgICAxMTcsXG4gICAgICA2NyxcbiAgICAgIDEwOCxcbiAgICAgIDIwOCxcbiAgICAgIDE3MyxcbiAgICAgIDIyOSxcbiAgICAgIDEzMCxcbiAgICAgIDIzNyxcbiAgICAgIDQ5LFxuICAgICAgMzUsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYNzI1SFpOSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzkzODQyMjkxOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTg2NDAzMzQ2MTg4NDM6MjBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2hlbGJ5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5yKzdnQkVMSEYyYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrQnVDQ0kyN3E1ZnAwallqQXphbUlhVE93eUNWTGFpQXNzNzVYUU9OSEhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndaZERkUmp1OE81Tm52RGE2Zjd5bzUvaGpHT29NaUZOMzcwaktOY0FvVGhFSzZySUlHYzRXbGwwOTYxakxXSkduelU3N3c3eW5NL1pFemFDYnUydEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldrYUtNbWZXaFBib1o3dmg5YjlvZlVLS0E0cFRFQ2FQNFBETmNFV0gxLzQwaHpQODV4bjgxVGdaUk9IUTVuNXRyYy8rWTdOeWpjYWp4Z25XbDJqVGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5Mzg0MjI5MToyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTAzNDU0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURzZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHNlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVUJtRm9qa21iWG04LzRlVk54M2hYVVpLU2EzZDRIVFRCVTBQc29uVnd4QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODc5MDQ5MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTAzNDU0OTA3OFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Shelby-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Shelby-MD",
  ownername:process.env.OWNER_NAME|| "It'z Shelby",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
