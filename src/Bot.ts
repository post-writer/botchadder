import { Client, GatewayIntentBits } from "discord.js";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

console.log("Bot is starting...");
const client = new Client({ intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages] });


const srcDir = path.resolve(__dirname, '../src/');

// Dynamically set up listeners from the listeners directory
const listenerFiles = fs.readdirSync(path.join(srcDir,'listeners')).filter(file => file.endsWith('.ts'));

for (const file of listenerFiles) {
    const listener = require(path.join(srcDir, 'listeners', file)).default;
    listener(client);
}

client.login(process.env.TOTALLYHUMAN_DISCORD_BOT_TOKEN);
