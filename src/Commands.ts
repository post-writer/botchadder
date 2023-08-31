import { Command } from "./Command";
import fs from "fs";
import path from "path";

// Get all command files from the commands directory
const commandFiles = fs.readdirSync(path.join(__dirname, '../src/commands')).filter(file => file.endsWith('.ts')).map(file => file.replace('.ts', ''));

const Commands: Command[] = [];

// Dynamically import each command and add it to the Commands array
for (const file of commandFiles) {
    const command: Command = require(path.join(__dirname, 'commands', file)).default;
    Commands.push(command);
}

export default Commands;
