import { useState } from 'react';
import { useCharacterCreatorStore } from '../store/useCharacterCreatorStore';

export function useStyleForm() {
  const store = useCharacterCreatorStore();
  const [newGenre, setNewGenre] = useState<string>('');
  
  // Extract only the parts of the state that this form needs
  const styleConfig = {
    artStyle: store.config.artStyle,
    genres: store.config.genres || []
  };
  
  // Provide a form-specific update method
  const updateStyleConfig = (config: { artStyle?: string; genres?: string[] }) => {
    store.updateStyle(
      config.artStyle || styleConfig.artStyle,
      config.genres || styleConfig.genres
    );
  };

  // Genre management methods
  const addGenre = () => {
    if (!newGenre.trim()) return;
    
    // Check if genre already exists
    if (!styleConfig.genres.includes(newGenre.trim())) {
      const updatedGenres = [...styleConfig.genres, newGenre.trim()];
      updateStyleConfig({ genres: updatedGenres });
    }
    
    // Clear the input
    setNewGenre('');
  };
  
  const removeGenre = (index: number) => {
    const updatedGenres = [...styleConfig.genres];
    updatedGenres.splice(index, 1);
    updateStyleConfig({ genres: updatedGenres });
  };
  
  const toggleGenre = (genreId: string) => {
    const currentGenres = styleConfig.genres;
    let updatedGenres: string[];
    
    if (currentGenres.includes(genreId)) {
      // Remove genre if already selected
      updatedGenres = currentGenres.filter(id => id !== genreId);
    } else {
      // Add genre if not selected
      updatedGenres = [...currentGenres, genreId];
    }
    
    updateStyleConfig({ genres: updatedGenres });
  };
  
  return {
    config: styleConfig,
    updateConfig: updateStyleConfig,
    newGenre,
    setNewGenre,
    addGenre,
    removeGenre,
    toggleGenre
  };
}
