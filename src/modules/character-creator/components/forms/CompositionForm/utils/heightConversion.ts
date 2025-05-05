// Convert meters to inches (1 meter = 39.3701 inches)
export const metersToInches = (meters: number): number => {
  return meters * 39.3701;
};

// Format inches to feet and inches
export const formatInches = (totalInches: number): string => {
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${feet}'${inches}"`;
};
