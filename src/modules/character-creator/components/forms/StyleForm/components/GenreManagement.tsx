"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { useGenres } from "@/modules/character-creator/data/useGenres"
import { useStyleFormStore } from "../store/useStyleFormStore"

export function GenreManagement() {
  const { t } = useI18n()
  const { genres: predefinedGenres } = useGenres()
  const { config, newGenre, setNewGenre, addGenre, removeGenre, toggleGenre } = useStyleFormStore()
  
  const handleNewGenreKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addGenre()
    }
  }

  // Create a map for predefined genre lookups
  const predefinedGenreMap = predefinedGenres.reduce<Record<string, boolean>>(
    (acc, genre) => ({ ...acc, [genre.id]: true }), 
    {}
  )

  return (
    <div className="mt-8">
      <h4 className="text-md font-medium mb-3">
        {t('modules.character-creator.components.forms.StyleForm.genres.label')}
      </h4>
      <p className="text-sm text-muted-foreground mb-4">
        {t('modules.character-creator.components.forms.StyleForm.genres.description')}
      </p>
      
      <div className="space-y-2">
        <SelectedGenresDisplay 
          selectedGenres={config.genres || []} 
          removeGenre={removeGenre} 
          predefinedGenreMap={predefinedGenreMap}
          t={t}
        />
        
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input 
              placeholder={t('modules.character-creator.components.forms.StyleForm.genres.placeholder')} 
              value={newGenre}
              onChange={(e) => setNewGenre(e.target.value)}
              onKeyDown={handleNewGenreKeyDown}
            />
            <Button onClick={addGenre} size="sm" type="button">
              {t('modules.character-creator.components.forms.StyleForm.genres.addButton')}
            </Button>
          </div>
          
          <PredefinedGenreSelector 
            predefinedGenres={predefinedGenres} 
            selectedGenres={config.genres || []} 
            toggleGenre={toggleGenre}
            t={t}
          />
        </div>
      </div>
    </div>
  )
}

interface SelectedGenresDisplayProps {
  selectedGenres: string[]
  removeGenre: (index: number) => void
  predefinedGenreMap: Record<string, boolean>
  t: (key: string) => string
}

function SelectedGenresDisplay({ selectedGenres, removeGenre, predefinedGenreMap, t }: SelectedGenresDisplayProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {selectedGenres.map((genre, index) => (
        <Badge key={index} variant="secondary" className="gap-1">
          {genre in predefinedGenreMap 
            ? t(`modules.character-creator.components.forms.StyleForm.genres.${genre}`) 
            : genre}
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 p-0"
            onClick={() => removeGenre(index)}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      ))}
    </div>
  )
}

interface PredefinedGenreSelectorProps {
  predefinedGenres: { id: string; name: string }[]
  selectedGenres: string[]
  toggleGenre: (genreId: string) => void
  t: (key: string) => string
}

function PredefinedGenreSelector({ predefinedGenres, selectedGenres, toggleGenre, t }: PredefinedGenreSelectorProps) {
  return (
    <div className="space-y-2">
      <Label>{t('modules.character-creator.components.forms.StyleForm.genres.predefinedLabel')}</Label>
      <div className="flex flex-wrap gap-2">
        {predefinedGenres.map((genre) => (
          <Badge 
            key={genre.id} 
            variant={selectedGenres.includes(genre.id) ? "secondary" : "outline"}
            className="cursor-pointer hover:bg-accent"
            onClick={() => toggleGenre(genre.id)}
          >
            {genre.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
