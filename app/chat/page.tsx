import AiChatInterface from "@/components/ai-chat-interface"
import Image from "next/image"

export default function ChatPage() {
  return (
    <main className="w-full px-4 py-6 mt-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">AI Chat Assistant</h1>
          <p className="text-muted-foreground mt-2">Ask questions about Yoruba cuisine and cooking</p>
        </div>

        <div className="relative rounded-lg overflow-hidden mb-6">
          <Image
            src="/images/ai-chat-hero.jpg"
            alt="AI Chat"
            width={600}
            height={300}
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4 text-white">
              <p className="text-sm">Powered by AI</p>
            </div>
          </div>
        </div>

        <AiChatInterface />
      </div>
    </main>
  )
}
