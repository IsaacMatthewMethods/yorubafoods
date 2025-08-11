import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import MobileNav from "@/components/mobile-nav"
import BottomNav from "@/components/bottom-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yoruba Food Helper",
  description: "Discover and learn about Yoruba cuisine",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  manifest: "/manifest.json",
  themeColor: "#d97706",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Yoruba Food Helper",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Yoruba Food Helper",
    title: "Yoruba Food Helper",
    description: "Discover and learn about Yoruba cuisine",
  },
  twitter: {
    card: "summary",
    title: "Yoruba Food Helper",
    description: "Discover and learn about Yoruba cuisine",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d97706" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Yoruba Food Helper" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen max-w-md mx-auto">
            <MobileNav />
            <div className="flex-1 w-full pb-20">{children}</div>
            <BottomNav />
          </div>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
