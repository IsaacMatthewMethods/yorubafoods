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
            content: `You are a Yoruba cuisine expert. When users search for foods, provide detailed information in the following structured format:

[Food Name]

Description:
[Brief description of the dish]

Ingredients:
- [ingredient 1]
- [ingredient 2]
- [ingredient 3]
[etc.]

Preparation:
1. [step 1]
2. [step 2]
3. [step 3]
[etc.]

Cultural Significance:
[Information about cultural importance, occasions when eaten, regional variations]

Nutritional Information:
[Health benefits, nutritional content, dietary considerations]

Always use this exact format with these section headers. Focus specifically on traditional Yoruba cuisine. If the query is not about Yoruba food, try to relate it to similar Yoruba dishes or suggest Yoruba alternatives.`,
          },
          {
            role: "user",
            content: `Tell me about "${query}" in relation to Yoruba cuisine.`,
          },
        ],
        max_tokens: 600,
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
