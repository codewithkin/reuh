import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function sendMessageToAI(message: string, settings: any) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: message }],
    ...settings,
  });

  return completion.choices[0].message.content;
}
