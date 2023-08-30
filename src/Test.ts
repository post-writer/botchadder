import { Client, ClientOptions } from "discord.js";

const token = ""; // add your token here

console.log("Bot is starting...");

const client = new Client({
    intents: []
});
client.login(token);

console.log(client);
