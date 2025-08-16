"use server"

export async function chatWithAi(message: string): Promise<string> {
  try {
    // Static response for now - AI functionality disabled
    return `Thank you for your message: "${message}"

The AI chat functionality has been temporarily disabled. However, I can still help you explore Yoruba cuisine!

Here are some ways to discover more about Yoruba foods:

1. Browse our Categories section to explore different types of dishes
2. Use the Cuisine Finder to search for specific foods
3. Check out our Featured Foods on the homepage
4. Watch cooking videos for step-by-step preparation guides

Popular topics you might be interested in:
- Traditional soups like Ewedu, Gbegiri, and Ogbono
- Swallow foods like Amala, Eba, and Pounded Yam
- Delicious snacks like Puff Puff, Akara, and Chin Chin
- Rice dishes and refreshing drinks

Feel free to explore the app to learn more about these amazing traditional foods!`
  } catch (error) {
    console.error("Error in chat:", error)
    return "Sorry, I could not process your request at the moment. Please try again later."
  }
}
