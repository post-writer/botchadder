import { Client, GatewayIntentBits, ClientOptions } from "discord.js";
import interactionCreate from "./listeners/interactionCreate";
import messageCreate from "./listeners/messageCreate";
import ready from "./listeners/ready";
import OpenAI from 'openai-api';

// load variables from .env file
import dotenv from "dotenv";
dotenv.config();

// get bot token from .env file
const token = process.env.TOTALLYHUMAN_DISCORD_BOT_TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers]
});

ready(client);
interactionCreate(client);
messageCreate(client)

client.login(token);

