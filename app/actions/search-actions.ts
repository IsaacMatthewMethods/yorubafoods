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
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content:
              "You are a knowledgeable expert on Yoruba cuisine and culture. Provide accurate, detailed, and helpful information about Yoruba foods and dishes. Format your response in plain text without markdown headers. Use proper bullet points (with -) for ingredients and numbered lists (1., 2., etc.) for preparation steps. If you're unsure about something, acknowledge it rather than making up information.",
          },
          {
            role: "user",
            content: `The user is searching for information about "${query}" in Yoruba cuisine. 
            Provide detailed information about this food including:
            
            Name of the dish (without any markdown headers)
            Description: A brief overview of what the dish is
            Ingredients: List all ingredients needed with bullet points (use - for bullet points)
            Preparation: Step by step instructions on how to prepare it (use numbered steps like 1., 2., etc.)
            Cultural Significance: Information about when and how this dish is eaten
            Nutritional Information: Basic nutritional facts
            
            If this isn't a Yoruba food, suggest similar Yoruba dishes instead.
            
            DO NOT use any markdown formatting like # or ## headers in your response.
            Format the response in plain text with clear section labels.
            
            IMPORTANT: For ingredients, use bullet points with the format:
            - First ingredient
            - Second ingredient
            
            For preparation steps, use numbered steps with the format:
            1. First step
            2. Second step`,
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
    return data.choices[0]?.message?.content || "Sorry, I could not retrieve information about this food at the moment."
  } catch (error) {
    console.error("Error generating AI response:", error)
    return "Sorry, I could not retrieve information about this food at the moment. Please try again later."
  }
}
