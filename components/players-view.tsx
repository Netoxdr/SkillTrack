"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const players = [
  {
    id: 1,
    name: "Lucas Silva",
    position: "Forward",
    number: 9,
    academy: "Future Stars Academy",
    age: 17,
    nationality: "Brazil",
    image: "/young-soccer-player-portrait.png",
    stats: { goals: 24, assists: 12, matches: 32, rating: 8.4 },
  },
  {
    id: 2,
    name: "Emma Johnson",
    position: "Midfielder",
    number: 10,
    academy: "Elite Football Academy",
    age: 16,
    nationality: "England",
    image: "/female-soccer-player.png",
    stats: { goals: 15, assists: 22, matches: 30, rating: 8.7 },
  },
  {
    id: 3,
    name: "Marcus Weber",
    position: "Defender",
    number: 4,
    academy: "Premier Skills Institute",
    age: 18,
    nationality: "Germany",
    image: "/soccer-defender.png",
    stats: { goals: 3, assists: 5, matches: 35, rating: 8.1 },
  },
  {
    id: 4,
    name: "Sofia Martinez",
    position: "Goalkeeper",
    number: 1,
    academy: "Champions Youth Development",
    age: 17,
    nationality: "Spain",
    image: "/female-goalkeeper.jpg",
    stats: { goals: 0, assists: 2, matches: 34, rating: 8.5 },
  },
  {
    id: 5,
    name: "Alessandro Rossi",
    position: "Forward",
    number: 11,
    academy: "Victory Academy",
    age: 16,
    nationality: "Italy",
    image: "/young-striker-soccer.jpg",
    stats: { goals: 28, assists: 9, matches: 31, rating: 8.8 },
  },
  {
    id: 6,
    name: "Thomas Dubois",
    position: "Midfielder",
    number: 8,
    academy: "Rising Talents FC",
    age: 18,
    nationality: "France",
    image: "/midfielder-soccer-player.jpg",
    stats: { goals: 11, assists: 18, matches: 33, rating: 8.3 },
  },
]

interface PlayersViewProps {
  searchQuery: string
  onSelectPlayer: (playerId: number) => void
}

export function PlayersView({ searchQuery, onSelectPlayer }: PlayersViewProps) {
  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.academy.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Player Database</h2>
        <p className="text-muted-foreground">Browse talented young players and view their performance statistics</p>
      </div>

      {/* Players Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPlayers.map((player) => (
          <Card
            key={player.id}
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onSelectPlayer(player.id)}
          >
            <div className="relative bg-gradient-to-br from-muted to-muted/50 p-6">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="font-semibold">
                  #{player.number}
                </Badge>
                <Badge className="bg-accent text-accent-foreground">{player.nationality}</Badge>
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 border-4 border-background">
                  <AvatarImage src={player.image || "/placeholder.svg"} alt={player.name} />
                  <AvatarFallback>
                    {player.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1 text-balance">{player.name}</h3>
                  <p className="text-sm text-muted-foreground">{player.position}</p>
                  <p className="text-sm text-muted-foreground">Age {player.age}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="text-sm text-muted-foreground">{player.academy}</div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">Goals</p>
                  <p className="text-lg font-bold text-foreground">{player.stats.goals}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Assists</p>
                  <p className="text-lg font-bold text-foreground">{player.stats.assists}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Matches</p>
                  <p className="text-lg font-bold text-foreground">{player.stats.matches}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <p className="text-lg font-bold text-accent">{player.stats.rating}</p>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                View Full Profile
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
