"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const playerData = {
  1: {
    id: 1,
    name: "Lucas Silva",
    position: "Forward",
    number: 9,
    academy: "Future Stars Academy",
    age: 17,
    nationality: "Brazil",
    height: "1.78m",
    weight: "72kg",
    foot: "Right",
    joinedDate: "Jan 2023",
    image: "/young-soccer-player-portrait.png",
    stats: {
      season: "2024/25",
      goals: 24,
      assists: 12,
      matches: 32,
      minutesPlayed: 2640,
      rating: 8.4,
      shotsOnTarget: 68,
      passAccuracy: 84,
      tacklesWon: 12,
      dribbles: 89,
    },
    attributes: {
      pace: 88,
      shooting: 85,
      passing: 78,
      dribbling: 86,
      defending: 42,
      physical: 75,
    },
    recentForm: [
      { match: "vs Academy A", rating: 8.8, goals: 2, assists: 1 },
      { match: "vs Academy B", rating: 7.9, goals: 1, assists: 0 },
      { match: "vs Academy C", rating: 9.2, goals: 3, assists: 2 },
      { match: "vs Academy D", rating: 7.5, goals: 1, assists: 1 },
      { match: "vs Academy E", rating: 8.6, goals: 2, assists: 0 },
    ],
  },
}

interface PlayerDetailProps {
  playerId: number
  onBack: () => void
}

export function PlayerDetail({ playerId, onBack }: PlayerDetailProps) {
  const player = playerData[playerId as keyof typeof playerData] || playerData[1]

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={onBack} className="gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back to Players
      </Button>

      {/* Player Header */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={player.image || "/placeholder.svg"} alt={player.name} />
              <AvatarFallback className="text-3xl">
                {player.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-bold text-foreground text-balance">{player.name}</h1>
                    <Badge className="text-lg px-3 py-1 bg-accent text-accent-foreground">#{player.number}</Badge>
                  </div>
                  <p className="text-xl text-muted-foreground">
                    {player.position} • {player.academy}
                  </p>
                </div>
                <Badge variant="outline" className="text-base px-4 py-2">
                  Season Rating: <span className="ml-2 font-bold text-accent">{player.stats.rating}</span>
                </Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Age</p>
                  <p className="font-semibold text-foreground">{player.age} years</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Nationality</p>
                  <p className="font-semibold text-foreground">{player.nationality}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Height / Weight</p>
                  <p className="font-semibold text-foreground">
                    {player.height} / {player.weight}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Preferred Foot</p>
                  <p className="font-semibold text-foreground">{player.foot}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Season Statistics */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-6">Season {player.stats.season} Statistics</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Goals</p>
              <p className="text-3xl font-bold text-foreground">{player.stats.goals}</p>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                <span>+12% from last season</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Assists</p>
              <p className="text-3xl font-bold text-foreground">{player.stats.assists}</p>
              <div className="flex items-center gap-1 text-xs text-green-600">
                <TrendingUp className="h-3 w-3" />
                <span>+8% from last season</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Matches Played</p>
              <p className="text-3xl font-bold text-foreground">{player.stats.matches}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Minutes</p>
              <p className="text-3xl font-bold text-foreground">{player.stats.minutesPlayed}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Shots on Target</p>
              <p className="text-2xl font-bold text-foreground">{player.stats.shotsOnTarget}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Pass Accuracy</p>
              <p className="text-2xl font-bold text-foreground">{player.stats.passAccuracy}%</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-6">Player Attributes</h3>
          <div className="space-y-4">
            {Object.entries(player.attributes).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground capitalize">{key}</span>
                  <span className="font-bold text-accent">{value}</span>
                </div>
                <Progress value={value} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Form */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-6">Recent Form</h3>
        <div className="space-y-3">
          {player.recentForm.map((form, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-sm font-bold text-accent">{form.rating}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{form.match}</p>
                  <p className="text-sm text-muted-foreground">
                    {form.goals} {form.goals === 1 ? "Goal" : "Goals"} • {form.assists}{" "}
                    {form.assists === 1 ? "Assist" : "Assists"}
                  </p>
                </div>
              </div>
              <div>
                {form.rating >= 8.5 ? (
                  <Badge className="gap-1 bg-green-600 text-white">
                    <TrendingUp className="h-3 w-3" />
                    Excellent
                  </Badge>
                ) : form.rating >= 7.5 ? (
                  <Badge variant="secondary" className="gap-1">
                    <Minus className="h-3 w-3" />
                    Good
                  </Badge>
                ) : (
                  <Badge variant="outline" className="gap-1">
                    <TrendingDown className="h-3 w-3" />
                    Average
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
