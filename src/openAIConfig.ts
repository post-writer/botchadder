import OpenAI from 'openai-api';
import dotenv from "dotenv";

dotenv.config();

if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not defined in .env file");
}

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default openai;
