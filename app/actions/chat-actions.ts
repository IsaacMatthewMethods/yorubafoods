"use server"

export async function chatWithAi(message: string): Promise<string> {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `You are a knowledgeable Yoruba cuisine expert and cooking assistant. You help users learn about traditional Yoruba foods, cooking techniques, ingredients, and cultural significance. Provide helpful, accurate information about Yoruba cuisine in a friendly and engaging way. Keep responses concise but informative.`,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again."
  } catch (error) {
    console.error("Error in chat:", error)
    return "I'm having trouble connecting to my knowledge base right now. Please try again in a moment, or feel free to explore our food categories and detailed recipes!"
  }
}
