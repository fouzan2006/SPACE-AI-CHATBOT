SPACE AI Chatbot

A modern AI-powered chatbot web application built using Node.js, Express, and Groq LLM API with a sleek liquid glass UI.
The chatbot supports streaming responses, markdown rendering, chat history memory, and deployment via Cloudflare Tunnel.

This project demonstrates how to build a real-time AI assistant with a modern interface and backend API integration.

Features

AI chatbot powered by Groq LLM

Streaming responses for real-time typing effect

Markdown rendering for formatted answers

Session memory for conversation context

Modern liquid glass UI

Auto scrolling chat

Typing animation

Public hosting via Cloudflare Tunnel

Runs locally or on Termux (Android server)

Tech Stack

Frontend

HTML

CSS (Glassmorphism UI)

JavaScript

Marked.js (Markdown rendering)

Backend

Node.js

Express.js

AI API

Groq API

Deployment

Cloudflare Tunnel

Project Structure
space-ai-chatbot
│
├── public
│   └── index.html
│
├── server.js
├── package.json
├── .env
└── README.md
Installation

Clone the repository

git clone https://github.com/yourusername/space-ai-chatbot.git

Navigate into the project

cd space-ai-chatbot

Install dependencies

npm install
Environment Variables

Create a .env file in the root directory:

GROQ_API_KEY=your_groq_api_key_here

You can get a Groq API key from:

https://console.groq.com

Run the Server

Start the Node.js server

node server.js

Open in browser:

http://localhost:3000
Deploy Publicly Using Cloudflare Tunnel

Install cloudflared and run:

cloudflared tunnel --url http://localhost:3000

You will get a public URL like:

https://random-name.trycloudflare.com

Your chatbot will now be accessible from anywhere.

Chat Memory System

The chatbot maintains conversation memory during the session using a JavaScript array.

Example structure:

let chatHistory = [
  {
    role: "system",
    content: "You are SPACE AI..."
  }
]

Messages are appended to maintain context between prompts.
