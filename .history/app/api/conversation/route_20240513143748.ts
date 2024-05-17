import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import axios from "axios";

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

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: messages[0], // Assuming only one message for simplicity
              },
            ],
          },
        ],
      }
    );

    return NextResponse.json(response.data.candidates[0].content.parts[0].text);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
