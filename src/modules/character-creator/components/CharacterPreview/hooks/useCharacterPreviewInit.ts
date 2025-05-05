import { useEffect } from "react";
import { ColoringBookIllustrationConfig } from "@/lib/types";
import { useCharacterPreviewStore } from "../store/useCharacterPreviewStore";

interface UseCharacterPreviewInitProps {
  config: ColoringBookIllustrationConfig;
}

export function useCharacterPreviewInit({ config }: UseCharacterPreviewInitProps) {
  const { updateConfig } = useCharacterPreviewStore();
  
  // Initialize the store with the config from props
  useEffect(() => {
    updateConfig(config);
  }, [config, updateConfig]);
}
