"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Book, Search, MessageSquare, Info } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/categories",
    label: "Categories",
    icon: Book,
  },
  {
    href: "/cuisine-finder",
    label: "Search",
    icon: Search,
  },
  {
    href: "/chat",
    label: "Chat",
    icon: MessageSquare,
  },
  {
    href: "/about",
    label: "About",
    icon: Info,
  },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t shadow-lg safe-area-inset-bottom">
      <div className="max-w-md mx-auto px-1 py-1">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center px-2 py-2 rounded-xl transition-all duration-200 min-w-0 flex-1 relative group",
                  "min-h-[3rem] active:scale-95",
                  isActive ? "text-yoruba-600 dark:text-yoruba-400" : "text-muted-foreground hover:text-foreground",
                )}
                aria-label={item.label}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 bg-yoruba-100 dark:bg-yoruba-900/30 rounded-xl scale-105 transition-transform duration-200" />
                )}

                <div className="relative z-10 flex flex-col items-center">
                  <Icon
                    className={cn("h-5 w-5 mb-1 transition-all duration-200", isActive && "scale-110 drop-shadow-sm")}
                  />
                  <span
                    className={cn(
                      "text-xs font-medium truncate transition-all duration-200 max-w-full",
                      isActive
                        ? "text-yoruba-600 dark:text-yoruba-400 font-semibold"
                        : "text-muted-foreground group-hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </span>
                </div>

                {/* Ripple effect on tap */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-current opacity-0 group-active:opacity-10 transition-opacity duration-150" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
