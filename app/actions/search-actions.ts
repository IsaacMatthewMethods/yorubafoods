"use server"

export async function searchCuisine(query: string): Promise<string> {
  try {
    // Static response for now - AI functionality disabled
    return `Information about "${query}":

This is a placeholder response. The AI search functionality has been temporarily disabled.

For detailed information about Yoruba cuisine, please browse our categories section where you can find comprehensive details about various traditional dishes including ingredients, preparation methods, and cultural significance.

Popular Yoruba dishes include:
- Amala with Ewedu and Gbegiri
- Jollof Rice
- Pounded Yam with Egusi
- Akara (Bean Cakes)
- Moi Moi (Steamed Bean Pudding)
- Puff Puff

Please explore our food categories to learn more about these delicious traditional foods.`
  } catch (error) {
    console.error("Error in search:", error)
    return "Sorry, I could not retrieve information about this food at the moment. Please try again later."
  }
}
