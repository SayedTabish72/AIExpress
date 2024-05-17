import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Assuming your Gemini API key is stored in an environment variable
const API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!API_KEY) {
      return new NextResponse("Gemini API Key not configured.", { status: 500 });
    }

    if (!messages || messages.length === 0) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const formattedMessages = messages.map(message => ({
      parts: [
        {
          text: message,
        },
      ],
    }));

    const result = await model.generateContent(formattedMessages);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json(text);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
