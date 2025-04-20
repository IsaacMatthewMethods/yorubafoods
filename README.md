# Yoruba Food Helper

A mobile-friendly web application that helps users discover and learn about Yoruba cuisine. This application provides information about traditional Yoruba foods, their preparation methods, cultural significance, and nutritional information.

![Yoruba Food Helper Screenshot](/placeholder.svg?height=400&width=200)

## Features

- Browse food categories (soups, swallows, rice dishes, snacks, drinks, festival foods)
- Detailed information about each food item including ingredients, preparation instructions, and cultural significance
- AI-powered cuisine search to find information about specific Yoruba foods
- AI chat assistant to answer questions about Yoruba cuisine
- Video demonstrations for cooking techniques
- Dark/light mode toggle
- Fully responsive design optimized for mobile devices

## Technologies Used

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- OpenAI API (for AI features)
- Vercel AI SDK

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/yoruba-food-helper.git
cd yoruba-food-helper
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Create a `.env.local` file in the root directory and add your OpenAI API key:

\`\`\`
OPENAI_API_KEY=your_openai_api_key_here
\`\`\`

### Running Locally

1. Start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

\`\`\`
yoruba-food-helper/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── actions/            # Server actions for AI features
│   ├── categories/         # Food categories pages
│   ├── chat/               # AI chat page
│   ├── cuisine-finder/     # Cuisine search page
│   ├── food/               # Food detail pages
│   ├── login/              # Login page
│   ├── globals.css         # Global CSS styles
│   └── layout.tsx          # Root layout component
├── components/             # Reusable React components
│   ├── ui/                 # shadcn/ui components
│   ├── ai-chat-interface.tsx
│   ├── category-card.tsx
│   ├── cuisine-search.tsx
│   ├── food-card.tsx
│   ├── mobile-nav.tsx
│   ├── theme-provider.tsx
│   └── video-modal.tsx
├── lib/                    # Utility functions
├── public/                 # Static assets
└── ...                     # Configuration files
\`\`\`

## Making Changes

### Modifying Styles

The project uses Tailwind CSS for styling. You can modify styles in several ways:

1. **Global Styles**: Edit `app/globals.css` to change global styles.

2. **Theme Colors**: Modify the color palette in `tailwind.config.ts`:

\`\`\`typescript
// tailwind.config.ts
const config: Config = {
  // ...
  theme: {
    extend: {
      colors: {
        yoruba: {
          50: "#f5f9e9",
          // ... modify these colors to change the theme
          950: "#1a2509",
        },
        // ... other colors
      },
      // ... other theme extensions
    },
  },
  // ...
}
\`\`\`

3. **Component Styles**: Edit the Tailwind classes in individual component files to change their appearance.

4. **CSS Variables**: Modify the CSS variables in `app/globals.css` to change the theme colors:

\`\`\`css
:root {
  --background: 60 100% 99%;
  --foreground: 20 14.3% 4.1%;
  /* ... modify these variables to change the theme */
}

.dark {
  --background: 20 14.3% 4.1%;
  --foreground: 60 100% 99%;
  /* ... modify these variables to change the dark theme */
}
\`\`\`

### Adding Content

#### Adding New Food Items

1. To add a new food item, edit the appropriate category file in `app/categories/[category]/page.tsx`:

\`\`\`typescript
// Example: Adding a new soup
const categoryData = {
  soups: {
    // ...
    items: [
      // ... existing items
      {
        id: "new-soup",
        name: "New Soup",
        description: "Description of the new soup",
        image: "/placeholder.svg?height=800&width=600", // Replace with actual image path
        videoId: "youtube_video_id", // Replace with actual YouTube video ID
      },
      // ... more items
    ],
  },
  // ... other categories
}
\`\`\`

2. Then, add the detailed information for the new food item in `app/food/[id]/page.tsx`:

\`\`\`typescript
const foodData = {
  // ... existing food items
  "new-soup": {
    name: "New Soup",
    description: "Description of the new soup",
    longDescription: `
      Detailed description of the new soup...
    `,
    ingredients: [
      "Ingredient 1",
      "Ingredient 2",
      // ... more ingredients
    ],
    instructions: [
      "Step 1",
      "Step 2",
      // ... more steps
    ],
    nutritionalInfo: {
      calories: "XXX per serving",
      protein: "XXg",
      carbs: "XXg",
      fat: "XXg",
      fiber: "XXg",
    },
    culturalSignificance: "Cultural significance of the new soup...",
    image: "/placeholder.svg?height=800&width=600", // Replace with actual image path
    videoId: "youtube_video_id", // Replace with actual YouTube video ID
  },
  // ... more food items
}
\`\`\`

#### Adding New Categories

1. To add a new category, edit the categories array in `app/categories/page.tsx`:

\`\`\`typescript
const categories = [
  // ... existing categories
  {
    id: "new-category",
    name: "New Category",
    description: "Description of the new category",
    image: "/placeholder.svg?height=800&width=600", // Replace with actual image path
  },
  // ... more categories
]
\`\`\`

2. Then, add the new category to the `categoryData` object in `app/categories/[category]/page.tsx`:

\`\`\`typescript
const categoryData = {
  // ... existing categories
  "new-category": {
    name: "New Category",
    description: "Description of the new category",
    items: [
      {
        id: "item-1",
        name: "Item 1",
        description: "Description of item 1",
        image: "/placeholder.svg?height=800&width=600", // Replace with actual image path
        videoId: "youtube_video_id", // Replace with actual YouTube video ID
      },
      // ... more items
    ],
  },
  // ... more categories
}
\`\`\`

#### Adding Images

1. Place your image files in the `public` directory.
2. Reference them in your code using the path relative to the `public` directory:

\`\`\`typescript
image: "/your-image-name.jpg", // If the image is directly in the public directory
// or
image: "/images/your-image-name.jpg", // If the image is in a subdirectory
\`\`\`

#### Adding Videos

The application uses YouTube videos. To add a video:

1. Get the YouTube video ID (the part after `v=` in the YouTube URL).
2. Add the video ID to the appropriate food item:

\`\`\`typescript
videoId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
\`\`\`

## Deployment

This project is designed to be deployed on Vercel. To deploy:

1. Push your code to a GitHub repository.
2. Import the repository in Vercel.
3. Add your environment variables (OPENAI_API_KEY) in the Vercel project settings.
4. Deploy!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [OpenAI](https://openai.com/)
- [Vercel](https://vercel.com/)
