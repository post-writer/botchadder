import { CommandInteraction, ApplicationCommandType, Client, CommandInteractionOptionResolver } from "discord.js";
import { Command } from "../Command";
import { openai } from "src/OpenAI";

export const Roll: Command = {
    name: "roll",
    description: "Roll dice. E.g. 1d6, 2d8+2, 3d10-1, 4d12+3d6-2",
    options: [
        {
            name: "dice",
            description: "The dice to roll",
            type: "STRING",
            required: true
        }
    ],
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const diceOption = interaction.options.get("dice") as CommandInteractionOptionResolver<string>;
        const diceValue = diceOption.value as string;

        const prompt = `
            Roll the following dice:
            ${diceValue}
        `;
        const result = await openai.complete({
            engine: 'davinci',
            prompt,
            maxTokens: 64,
            temperature: 0.5,
            topP: 1,
            presencePenalty: 0,
            frequencyPenalty: 0,
            bestOf: 1,
            n: 1,
            stream: false,
            stop: ["\n"]
        });
        const content = result.data.choices[0].text;

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
