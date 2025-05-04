import { ColoringBookIllustrationConfig } from "@/lib/types";
import { loadTranslations } from "@/lib/i18n/utils";

// Load all translations for direct access
const translations = loadTranslations();

/**
 * Translates a given race or class ID to its name using the specified language
 * @param type 'races' or 'classes'
 * @param id The ID of the race or class
 * @param language The target language code ('en' or 'es')
 * @returns The translated name
 */
function getTranslatedName(
  type: 'races' | 'classes', 
  id: string, 
  language: 'en' | 'es'
): string {
  try {
    // Using type assertion to handle the dynamic key access
    const translationData = translations[language].modules['character-creator'].components.data;
    return (translationData[type] as Record<string, { name: string; description: string }>)[id].name;
  } catch {
    // Log the error but don't capture the error variable
    console.error(`Translation not found for ${type}.${id} in ${language}`);
    return id;
  }
}

/**
 * Translates a given race or class ID to its description using the specified language
 * @param type 'races' or 'classes'
 * @param id The ID of the race or class
 * @param language The target language code ('en' or 'es')
 * @returns The translated description
 */
function getTranslatedDescription(
  type: 'races' | 'classes', 
  id: string, 
  language: 'en' | 'es'
): string {
  try {
    // Using type assertion to handle the dynamic key access
    const translationData = translations[language].modules['character-creator'].components.data;
    return (translationData[type] as Record<string, { name: string; description: string }>)[id].description;
  } catch {
    // Log the error but don't capture the error variable
    console.error(`Translation not found for ${type}.${id} in ${language}`);
    return '';
  }
}

/**
 * Exports the character configuration with names and descriptions in the specified language
 * @param config The character configuration
 * @param language The target language for the export
 * @returns Character data with translated fields
 */
export function exportCharacterInLanguage(
  config: ColoringBookIllustrationConfig, 
  language: 'en' | 'es'
): ColoringBookIllustrationConfig {
  // Get the basic character info
  const characterData = {
    ...config,
    character: {
      ...config.character,
      // Add translated race information if available
      race: config.character.race ? {
        id: config.character.race,
        name: getTranslatedName('races', config.character.race, language),
        description: getTranslatedDescription('races', config.character.race, language)
      } : undefined,
      // Add translated class information if available
      class: config.character.class ? {
        id: config.character.class,
        name: getTranslatedName('classes', config.character.class, language),
        description: getTranslatedDescription('classes', config.character.class, language)
      } : undefined
    }
  };

  return characterData as ColoringBookIllustrationConfig;
}

/**
 * Downloads the character data as a JSON file
 * @param data The data to download
 * @param filename The name of the file to download
 */
export function downloadJson(data: ColoringBookIllustrationConfig | Record<string, unknown>, filename: string): void {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  
  // Clean up
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}