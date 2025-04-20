"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

interface VideoModalProps {
  videoId: string
  onClose: () => void
}

export default function VideoModal({ videoId, onClose }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.addEventListener("mousedown", handleClickOutside)

    // Prevent scrolling on the body
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const handleIframeError = () => {
    setError("Failed to load video. Please try again later.")
  }

  return (
    <div className="video-modal">
      <button className="close-button" onClick={onClose} aria-label="Close video">
        <X className="h-6 w-6" />
      </button>
      <div className="video-container" ref={modalRef}>
        {error ? (
          <div className="flex items-center justify-center h-full bg-black text-white p-4 rounded-lg">{error}</div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onError={handleIframeError}
          ></iframe>
        )}
      </div>
    </div>
  )
}
