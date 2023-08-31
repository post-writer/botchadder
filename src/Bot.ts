import { Client, GatewayIntentBits } from "discord.js";
import fs from "fs";
import path from "path";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });


// Dynamically set up listeners from the listeners directory
const listenerFiles = fs.readdirSync(path.join(__dirname, 'listeners')).filter(file => file.endsWith('.ts'));

for (const file of listenerFiles) {
    const listener = require(path.join(__dirname, 'listeners', file)).default;
    listener(client);
}

client.login(process.env.TOTALLYHUMAN_DISCORD_BOT_TOKEN);

