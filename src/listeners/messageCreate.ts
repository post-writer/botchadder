import { Client, Message } from "discord.js";

export default (client: Client): void => {
    client.on('messageCreate', (message: Message) => {
        if (message.author.bot) return;  // Ignore messages from bots
        console.log(`Received message from ${message.author.tag}: ${message.content}`);
    });
};
