'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipForward, Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const tracks = [
  { title: 'Synthwave Nights', src: '/music/synthwave-nights.mp3' },
  { title: 'Neon Dreams', src: '/music/neon-dreams.mp3' },
  { title: 'Retro Cruise', src: '/music/retro-cruise.mp3' },
]

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(tracks[0])
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [isPlaying, currentTrack])

  const handleTrackChange = (value: string) => {
    const newTrack = tracks.find((track) => track.src === value)
    if (newTrack) {
      setCurrentTrack(newTrack)
      setIsPlaying(true)
    }
  }

  return (
    <div className="fixed top-4 right-4 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-lg z-50">
      <audio ref={audioRef} src={currentTrack.src} muted={isMuted} />
      <div className="flex items-center space-x-2 mb-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            const nextIndex =
              (tracks.findIndex((t) => t.src === currentTrack.src) + 1) %
              tracks.length
            setCurrentTrack(tracks[nextIndex])
          }}
        >
          <SkipForward className="h-4 w-4" />
        </Button>
      </div>
      <Select onValueChange={handleTrackChange} value={currentTrack.src}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a track" />
        </SelectTrigger>
        <SelectContent>
          {tracks.map((track) => (
            <SelectItem key={track.src} value={track.src}>
              {track.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
