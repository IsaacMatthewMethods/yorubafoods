"use server"

export async function searchCuisine(query: string): Promise<string> {
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
            content: `You are a Yoruba cuisine expert. When users search for foods, provide detailed information about Yoruba dishes including ingredients, preparation methods, cultural significance, and serving suggestions. Focus specifically on traditional Yoruba cuisine. If the query is not about Yoruba food, try to relate it to similar Yoruba dishes or suggest Yoruba alternatives.`,
          },
          {
            role: "user",
            content: `Tell me about "${query}" in relation to Yoruba cuisine. Include ingredients, preparation, and cultural context.`,
          },
        ],
        max_tokens: 400,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const data = await response.json()
    return (
      data.choices[0]?.message?.content ||
      `I couldn't find specific information about "${query}" right now. Please try browsing our categories section for detailed information about traditional Yoruba dishes.`
    )
  } catch (error) {
    console.error("Error in search:", error)
    return `I'm having trouble accessing information about "${query}" right now. Please explore our food categories where you can find comprehensive details about various traditional Yoruba dishes including ingredients, preparation methods, and cultural significance.`
  }
}
