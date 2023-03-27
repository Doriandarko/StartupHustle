import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function generateDialogue(prompt) {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return completion.data.choices[0].message;
  } catch (error) {
    console.error("Error generating dialogue:", error);
    return "Error generating dialogue.";
  }
}
