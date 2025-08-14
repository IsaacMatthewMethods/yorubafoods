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
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are a knowledgeable assistant specializing in Yoruba cuisine and culture.
            
            Your expertise includes:
            - Traditional Yoruba foods and their preparation
            - Ingredients commonly used in Yoruba cooking
            - Cultural significance of different dishes
            - Cooking techniques and tips
            - Nutritional information about Yoruba foods
            - History of Yoruba cuisine
            
            Important formatting rules:
            - DO NOT use markdown headers (# or ##) in your responses
            - Present information in clear, organized sections with plain text labels
            - When listing ingredients, use proper bullet points with the format:
              - First ingredient
              - Second ingredient
            - When describing recipes, number the preparation steps with the format:
              1. First step
              2. Second step
            - Keep your responses conversational and engaging
            
            If you're unsure about something, acknowledge it rather than making up information.`,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0]?.message?.content || "Sorry, I could not process your request at the moment."
  } catch (error) {
    console.error("Error generating AI response:", error)
    return "Sorry, I could not process your request at the moment. Please try again later."
  }
}
