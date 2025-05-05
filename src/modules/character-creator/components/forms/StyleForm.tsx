"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ColoringBookIllustrationConfig } from "@/lib/types"
import { useI18n } from "@/lib/i18n"
import { useGenres } from "@/modules/character-creator/data/useGenres"

interface StyleFormProps {
  config: ColoringBookIllustrationConfig
  updateConfig: (config: Partial<ColoringBookIllustrationConfig>) => void
}

export function StyleForm({ config, updateConfig }: StyleFormProps) {
  const { t } = useI18n();
  const { genres: predefinedGenres } = useGenres();
  const [newGenre, setNewGenre] = useState("");
  
  const addGenre = () => {
    if (newGenre.trim() !== "") {
      const currentGenres = [...config.genres];
      if (!currentGenres.includes(newGenre.trim())) {
        updateConfig({
          genres: [...currentGenres, newGenre.trim()]
        });
      }
      setNewGenre("");
    }
  };
  
  const removeGenre = (index: number) => {
    const currentGenres = [...config.genres];
    currentGenres.splice(index, 1);
    updateConfig({
      genres: currentGenres
    });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t('modules.character-creator.components.forms.StyleForm.title')}</h3>
        <p className="text-sm text-muted-foreground">
          {t('modules.character-creator.components.forms.StyleForm.description')}
        </p>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-md font-medium mb-3">{t('modules.character-creator.components.forms.StyleForm.artStyle.label')}</h4>
          <p className="text-sm text-muted-foreground mb-4">
            {t('modules.character-creator.components.forms.StyleForm.artStyle.description')}
          </p>
          
          <RadioGroup
            value={config.artStyle}
            onValueChange={(value) => 
              updateConfig({ artStyle: value as 'anime' | 'manga' | 'comic' | 'toon' | 'webtoon' })}
            className="grid grid-cols-5 gap-4"
          >
            <div>
              <RadioGroupItem value="anime" id="anime" className="peer sr-only" />
              <Label
                htmlFor="anime"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span>{t('modules.character-creator.components.forms.StyleForm.artStyle.options.anime')}</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem value="manga" id="manga" className="peer sr-only" />
              <Label
                htmlFor="manga"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span>{t('modules.character-creator.components.forms.StyleForm.artStyle.options.manga')}</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem value="comic" id="comic" className="peer sr-only" />
              <Label
                htmlFor="comic"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span>{t('modules.character-creator.components.forms.StyleForm.artStyle.options.comic')}</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem value="toon" id="toon" className="peer sr-only" />
              <Label
                htmlFor="toon"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span>{t('modules.character-creator.components.forms.StyleForm.artStyle.options.toon')}</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem value="webtoon" id="webtoon" className="peer sr-only" />
              <Label
                htmlFor="webtoon"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <span>{t('modules.character-creator.components.forms.StyleForm.artStyle.options.webtoon')}</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="mt-8">
          <h4 className="text-md font-medium mb-3">{t('modules.character-creator.components.forms.StyleForm.genres.label')}</h4>
          <p className="text-sm text-muted-foreground mb-4">
            {t('modules.character-creator.components.forms.StyleForm.genres.description')}
          </p>
          
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2 mb-2">
              {(config.genres || []).map((genre, index) => (
                <Badge key={index} variant="secondary" className="gap-1">
                  {genre in predefinedGenres.map(g => g.id).reduce((acc, id) => ({ ...acc, [id]: true }), {}) 
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
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input 
                  placeholder={t('modules.character-creator.components.forms.StyleForm.genres.placeholder')} 
                  value={newGenre}
                  onChange={(e) => setNewGenre(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addGenre()
                    }
                  }}
                />
                <Button onClick={addGenre} size="sm" type="button">
                  {t('modules.character-creator.components.forms.StyleForm.genres.addButton')}
                </Button>
              </div>
              
              <div className="space-y-2">
                <Label>{t('modules.character-creator.components.forms.StyleForm.genres.predefinedLabel')}</Label>
                <div className="flex flex-wrap gap-2">
                  {predefinedGenres.map((genre) => (
                    <Badge 
                      key={genre.id} 
                      variant={config.genres.includes(genre.id) ? "secondary" : "outline"}
                      className="cursor-pointer hover:bg-accent"
                      onClick={() => {
                        const currentGenres = [...config.genres];
                        if (currentGenres.includes(genre.id)) {
                          // Remove if already selected
                          const index = currentGenres.indexOf(genre.id);
                          currentGenres.splice(index, 1);
                        } else {
                          // Add if not selected
                          currentGenres.push(genre.id);
                        }
                        updateConfig({
                          genres: currentGenres
                        });
                      }}
                    >
                      {genre.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
