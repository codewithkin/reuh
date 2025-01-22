import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function sendMessageToAI(message: string, settings?: any, trainingData?: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      trainingData && { role: "system", content: trainingData || "You are a helpful assistant." },
      { role: "user", content: message }
    ],
    ...settings,
  });

  return completion.choices[0].message.content;
}
