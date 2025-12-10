"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

const academies = [
  {
    id: 1,
    name: "Elite Football Academy",
    location: "Manchester, UK",
    founded: 2010,
    players: 145,
    achievements: 12,
    image: "/soccer-academy-training-ground.jpg",
  },
  {
    id: 2,
    name: "Champions Youth Development",
    location: "Barcelona, Spain",
    founded: 2005,
    players: 218,
    achievements: 28,
    image: "/professional-soccer-training-facility.jpg",
  },
  {
    id: 3,
    name: "Future Stars Academy",
    location: "São Paulo, Brazil",
    founded: 2012,
    players: 186,
    achievements: 15,
    image: "/youth-soccer-academy-pitch.jpg",
  },
  {
    id: 4,
    name: "Premier Skills Institute",
    location: "Munich, Germany",
    founded: 2008,
    players: 167,
    achievements: 22,
    image: "/modern-soccer-training-complex.jpg",
  },
  {
    id: 5,
    name: "Rising Talents FC",
    location: "Paris, France",
    founded: 2015,
    players: 134,
    achievements: 9,
    image: "/european-soccer-academy.jpg",
  },
  {
    id: 6,
    name: "Victory Academy",
    location: "Milan, Italy",
    founded: 2007,
    players: 192,
    achievements: 19,
    image: "/italian-soccer-training-center.jpg",
  },
]

interface AcademiesViewProps {
  searchQuery: string
  onSelectPlayer: (playerId: number) => void
}

export function AcademiesView({ searchQuery, onSelectPlayer }: AcademiesViewProps) {
  const filteredAcademies = academies.filter(
    (academy) =>
      academy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      academy.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Soccer Academies</h2>
        <p className="text-muted-foreground">Discover top soccer academies developing the next generation of talent</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Academies</p>
              <p className="text-3xl font-bold text-foreground">{academies.length}</p>
            </div>
            <Trophy className="h-8 w-8 text-accent" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Players</p>
              <p className="text-3xl font-bold text-foreground">{academies.reduce((sum, a) => sum + a.players, 0)}</p>
            </div>
            <Users className="h-8 w-8 text-accent" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Championships</p>
              <p className="text-3xl font-bold text-foreground">
                {academies.reduce((sum, a) => sum + a.achievements, 0)}
              </p>
            </div>
            <Trophy className="h-8 w-8 text-accent" />
          </div>
        </Card>
      </div>

      {/* Academies Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAcademies.map((academy) => (
          <Card key={academy.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src={academy.image || "/placeholder.svg"}
                alt={academy.name}
                className="h-full w-full object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">Est. {academy.founded}</Badge>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 text-balance">{academy.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{academy.location}</span>
                </div>
              </div>

              <div className="flex gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Players</p>
                  <p className="text-lg font-semibold text-foreground">{academy.players}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Titles</p>
                  <p className="text-lg font-semibold text-foreground">{academy.achievements}</p>
                </div>
              </div>

              <Button className="w-full" onClick={() => onSelectPlayer(1)}>
                View Players
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
