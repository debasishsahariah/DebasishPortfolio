export const handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { message, history } = JSON.parse(event.body);

    if (!message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Message is required" }) };
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return { 
        statusCode: 500, 
        body: JSON.stringify({ error: "API key is missing on the server. Please configure GEMINI_API_KEY in Netlify." }) 
      };
    }

    // Construct the payload for Gemini
    // We append a system instruction to give the AI context about the portfolio.
    const systemInstruction = {
      role: "user",
      parts: [{ text: "You are an AI assistant for Debasish Saharia, a 3D & AI Generalist and Art Director. You are integrated directly into his portfolio website. Your goal is to help visitors understand his work, answer questions about his 5+ years of experience, tools (Blender, 3Ds Max, V-Ray, Photoshop, After Effects), and services (3D Visualization, Motion & Video, Creative Direction). Be professional, polite, concise, and encourage them to contact him for projects." }]
    };

    // Format history if any, otherwise just send the user message
    const contents = history ? [...history] : [];
    contents.push({ role: "user", parts: [{ text: message }] });

    const payload = {
      contents: contents,
      systemInstruction: { parts: [{ text: "You are a helpful AI assistant on Debasish Saharia's 3D portfolio website. Answer questions professionally and concisely about his 3D and AI design work." }] }
    };

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error:", data);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Failed to fetch response from Gemini API" }),
      };
    }

    // Extract the text response
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reply }),
    };

  } catch (error) {
    console.error("Server Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
