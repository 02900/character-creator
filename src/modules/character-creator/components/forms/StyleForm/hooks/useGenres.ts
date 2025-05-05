import { useI18n } from "@/lib/i18n";

export interface Genre {
  id: string;
  name: string;
}

/**
 * A hook that provides internationalized genre data
 * for the character creator.
 */
export function useGenres() {
  const { t } = useI18n();

  // Array of all genre IDs
  const genreIds = [
    "isekai",
    "dark_fantasy",
    "adventure",
    "action",
    "comedy",
    "romance",
    "sci_fi",
    "horror",
    "mystery",
    "slice_of_life",
    "historical",
    "supernatural",
    "fantasy",
    "magical_girl",
    "mecha",
    "post_apocalyptic",
    "psychological",
    "thriller",
    "cyberpunk",
    "steampunk"
  ];

  // Map the IDs to Genre objects with translated names
  const genres: Genre[] = genreIds.map(id => ({
    id,
    name: t(`modules.character-creator.components.forms.StyleForm.genres.${id}`)
  }));

  return { genres };
}
