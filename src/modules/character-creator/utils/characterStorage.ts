import { ColoringBookIllustrationConfig } from "@/lib/types";

export interface StoredCharacter {
  id: string;
  name: string;
  config: ColoringBookIllustrationConfig;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = 'character-creator-saved-characters';

/**
 * Generates a random ID for characters
 */
function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 5).toUpperCase();
}

/**
 * Generates a default name for a character based on race and class
 * @param config Character configuration
 * @returns Generated name with random ID suffix
 */
export function generateDefaultName(config: ColoringBookIllustrationConfig): string {
  const race = config.character.race || 'unknown';
  const characterClass = config.character.class || 'unknown';
  const randomId = generateRandomId();
  
  return `${race}-${characterClass}-${randomId}`;
}

/**
 * Retrieves all saved characters from localStorage
 * @returns Array of stored characters
 */
export function getSavedCharacters(): StoredCharacter[] {
  if (typeof window === 'undefined') return [];
  
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (!storedData) return [];
  
  try {
    return JSON.parse(storedData) as StoredCharacter[];
  } catch (error) {
    console.error('Failed to parse saved characters:', error);
    return [];
  }
}

/**
 * Checks if a character with the given name already exists
 * @param name Character name to check
 * @returns True if the name already exists
 */
export function characterNameExists(name: string): boolean {
  const characters = getSavedCharacters();
  return characters.some(character => character.name === name);
}

/**
 * Saves a character to localStorage
 * @param name Character name
 * @param config Character configuration
 * @param override Whether to override an existing character with the same name
 * @returns The saved character or null if save failed
 */
export function saveCharacter(
  name: string, 
  config: ColoringBookIllustrationConfig,
  override: boolean = false
): StoredCharacter | null {
  if (!name.trim()) return null;
  
  const characters = getSavedCharacters();
  const now = new Date().toISOString();
  
  // Check if character with this name already exists
  const existingIndex = characters.findIndex(character => character.name === name);
  
  if (existingIndex >= 0) {
    if (!override) return null; // Don't override without permission
    
    // Update existing character
    const updatedCharacter: StoredCharacter = {
      ...characters[existingIndex],
      config,
      updatedAt: now
    };
    characters[existingIndex] = updatedCharacter;
  } else {
    // Create new character
    const newCharacter: StoredCharacter = {
      id: generateRandomId(),
      name,
      config,
      createdAt: now,
      updatedAt: now
    };
    characters.push(newCharacter);
  }
  
  // Save to localStorage
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
    return existingIndex >= 0 ? characters[existingIndex] : characters[characters.length - 1];
  } catch (error) {
    console.error('Failed to save character:', error);
    return null;
  }
}

/**
 * Deletes a character from localStorage
 * @param name Character name to delete
 * @returns True if deletion was successful
 */
export function deleteCharacter(name: string): boolean {
  const characters = getSavedCharacters();
  const filteredCharacters = characters.filter(character => character.name !== name);
  
  if (filteredCharacters.length === characters.length) {
    return false; // No character found with that name
  }
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredCharacters));
    return true;
  } catch (error) {
    console.error('Failed to delete character:', error);
    return false;
  }
}
