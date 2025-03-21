// pages/api/agent.js

import { OpenAI } from 'openai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { prompt } = req.body;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are Kisaan Sathi GPT, a helpful assistant for Indian farmers." },
        { role: "user", content: prompt },
      ],
    });

    res.status(200).json({ response: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
