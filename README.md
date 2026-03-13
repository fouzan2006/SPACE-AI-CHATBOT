**🚀 SPACE AI Chatbot
**
A modern AI-powered chatbot web application built using Node.js, Express, and Groq LLM API with a sleek Liquid Glass UI.

The chatbot supports streaming responses, markdown rendering, chat memory, and public deployment via Cloudflare Tunnel.

This project demonstrates how to build a real-time AI assistant with modern frontend UI and backend API integration.

**✨ Features
**
🤖 AI Chatbot powered by Groq LLM

⚡ Streaming responses for real-time typing effect

📝 Markdown rendering for formatted responses

🧠 Session memory to maintain conversation context

💎 Modern Liquid Glass UI

🔄 Auto-scrolling chat interface

⌨️ Typing animation

🌐 Public hosting using Cloudflare Tunnel

📱 Runs locally or on Termux (Android server)

🧰 Tech Stack
Frontend

HTML

CSS (Glassmorphism UI)

JavaScript

Marked.js (Markdown rendering)

Backend

Node.js

Express.js

AI Integration

Groq API (LLM inference)

Deployment

Cloudflare Tunnel

📁 Project Structure
space-ai-chatbot
│
├── public
│   └── index.html
│
├── server.js
├── package.json
├── .env
└── README.md
⚙️ Installation
1️⃣ Clone the Repository
git clone https://github.com/yourusername/space-ai-chatbot.git
2️⃣ Navigate into the Project
cd space-ai-chatbot
3️⃣ Install Dependencies
npm install
🔑 Environment Variables

Create a .env file in the root directory.

GROQ_API_KEY=your_groq_api_key_here

You can generate a Groq API key from:

👉 https://console.groq.com

▶️ Run the Server

Start the Node.js server:

node server.js

Open in your browser:

http://localhost:3000
🌍 Deploy Publicly Using Cloudflare Tunnel

Install cloudflared, then run:

cloudflared tunnel --url http://localhost:3000

You will receive a public URL like:

https://random-name.trycloudflare.com

Your chatbot will now be accessible from anywhere on the internet.

🧠 Chat Memory System

The chatbot maintains conversation context during the session using a JavaScript array.

Example structure:

let chatHistory = [
  {
    role: "system",
    content: "You are SPACE AI..."
  }
]

This allows the AI to remember previous messages in the conversation.

Messages are appended to maintain context between prompts.
