import { Client, GatewayIntentBits } from "discord.js";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

console.log("Bot is starting...");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

// Dynamically set up listeners from the listeners directory
const listenerFiles = fs.readdirSync(path.join(__dirname,'../src/listeners')).filter(file => file.endsWith('.ts')).map(file => file.replace('.ts', ''));

for (const file of listenerFiles) {
    const listener = require(path.join(__dirname, 'listeners', file)).default;
    listener(client);
}

client.login(process.env.TOTALLYHUMAN_DISCORD_BOT_TOKEN);

