import { Command } from "./Command";
import fs from "fs";
import path from "path";
const srcDir = path.resolve(__dirname, '../src/');

// Get all command files from the commands directory
const commandFiles = fs.readdirSync(path.join(srcDir, 'commands')).filter(file => file.endsWith('.ts'));

const Commands: Command[] = [];

// Dynamically import each command and add it to the Commands array
for (const file of commandFiles) {
    const command: Command = require(path.join(srcDir, 'commands', file)).default;
    Commands.push(command);
}

export default Commands;
