import {
  argbFromHex,
  themeFromSourceColor,
  hexFromArgb
} from "@material/material-color-utilities";

// The Bioluminescent Seed: High-energy Emerald
export const themeSeed = "#00C853";

export const initializeTheme = () => {
  const theme = themeFromSourceColor(argbFromHex(themeSeed));
  const scheme = theme.schemes.dark;
  const root = document.documentElement;

  const colorMap: Record<string, any> = {
    "--md-sys-color-primary": scheme.primary,
    "--md-sys-color-on-primary": scheme.onPrimary,
    "--md-sys-color-secondary": "#B9F6CA", // Bioluminescent Mint
    "--md-sys-color-tertiary": "#FFD700", // Insights Gold
    "--md-sys-color-surface": "#050705", // Deep Bio-Obsidian
    "--md-sys-color-on-surface": "#E1E3DF",
    "--md-sys-color-surface-container": "#111411",
    "--md-sys-color-outline": "rgba(0, 200, 83, 0.2)", // Emerald Outline
  };

  Object.entries(colorMap).forEach(([prop, value]) => {
    const hex = typeof value === 'string' ? value : hexFromArgb(value);
    root.style.setProperty(prop, hex);
  });
};
