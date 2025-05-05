// Utility functions for loading translations

// Common translations
import { common as enCommon } from './locales/en/common';
import { common as esCommon } from './locales/es/common';

// Form components translations
import * as enPageSizeForm from './locales/en/modules/character-creator/components/forms/PageSizeForm';
import * as enStyleForm from './locales/en/modules/character-creator/components/forms/StyleForm';
import * as enLineArtForm from './locales/en/modules/character-creator/components/forms/LineArtForm';
import * as enRaceClassForm from './locales/en/modules/character-creator/components/forms/RaceClassForm';
import * as enCharacterForm from './locales/en/modules/character-creator/components/forms/CharacterForm';
import * as enEffectsForm from './locales/en/modules/character-creator/components/forms/EffectsForm';
import * as enBackgroundForm from './locales/en/modules/character-creator/components/forms/BackgroundForm';
import * as enCompositionForm from './locales/en/modules/character-creator/components/forms/CompositionForm';
import * as enWeaponsForm from './locales/en/modules/character-creator/components/forms/WeaponsForm';

import * as esPageSizeForm from './locales/es/modules/character-creator/components/forms/PageSizeForm';
import * as esStyleForm from './locales/es/modules/character-creator/components/forms/StyleForm';
import * as esLineArtForm from './locales/es/modules/character-creator/components/forms/LineArtForm';
import * as esRaceClassForm from './locales/es/modules/character-creator/components/forms/RaceClassForm';
import * as esCharacterForm from './locales/es/modules/character-creator/components/forms/CharacterForm';
import * as esEffectsForm from './locales/es/modules/character-creator/components/forms/EffectsForm';
import * as esBackgroundForm from './locales/es/modules/character-creator/components/forms/BackgroundForm';
import * as esCompositionForm from './locales/es/modules/character-creator/components/forms/CompositionForm';
import * as esWeaponsForm from './locales/es/modules/character-creator/components/forms/WeaponsForm';

// Data translations
import { races as enRaces } from './locales/en/modules/character-creator/data/races';
import { classes as enClasses } from './locales/en/modules/character-creator/data/classes';
import { races as esRaces } from './locales/es/modules/character-creator/data/races';
import { classes as esClasses } from './locales/es/modules/character-creator/data/classes';

export const loadTranslations = () => {
  // English translations
  const en = {
    common: enCommon,
    modules: {
      'character-creator': {
        components: {
          forms: {
            PageSizeForm: enPageSizeForm.PageSizeForm,
            StyleForm: enStyleForm.StyleForm,
            LineArtForm: enLineArtForm.LineArtForm,
            RaceClassForm: enRaceClassForm.RaceClassForm,
            CharacterForm: enCharacterForm.CharacterForm,
            EffectsForm: enEffectsForm.EffectsForm,
            BackgroundForm: enBackgroundForm.BackgroundForm,
            CompositionForm: enCompositionForm.CompositionForm,
            WeaponsForm: enWeaponsForm.WeaponsForm
          },
          data: {
            races: enRaces,
            classes: enClasses
          }
        }
      }
    }
  };

  // Spanish translations
  const es = {
    common: esCommon,
    modules: {
      'character-creator': {
        components: {
          forms: {
            PageSizeForm: esPageSizeForm.PageSizeForm,
            StyleForm: esStyleForm.StyleForm,
            LineArtForm: esLineArtForm.LineArtForm,
            RaceClassForm: esRaceClassForm.RaceClassForm,
            CharacterForm: esCharacterForm.CharacterForm,
            EffectsForm: esEffectsForm.EffectsForm,
            BackgroundForm: esBackgroundForm.BackgroundForm,
            CompositionForm: esCompositionForm.CompositionForm,
            WeaponsForm: esWeaponsForm.WeaponsForm
          },
          data: {
            races: esRaces,
            classes: esClasses
          }
        }
      }
    }
  };

  return { en, es };
};
