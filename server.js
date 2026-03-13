import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

// ✅ STREAMING ROUTE
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Transfer-Encoding", "chunked");

    const stream = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
  {
    role: "system",
    content: "You are SPACE AI, a helpful coding and learning assistant  created by Fouzan. Be friendly and clear."
  },
  { role: "user", content: message }
],
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        res.write(content);
      }
    }

    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).end("Error generating response");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});