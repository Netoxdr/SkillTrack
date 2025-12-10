"use client"

import { useState } from "react"
import { AcademiesView } from "@/components/academies-view"
import { PlayersView } from "@/components/players-view"
import { PlayerDetail } from "@/components/player-detail"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Page() {
  const [activeView, setActiveView] = useState<"academies" | "players">("academies")
  const [selectedPlayer, setSelectedPlayer] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Trophy className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SoccerStats</h1>
                <p className="text-xs text-muted-foreground">Academy & Player Analytics</p>
              </div>
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search players, academies..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2">
              <Button
                variant={activeView === "academies" ? "default" : "ghost"}
                onClick={() => {
                  setActiveView("academies")
                  setSelectedPlayer(null)
                }}
                className="gap-2"
              >
                <Trophy className="h-4 w-4" />
                <span className="hidden sm:inline">Academies</span>
              </Button>
              <Button
                variant={activeView === "players" ? "default" : "ghost"}
                onClick={() => {
                  setActiveView("players")
                  setSelectedPlayer(null)
                }}
                className="gap-2"
              >
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Players</span>
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search players, academies..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 lg:px-6">
        {selectedPlayer !== null ? (
          <PlayerDetail playerId={selectedPlayer} onBack={() => setSelectedPlayer(null)} />
        ) : activeView === "academies" ? (
          <AcademiesView searchQuery={searchQuery} onSelectPlayer={setSelectedPlayer} />
        ) : (
          <PlayersView searchQuery={searchQuery} onSelectPlayer={setSelectedPlayer} />
        )}
      </main>
    </div>
  )
}
