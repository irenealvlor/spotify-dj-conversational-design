"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Search, Library, Plus, AudioWaveform, MoreHorizontal } from "lucide-react"

export default function DJGreetingState() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col max-w-sm mx-auto">
      <header className="flex justify-end p-4 pt-2 pb-0">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-white/10 rounded-full p-3 focus:ring-2 focus:outline-none min-h-[44px] min-w-[44px]"
          style={{
            color: "#1CE78D",
            focusRingColor: "#1CE78D",
          }}
          aria-label="Open options menu"
        >
          <MoreHorizontal className="w-10 h-10" />
        </Button>
      </header>

      <main className="flex-1 p-4 pt-0">
        <section className="mb-8 mt-4" aria-label="DJ greeting">
          <div className="flex items-center gap-3">
            <Avatar
              className="w-8 h-8 flex-shrink-0"
              style={{
                animation: "breathe 2s ease-in-out infinite",
              }}
            >
              <AvatarImage src="/spotify-dj-logo-transparent.png" alt="Spotify AI DJ avatar" />
              <AvatarFallback className="bg-green-500 text-black font-bold">DJ</AvatarFallback>
            </Avatar>
            <Card className="bg-blue-400/80 border-blue-300 p-3 backdrop-blur-sm max-w-[75%] px-3 rounded-3xl py-2">
              <p className="text-sm font-normal leading-relaxed text-white">Hey Alex 🤙 what's the vibe today?</p>
            </Card>
          </div>
        </section>
      </main>

      <form className="p-4 pb-2" onSubmit={(e) => e.preventDefault()} role="search">
        <div className="space-y-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <label htmlFor="music-input" className="sr-only">
                Tell the DJ what music you want to hear
              </label>
              <Input
                id="music-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type or say what you want to hear…"
                className="bg-blue-900/60 rounded-full px-4 py-3 text-white placeholder:text-blue-200 backdrop-blur-sm transition-all duration-500 border-0 outline-none ring-0 focus:border-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
                style={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = `0 0 40px rgba(28, 231, 141, 0.6), 0 0 80px rgba(28, 231, 141, 0.3), 0 0 120px rgba(28, 231, 141, 0.1)`
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "none"
                }}
                aria-describedby="input-help"
              />
              <div id="input-help" className="sr-only">
                Enter your music preferences or use voice input
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-12 w-12 p-0 focus:ring-2 focus:outline-none"
              style={{
                backgroundColor: "rgba(28, 231, 141, 0.3)",
                color: "#1CE78D",
                border: `2px solid #1CE78D`,
                focusRingColor: "#1CE78D",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1CE78D"
                e.currentTarget.style.color = "black"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(28, 231, 141, 0.3)"
                e.currentTarget.style.color = "#1CE78D"
              }}
              aria-label="Use voice input to tell DJ your music preferences"
              type="button"
            >
              <AudioWaveform className="w-8 h-8" />
            </Button>
          </div>

          <fieldset className="flex gap-2 justify-between">
            <legend className="sr-only">Quick music genre selections</legend>
            {["🎸 Fito", "⚡️Electronic", "🎓 Study time"].map((label, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-white rounded-full px-3 py-3 text-xs backdrop-blur-sm flex-1 min-w-0 focus:ring-2 focus:outline-none bg-transparent"
                style={{
                  backgroundColor: "rgba(59, 130, 246, 0.4)",
                  border: `2px solid #1CE78D`,
                  focusRingColor: "#1CE78D",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1AE68D"
                  e.currentTarget.style.color = "black"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.4)"
                  e.currentTarget.style.color = "white"
                }}
                aria-label={`Play ${label.split(" ")[1]} music`}
                type="button"
              >
                {label}
              </Button>
            ))}
          </fieldset>
        </div>
      </form>

      <nav className="bg-gray-900 px-4 pt-3 pb-6" aria-label="Main navigation">
        <div className="grid grid-cols-5 gap-2" role="tablist">
          <button
            className="flex flex-col items-center gap-1 p-2 text-gray-400 focus:ring-2 focus:outline-none rounded-lg"
            style={{ focusRingColor: "#1CE78D" }}
            role="tab"
            aria-selected="false"
            aria-label="Home page"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs">Home</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 p-2 text-gray-400 focus:ring-2 focus:outline-none rounded-lg"
            style={{ focusRingColor: "#1CE78D" }}
            role="tab"
            aria-selected="false"
            aria-label="Search music"
          >
            <Search className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs">Search</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 p-2 text-white focus:ring-2 focus:outline-none rounded-lg"
            style={{ focusRingColor: "#1CE78D" }}
            role="tab"
            aria-selected="true"
            aria-label="AI DJ - currently active"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <img
                src="/spotify-dj-logo-transparent.png"
                alt=""
                className="w-5 h-5 object-contain"
                aria-hidden="true"
              />
            </div>
            <span className="text-xs font-medium">DJ</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 p-2 text-gray-400 focus:ring-2 focus:outline-none rounded-lg"
            style={{ focusRingColor: "#1CE78D" }}
            role="tab"
            aria-selected="false"
            aria-label="Your music library"
          >
            <Library className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs text-center whitespace-nowrap">Your Library</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 p-2 text-gray-400 focus:ring-2 focus:outline-none rounded-lg"
            style={{ focusRingColor: "#1CE78D" }}
            role="tab"
            aria-selected="false"
            aria-label="Create new playlist"
          >
            <Plus className="w-5 h-5" aria-hidden="true" />
            <span className="text-xs">Create</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
