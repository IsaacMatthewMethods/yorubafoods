"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon, Home, Book, Search, Info, MessageSquare, User, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/contexts/auth-context"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { user, isAdmin, signOut, isLoading } = useAuth()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    { href: "/categories", label: "Categories", icon: <Book className="h-5 w-5" /> },
    { href: "/cuisine-finder", label: "Cuisine Finder", icon: <Search className="h-5 w-5" /> },
    { href: "/chat", label: "AI Chat", icon: <MessageSquare className="h-5 w-5" /> },
    { href: "/about", label: "About", icon: <Info className="h-5 w-5" /> },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-background",
      )}
    >
      <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl flex items-center gap-2" onClick={closeMenu}>
          <span className="text-yoruba-500">Yoruba</span> Food
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {!isLoading && user && (
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.email || "User"} />
              <AvatarFallback>{user.email?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
            </Avatar>
          )}

          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu" className="rounded-full">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b shadow-lg z-50 animate-in slide-in-from-top duration-300 max-w-full">
          <div className="max-w-md mx-auto px-4 py-4 flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors",
                  pathname === item.href ? "bg-primary/10 text-primary font-medium" : "hover:bg-accent",
                )}
                onClick={closeMenu}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}

            {isAdmin && (
              <Link
                href="/admin"
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg transition-colors",
                  pathname.startsWith("/admin") ? "bg-primary/10 text-primary font-medium" : "hover:bg-accent",
                )}
                onClick={closeMenu}
              >
                <Settings className="h-5 w-5" />
                Admin Dashboard
              </Link>
            )}

            {!isLoading && !user ? (
              <Link
                href="/login"
                className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-accent"
                onClick={closeMenu}
              >
                <User className="h-5 w-5" />
                Login
              </Link>
            ) : (
              <Button
                variant="ghost"
                className="justify-start gap-3 px-3 py-3 h-auto rounded-lg hover:bg-accent"
                onClick={() => {
                  signOut()
                  closeMenu()
                }}
              >
                <User className="h-5 w-5" />
                Logout
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
